import Title from "./Title";
import logo2 from "@/assets/logo2.png"
import logo3 from "@/assets/logo3.png"
import logo4 from "@/assets/logo4.png"
import logo5 from "@/assets/logo5.png"
import logo6 from "@/assets/logo6.png"
import logo7 from "@/assets/logo7.png"
import logo8 from "@/assets/logo8.jpg"
const brands = [
    {
        src: logo2,
    },
    {
        src: logo3,
    },
    {
        src: logo4,
    },
    {
        src: logo5,
    },
    {
        src: logo6,
    },
    {
        src: logo7,
    },
    {
        src: logo8,
    },

    // Add more brands here as needed
];

export const Brands = () => (
    <section className="py-8">
        <div className="text-center py-8 text-3xl">
            <Title text1={"OUR"} text2={"BRANDS"} />
            <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-muted-foreground dark:text-gray-200">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem I
            </p>
        </div>
        <div className="overflow-hidden w-full mt-8">
            <div
                className="flex items-center gap-16 animate-scroll-infinite"
                style={{
                    animation: "scroll-infinite 30s linear infinite"
                }}
            >
                {[...brands, ...brands].map((brand, idx) => (
                    <div key={idx} className="flex flex-col items-center min-w-[120px]">
                        <img
                            src={brand.src}
                            // alt={brand.name}
                            className="h-16 w-auto object-contain mb-2"
                            loading="lazy"
                        />
                        {/* <span className="text-sm text-gray-600 dark:text-gray-300">{brand.name}</span> */}
                    </div>
                ))}
            </div>
        </div>
        <style>{`
            @keyframes scroll-infinite {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
        `}</style>
    </section>
);
