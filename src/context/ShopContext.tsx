import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { products as productsData } from '@/assets/assets';

interface ShopContextType {
    products: {
        _id: string;
        name: string;
        description: string;
        price: number;
        image: string[];
        category: string;
        subCategory: string;
        sizes: string[];
        date: number;
        bestseller: boolean;
    }[];
    currency: string;
    delivery_fee: number;
    search: string;
    setSearch: (value: string) => void;
    isSearchOpen: boolean;
    setIsSearchOpen: (value: boolean) => void;
    cartItems: Record<string, Record<string, number>>;
    addToCart: (id: string, size: string) => void;
    getCartCount: () => number;
    updateQuantity: (id: string, size: string, quantity: number) => void;
    getCartAmount: () => number;
    resetCart: () => void;
    placeOrder: () => void;
    placedOrders: Order[];
    setPlacedOrders: (orders: Order[]) => void;
    setCartItems: (items: Record<string, Record<string, number>>) => void;
    navigate: (path: string) => void;
}

interface Order {
    id: number;
    date: string;
    items: Record<string, Record<string, number>>;
    status?: string;
    totalAmount?: number;
}

export const ShopContext = createContext<ShopContextType | null>(null);

export const ShopProvider = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate();
    const currency = "₹";
    const delivery_fee = 40;

    // Initialize state from localStorage or default values
    const [cartItems, setCartItems] = useState<Record<string, Record<string, number>>>(() => {
        const saved = localStorage.getItem('cartItems');
        return saved ? JSON.parse(saved) : {};
    });

    const [placedOrders, setPlacedOrders] = useState<Order[]>(() => {
        const saved = localStorage.getItem('placedOrders');
        return saved ? JSON.parse(saved) : [];
    });

    const [search, setSearch] = useState("");
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    // Save to localStorage whenever state changes
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        localStorage.setItem('placedOrders', JSON.stringify(placedOrders));
    }, [placedOrders]);

    const resetCart = () => {
        setCartItems({});
        localStorage.removeItem('cartItems');
    };

    const placeOrder = () => {
        if (getCartCount() === 0) {
            toast.error("Cart is empty. Please add items before placing an order.");
            return;
        }

        const order: Order = {
            id: Date.now(),
            date: new Date().toLocaleString(),
            items: { ...cartItems },
            status: 'Pending',
            totalAmount: getCartAmount() + delivery_fee
        };

        setPlacedOrders((prevOrders) => {
            const newOrders = [order, ...prevOrders];
            localStorage.setItem('placedOrders', JSON.stringify(newOrders));
            return newOrders;
        });

        resetCart();
        toast.success("Your order has been placed successfully!");
        navigate('/orders');
    };

    const addToCart = (itemId: string, size: string) => {
        if (!itemId || !size) {
            return toast.error("Please select a size");
        }

        const cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
                toast.success("Item added to cart");
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = { [size]: 1 };
        }

        setCartItems(cartData);
    };

    const getCartCount = () => {
        let count = 0;
        for (const item in cartItems) {
            for (const size in cartItems[item]) {
                try {
                    if (cartItems[item][size] > 0) {
                        count += cartItems[item][size];
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        }
        return count;
    };

    const updateQuantity = (itemId: string, size: string, quantity: number) => {
        const cartData = structuredClone(cartItems);
        if (quantity === 0) {
            delete cartData[itemId][size];
            if (Object.keys(cartData[itemId]).length === 0) {
                delete cartData[itemId];
            }
        } else {
            cartData[itemId][size] = quantity;
        }
        setCartItems(cartData);
    };

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            const itemInfo = productsData.find((product) => product._id === items);
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0 && itemInfo) {
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        }
        return totalAmount;
    };

    const value: ShopContextType = {
        products: productsData,
        currency,
        delivery_fee,
        search,
        setSearch,
        isSearchOpen,
        setIsSearchOpen,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        resetCart,
        placeOrder,
        placedOrders,
        setPlacedOrders,
        setCartItems,
        navigate,
    };

    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};