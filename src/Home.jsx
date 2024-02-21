import CafeBanner from './assets/CafeBanner.png';


export default function Home() {
    return (
        <div className='flex h-12 w-5/6 sm:w-4/5 justify-center '>
            <div>
                <img src={CafeBanner} alt="banner" className='w-full rounded-2xl' style={{ maxHeight: '300px'}}/>
            </div>
        </div>
    );
};