import { createContext, ReactNode, useState } from 'react';
import { products as productsData } from '../assets/assets'; // Rename the imported alias to avoid confusion
import { toast } from "sonner";
import { useNavigate } from 'react-router-dom';
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
    navigate: (path: string) => void;   
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

const ShopProvider = ({ children }: { children: ReactNode }) => {
    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [isSearchOpen, setIsSearchOpen] = useState(true);
    const [cartItems, setCartItems] = useState<Record<string, Record<string, number>>>({});
    const navigate = useNavigate();

    const addToCart = async (itemId: string, size: string) => {
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

    const updateQuantity = async (itemId: string, size: string, quantity: number) => {
        const cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for(const items in cartItems){
          const itemInfo = productsData.find((product)=> product._id === items);
          for(const item in cartItems[items]){
            try {
              if (cartItems[items][item] > 0 && itemInfo) {
                totalAmount += itemInfo.price * cartItems[items][item];
              }
            } catch(error) {
                console.log(error)
            }
          }
        }
        return totalAmount;
      }

    const value: ShopContextType = {
        products: productsData, // Use the renamed alias here
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
        navigate
    };

    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export { ShopContext, ShopProvider };
