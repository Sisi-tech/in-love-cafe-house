import myVideo from './assets/cafeVideo.mp4';

export default function Reservation() {
    return (
        <div className="w-4/5 h-full flex flex-col justify-center align-center bg-orange-50 p-8 m-4 pb-20">
            <h2 className='text-center text-3xl mb-10'>Make a reservation</h2>
            <div className='flex flex-row justify-center gap-40 '>
                <video controls autoPlay loop className='h-[800px] rounded-xl'>
                    <source src={myVideo} type="video/mp4"></source>
                </video>
                <div className='w-[600px]'>
                    <p>
                    Secure your table at Love Cafe House today. From intimate dinners to friendly gatherings, reserve now for a memorable dining experience. Enjoy our cozy ambiance, exceptional service, and delectable cuisine with loved ones.
                    </p>
                </div>
            </div>
        </div>
    );
};