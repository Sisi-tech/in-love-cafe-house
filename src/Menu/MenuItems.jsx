import { useState, useEffect } from 'react';

export default function Menu() {
    const [hotCoffee, setHotCoffee] = useState({});
    const [icedCoffee, setIcedCoffee] = useState({});
    const [loadingHot, setLoadingHot] = useState(true);
    const [loadingIced, setLoadingIced] = useState(true);


    useEffect(() => {
        console.log('Fetching data...');
        fetch(`https://api.sampleapis.com/coffee/hot`)
            .then((response) => response.json())
            .then((jsonData) => {
                setHotCoffee(jsonData);
                setLoadingHot(false);
        })
        .catch((error) => {
            console.log('Error fetching data:', error);
            setLoadingHot(false);
        });
    }, []);

    useEffect(() => {
        fetch(`https://api.sampleapis.com/coffee/iced`)
            .then((response) => response.json())
            .then((jsonData) => {
                setIcedCoffee(jsonData);
                setLoadingIced(false);
            })
            .catch((error) => {
                console.log('Error fetching data:', error);
                setLoadingIced(false);
            });
    }, []);

    console.log('Loading state - Hot Coffee:', loadingHot);
    console.log('Loading state - Iced Coffee:', loadingIced);

    if (loadingHot || loadingIced) {
        return <p>Loading...</p>;
    }

    return (
        <div className='flex flex-col justify-center items-center text-center pl-6 pr-6'>
            <section>
            <h2 className='m-12 text-2xl sm:text-3xl font-bold text-orange-900'>HOT COFFEE</h2>
            <div  className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
                {hotCoffee.map((item) => {
                    return (
                        <div key={item.id} className='flex flex-col items-center text-left bg-orange-50 m-4 p-6 rounded-md'>
                            <img src={item.image} alt={item.title} style={{ width: '340px'}} className='rounded-md shadow-md shadow-orange-300'/>
                            <div className='pl-4'>
                                <div className='flex text-left w-full text-xl pt-4 pb-2'>
                                    <p className='font-bold'>{item.title}</p>
                                    <p className='price pl-6'>$6.99</p>
                                </div>
                                <p><span className='font-bold'>Description:</span> {item.description}</p>
                                <p><span className='font-bold'>Ingredients:</span> {item.ingredients.join(', ')}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            </section>
            <section>
            <h2 className='m-12 text-2xl sm:text-3xl font-bold text-orange-900'>ICED COFFEE</h2>
            <div  className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
                {icedCoffee.map((item) => {
                    return (
                        <div key={item.id} className='flex flex-col items-center text-left bg-orange-50 m-4 p-6 rounded-md'>
                            <img src={item.image} alt={item.title} style={{ width: '340px'}} className='rounded-md shadow-md shadow-orange-300'/>
                            <div className='pl-4'>
                                <div className='flex text-left w-full text-xl pt-4 pb-2'>
                                    <p className='font-bold'>{item.title}</p>
                                    <p className='price pl-6'>$6.99</p>
                                </div>
                                <p><span className='font-bold'>Description:</span> {item.description}</p>
                                <p><span className='font-bold'>Ingredients:</span> {item.ingredients.join(', ')}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            </section>
        </div>
    );
}