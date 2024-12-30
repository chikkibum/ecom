import { useState } from 'react';
import { Button } from '@/components/ui/button'; // Assuming you're using a custom button component
import { ShoppingCart as ShoppingCartIcon } from 'lucide-react'; // Assuming you're using Lucide icons

export const Cart = () => {
  // State to hold the number of items in the cart
  const [cartCount, setCartCount] = useState(0);
  return (
    <div className="relative flex items-center">
      {/* Cart Icon */}
      <Button variant="ghost" size="icon" className="relative">
        <ShoppingCartIcon size={25} />
          <span className="absolute top-1 right-0 text-xs font-medium text-white bg-gray-500 rounded-full w-4 h-4 flex items-center justify-center">
            {cartCount}
          </span>
      </Button>
      </div>
  );
};

