import Title from "./Title";

const brands = [
    {
        name: "Google",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/375px-Google_2015_logo.svg.png",
    },
    {
        name: "Google",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/375px-Google_2015_logo.svg.png",
    },
    {
        name: "Google",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/375px-Google_2015_logo.svg.png",
    },
    {
        name: "Google",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/375px-Google_2015_logo.svg.png",
    },
    {
        name: "Google",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/375px-Google_2015_logo.svg.png",
    },
    {
        name: "Google",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/375px-Google_2015_logo.svg.png",
    },
    {
        name: "Google",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/375px-Google_2015_logo.svg.png",
    },
    {
        name: "Google",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/375px-Google_2015_logo.svg.png",
    },
    {
        name: "Google",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/375px-Google_2015_logo.svg.png",
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
                            alt={brand.name}
                            className="h-16 w-auto object-contain mb-2 filter grayscale"
                            loading="lazy"
                        />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{brand.name}</span>
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
