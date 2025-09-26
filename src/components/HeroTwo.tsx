// import img from "@/assets/ecom1.jpg"
export const HeroTwo = () => {
  return (
    <div className='flex flex-row gap-5 lg:w-[75vw] md:w-[80vw] mx-auto'>
      <div className="flex flex-col gap-10 p-12 w-[80%]">
        <div>
          <h1 className="font-bold text-6xl">ART OF HOOKAH</h1>
          <h1 className="font-bold text-5xl">PREMIUM FLAVORS.</h1>
          <p className="pt-3 pb-5 text-white/60">Discover our exclusive collection of hookahs and flavors, crafted for those who appreciate quality and style. Elevate your gatherings and unwind in luxury.</p>
          <div className="flex gap-5">
            <button className='border border-white bg-white text-black p-4 px-8'>Shop Hookahs</button>
            <button className='border border-gray-300 p-4 px-8'>Browse Flavours</button>
          </div>
        </div>
        <div className="rounded-full overflow-hidden w-[500px] h-[500px]">
          <img src={"https://www.jaipurcraftonline.com/cdn/shop/files/CPP08971.jpg?v=1721727121"} alt="" className="rounded-full" />
        </div>
      </div>
      <div className="flex flex-col gap-8 items-center justify-center">
        <div className="rounded-full">
          <img src={"https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=861,fit=scale-down/cdn-ecommerce/store_01H0SFJAF1X3B9WVQSV7EGKEHA%2Fassets%2F1719237675570-fly%20hookah%20pic.png"} alt="" className="rounded-full w-[350px] h-[450px]" />
        </div>
        <div className="flex gap-8 w-full items-center justify-center">
          <p className="p-16 w-[50%] bg-[#131313] text-center rounded-full">Enjoy curated hookah experiences that highlight your taste and presence.</p>
          <p className="p-16 w-[50%] bg-[#131313] text-center rounded-full">Relax, connect, and savor every moment with our premium selection.</p>
        </div>
      </div>
    </div>
  )
}

