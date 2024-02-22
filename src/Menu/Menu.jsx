import Brunch from './Brunch';
import Dessert from './Dessert';
import HotCoffee from './HotCoffee';
import IcedCoffee from './IcedCoffee';

export default function Menu() {
    return (
        <div>
            <HotCoffee />
            <IcedCoffee />
            <Dessert />
            <Brunch />
        </div>
    )
};