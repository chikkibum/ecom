// @ts-nocheck

import { motion } from 'framer-motion';
import { useState, useContext } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import Title from './Title';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { toast } from 'sonner';

export default function OrderForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    zipcode: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    paymentMethod: 'card', // default payment method
  });
  const [errors, setErrors] = useState({});
  const { cartItems, getCartAmount, getCartCount, setCartItems, setPlacedOrders } = useContext(ShopContext);
  const navigate = useNavigate();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: '' }));
  };

  const handlePaymentMethodChange = (value) => {
    setFormData((prev) => ({ ...prev, paymentMethod: value }));
    setErrors((prev) => ({ ...prev, paymentMethod: '' }));
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.zipcode.trim()) newErrors.zipcode = 'Zip Code is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.paymentMethod) newErrors.paymentMethod = 'Payment method is required';
    if (formData.paymentMethod === 'card') {
      if (!formData.cardNumber.trim()) newErrors.cardNumber = 'Card Number is required';
      if (!formData.expiry.trim()) newErrors.expiry = 'Expiry Date is required';
      if (!formData.cvv.trim()) newErrors.cvv = 'CVV is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const placeOrder = () => {
    if (!validateStep1() || !validateStep2()) return;

    const order = {
      id: `order_${Date.now()}`,
      date: new Date().toLocaleString(),
      items: cartItems,
      totalAmount: getCartAmount(),
      user: {
        name: formData.name,
        address: formData.address,
        city: formData.city,
        zipcode: formData.zipcode,
        paymentMethod: formData.paymentMethod,
        cardDetails: formData.paymentMethod === 'card' ? {
          cardNumber: formData.cardNumber,
          expiry: formData.expiry,
          cvv: formData.cvv
        } : null,
      },
    };
    console.log("hello")
    // Add order to placed orders by updating the existing orders array
    setPlacedOrders((prevOrders) => [...prevOrders, order]);
    toast.success('Order placed successfully!');
    setCartItems({}); // Clear cart after order
    getCartCount(); // Update cart count
    navigate('/orders'); // Redirect to orders page
  };

  return (
    <motion.div
      className="bg-white dark:border-2 dark:bg-black p-8 rounded-lg shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {step === 1 && (
        <motion.div key="step1" {...fadeInUp}>
          <Title text1='DELIVERY' text2='INFORMATION' />
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleInputChange}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                placeholder="123 Main St"
                value={formData.address}
                onChange={handleInputChange}
              />
              {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
            </div>
            <div>
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                placeholder="New York"
                value={formData.city}
                onChange={handleInputChange}
              />
              {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
            </div>
            <div>
              <Label htmlFor="zipcode">Zip Code</Label>
              <Input
                id="zipcode"
                placeholder="10001"
                value={formData.zipcode}
                onChange={handleInputChange}
              />
              {errors.zipcode && <p className="text-red-500 text-sm">{errors.zipcode}</p>}
            </div>
            <Button
              onClick={() => {
                if (validateStep1()) setStep(2);
              }}
              className="w-full"
            >
              Next
            </Button>
          </div>
        </motion.div>
      )}

      {step === 2 && (
        <motion.div key="step2" {...fadeInUp}>
          <h2 className="text-2xl font-light mb-6">Payment Method</h2>
          <RadioGroup
            value={formData.paymentMethod}
            onValueChange={handlePaymentMethodChange}
          >
            <div className="flex items-center space-x-2 mb-4">
              <RadioGroupItem value="card" id="card" />
              <Label htmlFor="card">Credit Card</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <RadioGroupItem value="Razorpay" id="Razorpay" />
              <Label htmlFor="Razorpay">Razorpay</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <RadioGroupItem value="Stripe" id="Stripe" />
              <Label htmlFor="Stripe">Stripe</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Cash on Delivery" id="Cash on Delivery" />
              <Label htmlFor="Cash on Delivery">Cash on Delivery</Label>
            </div>
          </RadioGroup>
          {errors.paymentMethod && <p className="text-red-500 text-sm">{errors.paymentMethod}</p>}

          {formData.paymentMethod === 'card' && (
            <div className="mt-6 space-y-4">
              <div>
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                />
                {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber}</p>}
              </div>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input
                    id="expiry"
                    placeholder="MM/YY"
                    value={formData.expiry}
                    onChange={handleInputChange}
                  />
                  {errors.expiry && <p className="text-red-500 text-sm">{errors.expiry}</p>}
                </div>
                <div className="flex-1">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    placeholder="123"
                    value={formData.cvv}
                    onChange={handleInputChange}
                  />
                  {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv}</p>}
                </div>
              </div>
            </div>
          )}

          <div className="flex space-x-4 mt-6">
            <Button
              onClick={() => setStep(1)}
              variant="outline"
              className="flex-1"
            >
              Back
            </Button>
            <Button
              onClick={() => {
                if (validateStep2()) setStep(3);
              }}
              className="flex-1"
            >
              Next
            </Button>
          </div>
        </motion.div>
      )}

      {step === 3 && (
        <motion.div key="step3" {...fadeInUp}>
          <h2 className="text-2xl font-light mb-6">Review & Place Order</h2>
          <p className="text-gray-600 mb-6">Please review your information before placing the order.</p>
          <Button onClick={placeOrder} className="w-full">Place Order</Button>
        </motion.div>
      )}
    </motion.div>
  );
}
