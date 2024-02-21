import CafeBanner from './assets/CafeBanner.png';


export default function Home() {
    return (
        <div className='flex justify-center '>
            <div className='w-4/5'>
                <img src={CafeBanner} alt="banner" className='w-full rounded-2xl' style={{ height: 'auto'}}/>
            </div>
        </div>
    );
};