import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

export const Footer = () => {
    return (
        <div className="container lg:w-[75vw] md:w-[80vw] mx-auto px-8 md:px-2 mt-2 md:mt-4">
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <Link to="/">
                    👨‍💻
                    </Link>
                    <p className='w-full md:w-2/3 text-gray-600'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lor
                    </p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li><Link to="/" className="hover:text-gray-800">Home</Link></li>
                        <li><Link to="/about" className="hover:text-gray-800">About us</Link></li>
                        <li><Link to="/orders" className="hover:text-gray-800">Delivery</Link></li>
                        <li><Link to="/privacy" className="hover:text-gray-800">Privacy policy</Link></li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+1-212-456-7890</li>
                        <li><Link to="/contact" className="hover:text-gray-800">contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}