import Menu from "./Menu/Menu";


export default function Home() {
    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <div className="w-4/5 sm:h-[180px] md:h-[240px] bg-cover bg-center bg-[url('./assets/CafeBanner1.png')] rounded-xl shadow-md shadow-orange-900">
                    <p className="text-white text-left md:text-xl sm:text-sm sm:pt-2 lg:pt-10 lg:pl-10 sm:pl-4 md:w-[600px]">
                       Indulge in Love Cafe House, where every sip is a love story and every moment is sweet. Experience our cozy ambiance, savor finely crafted brews and bites, and connect with loved ones over delightful treats and heartwarming conversations.
                    </p>
            </div>
            <div className="pt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-around md:gap-4 lg:gap-16">
                <section className="w-[420px] bg-orange-100 p-5 rounded-md">
                    <h2 className="py-4 font-bold text-xl">Our Menu</h2>
                    <img src='src/assets/bookCoffee.jpg'  alt="menu" className="w-[400px]"/>
                    <p className="mb-4 mt-4">
                        Explore our delectable menu featuring a delightful array of culinary treasures, from tantalizing beverages to mouthwatering dishes. Each item is carefully crafted to satisfy your cravings and elevate your dining experience. Dive into a world of flavors and indulge in the perfect blend of taste and satisfaction.
                    </p>
                    <a href="#">See our menu</a>
                </section>
                <section className="w-[420px] bg-orange-100 p-5 rounded-md">
                    <h2 className="py-4 font-bold text-xl">Book a table</h2>
                    <img src='src/assets/dessert/brownie.jpg'  alt="reservation_img" className="w-[400px]"/>
                    <p className="mb-4 mt-4">
                        Secure your table at Love Cafe House today. From intimate dinners to friendly gatherings, reserve now for a memorable dining experience. Enjoy our cozy ambiance, exceptional service, and delectable cuisine with loved ones.
                    </p>
                    <a href="#">Book your table now</a>
                </section>
                <section className="w-[420px] bg-orange-100 p-5 rounded-md">
                    <h2 className="py-4 font-bold text-xl">Opening Hours</h2>
                    <img src='src/assets/table.jpg'  alt="reservation_img" className="w-[400px]"/>
                    <p className="mb-4 mt-4">
                        Discover our opening hours and plan your visit to Love Cafe House for a delightful experience.
                    </p>
                    <div className="pl-10 pt-4">
                        <p>Mon - Fri: 10am - 10pm</p>
                        <p>Sat: 11am - 11pm</p>
                        <p>Sun: 11am - 10pm</p>
                    </div>
                </section>
            </div>
        </div>
    );
};