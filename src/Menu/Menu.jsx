import Brunch from './Brunch';
import Dessert from './Dessert';
import HotCoffee from './HotCoffee';
import IcedCoffee from './IcedCoffee';

export default function Menu() {
    return (
        <div className='flex flex-col justify-center align-center'>
            <HotCoffee />
            <IcedCoffee />
            <Dessert />
            <Brunch />
        </div>
    )
};