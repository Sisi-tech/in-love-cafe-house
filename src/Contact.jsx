
export default function Contact() {
    return (
        <div className="flex flex-col items-center justify-center bg-orange-100 pt-10 pb-20">
            <video autoPlay loop muted className="w-3/5 rounded-md">
                <source src="src/assets/cafeHouse.mp4" type="video/mp4" />
            </video>
            <div className="border border-orange-950 w-4/5 m-10"></div>
            <div className="grid sm:grid-cols-1 lg:grid-cols-4 justify-between lg:gap-14 sm:gap-6">
                <div className="lg:w-[160px] lg:h-[160px] sm:w-[100px] sm:h-[100px] rounded-full overflow-hidden lg:mr-10">
                    <video autoPlay loop muted className="w-full h-full object-cover">
                        <source src="src/assets/Coffees.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div>
                    <h2 className="text-2xl pb-6">Location</h2>
                    <p>123 North blvd</p>
                    <p>New York, NY 12345</p>
                </div>
                <div>
                    <h2 className="text-2xl pb-6">Contact</h2>
                    <p>InLoveCafe@gmail.com</p>
                    <p>888-888-888</p>
                </div>
                <div>
                    <h2 className="text-2xl pb-6">Hours</h2>
                    <p>Monday - Friday</p>
                    <p>10am -- 10pm</p>
                    <p>Saturday -- Sunday</p>
                    <p>11am -- 11pm</p>
                </div>
            </div>
        </div>
    )
};

