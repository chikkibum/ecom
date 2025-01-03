
import { assets } from '../assets/assets'

const OurPolicy = () => {
    return (
        <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 sm:text-sm md:text-base text-gray-700'>
            <div>
                <img src={assets.exchange_icon} className='w-12 m-auto mb-5 dark:invert' alt="" />
                <p className='font-semibold dark:text-gray-100'>Easy Exchange Policy</p>
                <p className='text-gray-500'>We offer hassle free exchange policy</p>
            </div>
            <div>
                <img src={assets.support_img} className='w-12 m-auto mb-5 dark:invert' alt="" />
                <p className='font-semibold dark:text-gray-100'>Customer Support</p>
                <p className='text-gray-500'>We offer great customer support</p>
            </div>
            <div>
                <img src={assets.quality_icon} className='w-12 m-auto mb-5 dark:invert' alt="" />
                <p className='font-semibold dark:text-gray-100'>Quality assurance</p>
                <p className='text-gray-500'>We offer the best quality products</p>
            </div>
        </div>
    )
}

export default OurPolicy