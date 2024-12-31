
import { useContext } from 'react';
import { Button } from '@/components/ui/button'; // Assuming you're using a custom button component
import { ShoppingCart as ShoppingCartIcon } from 'lucide-react'; // Assuming you're using Lucide icons
import { ShopContext } from "../context/ShopContext";

export const CartIcon = () => {
  // State to hold the number of items in the cart;

  const shopContext = useContext(ShopContext)

  return (
    <div className="relative flex items-center">
      {/* Cart Icon */}
      <Button variant="ghost" size="icon" className="relative">
        <ShoppingCartIcon size={25} />
          <span className="absolute top-5 p-0.5 right-[-4px] text-[8px] font-medium text-black bg-gray-400 rounded-full w-5 h-5 flex items-center justify-center">
            {shopContext?.getCartCount()}
          </span>
      </Button>
      </div>
  );
};

