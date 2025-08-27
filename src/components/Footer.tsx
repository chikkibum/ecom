import { Link } from 'react-router-dom';
import logo from '../assets/Logo.jpg'
export const Footer = () => {
    return (
        <div className="container lg:w-[75vw] md:w-[80vw] mx-auto px-8 md:px-2 mt-2 md:mt-4">
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <Link to="/">
                        <img src={logo} alt="" className="w-12 h-12" />
                    </Link>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14023.993101653612!2d77.09589770694089!3d28.509699611709276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ead88ec2f2f%3A0xb31fe67da081df43!2sRajokri%20Village%2C%20Rajokri%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1756261761076!5m2!1sen!2sin" width="300" height="100" className='my-5 rounded-2xl'></iframe>
                    <p className='w-full md:w-2/3 text-gray-600'>
                        Welcome to our online marketplace, where quality meets convenience.
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