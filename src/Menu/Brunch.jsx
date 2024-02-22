const brunch = [
    {
        id: 1,
        name: "Asparagus grilled beef",
        image: "src/assets/brunch/asparagus-grilled-beef.jpg",
        price: 19.99
    },
    {
        id: 2,
        name: "Mixed vegs",
        image: "src/assets/brunch/brunch-mixed.jpg",
        price: 12.99
    },
    {
        id: 3,
        name: "Pancakes",
        image: "src/assets/brunch/pancakes.jpg",
        price: 12.99
    },
    {
        id: 4,
        name: "Salmon with fried egg",
        image: "src/assets/brunch/salmon_fried_egg.jpg",
        price: 14.99
    },
    {
        id: 5,
        name: "Pizza",
        image: "src/assets/brunch/pizza.jpg",
        price: 14.89
    },
    {
        id: 6,
        name: "Grilled salmon",
        image: "src/assets/brunch/grilled_salmon.jpg",
        price: 18.99
    },
    {
        id: 7,
        name: "Pan fried fish",
        image: "src/assets/brunch/pan_fried_fish.jpg",
        price: 18.99
    },
    {
        id: 8,
        name: "Sandwich",
        image: "src/assets/brunch/sandwich.jpg",
        price: 13.99
    },
    {
        id: 9,
        name: "Lobster sandwich",
        image: "src/assets/brunch/lobster-sandwich.jpg",
        price: 16.99
    },
    {
        id: 10,
        name: "Waffles",
        image: "src/assets/brunch/waffles.jpg",
        price: 11.99
    },
    {
        id: 11,
        name: "Ukrainian dill potatoes",
        image: "src/assets/brunch/ukrainian-dill-potatoes.jpg",
        price: 12.99
    },
    {
        id: 12,
        name: "Pasta",
        image: "src/assets/brunch/pasta.jpg",
        price: 19.99
    },
    {
        id: 13,
        name: "Salad",
        image: "src/assets/brunch/salad.jpg",
        price: 13.99
    },
    {
        id: 14,
        name: "Sandwich",
        image: "src/assets/brunch/sandwich2.jpg",
        price: 9.99
    },
]

export default function Brunch() {
    return (
        <div className="w-full flex flex-col justify-center align-center text-center pt-6">
            <h2 className="m-6 text-2xl sm:text-3xl font-bold text-orange-900">BRUNCH</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-4">
                {
                    brunch.map((item) => {
                        return (
                            <div className="flex flex-col justify-center items-center bg-orange-50 w-[500px] m-16 p-8 rounded-md container transition-transform duration-300 hover:scale-105">
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    key={item.id} 
                                    className="w-[460px] h-auto rounded-md shadow-md shadow-orange-300"
                                />
                                <div className="flex w-full text-xl pt-4 pb-2 pl-14 gap-10">
                                    <h2>{item.name}</h2>
                                    <p>${item.price}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};