import GoBackToTop from "./BackToTop"


const desserts = [
    {
        id: 1,
        name: "Blueberry Cake",
        description: "",
        image: "src/assets/dessert/blueberry.jpg",
        price: 6.99
    },
    {
        id: 2,
        name: "Chocolate Cake",
        description: "",
        image: "src/assets/dessert/ChocolateCake.jpg",
        price: 6.99
    },
    {
        id: 3,
        name: "Bisquit",
        description: "",
        image: "src/assets/dessert/Bisquit.jpg",
        price: 6.99
    },
    {
        id: 4,
        name: "Brownie",
        description: "",
        image: "src/assets/dessert/Brownie.jpg",
        price: 6.99
    },
    {
        id: 5,
        name: "Boston CheeseCake",
        description: "",
        image: "src/assets/dessert/BostonCheeseCake.jpg",
        price: 7.99
    },
    {
        id: 6,
        name: "Coffee Cake",
        description: "",
        image: "src/assets/dessert/CoffeeCake.jpg",
        price: 7.99
    },
    {
        id: 7,
        name: "Cheesecake",
        description: "",
        image: "src/assets/dessert/Cheesecake.jpg",
        price: 7.99
    },
    {
        id: 8,
        name: "Strawberries Tart",
        description: "",
        image: "src/assets/dessert/strawberriesTart.jpg",
        price: 7.99
    },
    {
        id: 9,
        name: "Strawberry Cake",
        description: "",
        image: "src/assets/dessert/strawberries.jpg",
        price: 7.99
    },
    {
        id: 10,
        name: "Cream-puffs",
        description: "",
        image: "src/assets/dessert/cream-puffs.jpg",
        price: 7.99
    },
    {
        id: 11,
        name: "Veg Cake",
        description: "",
        image: "src/assets/dessert/vegCake.jpg",
        price: 7.99
    },
    {
        id: 12,
        name: "Pancakes",
        description: "",
        image: "src/assets/dessert/pancakes.jpg",
        price: 7.99
    },
    {
        id: 13,
        name: "plum-cake",
        description: "",
        image: "src/assets/dessert/plum-cake.jpg",
        price: 7.99
    },
    {
        id: 14,
        name: "Cheese Cake",
        description: "",
        image: "src/assets/dessert/cake.jpg",
        price: 7.99
    },
    {
        id: 15,
        name: "Berry CheeseCake",
        description: "",
        image: "src/assets/dessert/berryCheeseCake.jpg",
        price: 7.99
    },
    {
        id: 16,
        name: "Ferrero_rocher cake",
        description: "",
        image: "src/assets/dessert/ferrero-rocher-cake.jpg",
        price: 7.99
    },
    {
        id: 17,
        name: "Lemon Tart",
        description: "",
        image: "src/assets/dessert/lemonTart.jpg",
        price: 7.99
    },
    {
        id: 18,
        name: "venus",
        description: "",
        image: "src/assets/dessert/venus.jpg",
        price: 7.99
    },
    {
        id: 19,
        name: "Nuts Cake",
        description: "",
        image: "src/assets/dessert/nutsCake.jpg",
        price: 7.99
    },
    {
        id: 20,
        name: "miniFruitCake",
        description: "",
        image: "src/assets/dessert/miniFruitCake.jpg",
        price: 7.99
    },
    {
        id: 21,
        name: "Flower Cake",
        description: "",
        image: "src/assets/dessert/flowerCake.jpg",
        price: 7.99
    },
    {
        id: 22,
        name: "Cup Cake",
        description: "",
        image: "src/assets/dessert/cupCake.jpg",
        price: 7.99
    },
    {
        id: 23,
        name: "Strawberries Cakes",
        description: "",
        image: "src/assets/dessert/strawberriesCakes.jpg",
        price: 7.99
    },
    {
        id: 25,
        name: "Pumpkin rice cake",
        description: "",
        image: "src/assets/dessert/Pumpkin.jpg",
        price: 7.99
    }
]

export default function Dessert() {
    return (
        <div className="w-full flex flex-col justify-center align-center text-center pt-6">
            <h2 className="m-6 text-2xl sm:text-3xl font-bold text-orange-900">DESSERT</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-2">
                {
                    desserts.map((cake) => {
                        return (
                            <div key={cake.id} className="flex flex-col items-center bg-orange-50 m-12 p-8 rounded-md cake_container transition-transform duration-300 hover:scale-105">
                                <img 
                                    src={cake.image} 
                                    alt={cake.name} 
                                    className="w-[460px] h-auto rounded-md shadow-md shadow-orange-300"
                                />
                                <div className="flex w-full text-xl pt-4 pb-2 pl-8 gap-10">
                                    <h2>{cake.name}</h2>
                                    <p>${cake.price}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <GoBackToTop />
        </div>
    )
};