import Item1 from '../assets/img/menu/menu-item-1.png';
import Item2 from '../assets/img/menu/menu-item-2.png';
import Item3 from '../assets/img/menu/menu-item-3.png';
import Item4 from '../assets/img/menu/menu-item-4.png';
import Item5 from '../assets/img/menu/menu-item-5.png';
import Item6 from '../assets/img/menu/menu-item-6.png';
import { useState } from 'react';

function Menu() {
    // State to manage the active category
    const [activeCategory, setActiveCategory] = useState("Starters");

    // Menu content data
    const menuItems = {
        Starters: [
            { id: 1, name: "Magnam Tiste", description: "Lorem, deren, trataro, filede, nerada", price: "$5.95", image: Item1 },
            { id: 2, name: "Aut Luia", description: "Lorem, deren, trataro, filede, nerada", price: "$15.95", image: Item2 },
            { id: 3, name: "Est Eligendi", description: "Lorem, deren, trataro, filede, nerada", price: "$8.95", image: Item3 },
        ],
        Breakfast: [
            { id: 1, name: "Breakfast Item 1", description: "Sample description", price: "$10.95", image: Item4 },
            { id: 2, name: "Breakfast Item 2", description: "Sample description", price: "$12.95", image: Item5 },
            { id: 3, name: "Breakfast Item 3", description: "Sample description", price: "$12.95", image: Item6 },
        ],
        Lunch: [
            { id: 1, name: "Lunch Item 1", description: "Sample description", price: "$14.95", image: Item6 },
            { id: 2, name: "Lunch Item 2", description: "Sample description", price: "$13.95", image: Item1 },
            { id: 3, name: "Lunch Item 3", description: "Sample description", price: "$23.95", image: Item3 },
        ],
        Dinner: [
            { id: 1, name: "Dinner Item 1", description: "Sample description", price: "$20.95", image: Item2 },
            { id: 2, name: "Dinner Item 2", description: "Sample description", price: "$22.95", image: Item3 },
            { id: 3, name: "Dinner Item 3", description: "Sample description", price: "$32.95", image: Item4 },
        ],
    };

    return (
        <div id='menu' className="max-w-[1240px] mx-auto my-50 lg:my-10 px-4 py-10">

            {/* Section Heading */}
            <div className="text-center mb-10">
                <h1 className="text-gray-500 text-lg uppercase">Our Menu</h1>
                <h1 className="text-3xl font-serif">
                    Check Our <span className="text-green-600">Name Menu</span>
                </h1>
            </div>

            {/* Nav Heading */}
            <div className="text-center">
                <ul className="flex flex-row gap-6 justify-center">
                    {Object.keys(menuItems).map((category) => (
                        <li
                            key={category}
                            className={`hover:border-b-2 border-b-green-500 hover:text-gray-700 cursor-pointer ${
                                activeCategory === category ? "text-green-600 font-bold" : ""
                            }`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Dynamic Section Title */}
            <div className="text-center text-gray-500 mb-10 pt-9">
                <h1 className="text-sm uppercase">Menu</h1>
                <h1 className="text-green-600 text-3xl font-mono">{activeCategory}</h1>
            </div>

            {/* Dynamic Menu Items */}
            <div className="max-w-[1240px] flex flex-wrap lg:flex-row flex-col justify-center items-center">
            <div className="max-w-[1240px] flex flex-wrap lg:flex-row flex-col justify-center items-start gap-8">
    {menuItems[activeCategory].map((item) => (
        <div
            key={item.id}
            className="flex flex-col items-center justify-start text-center w-full lg:w-[30%] space-y-4"
        >
            <img
                src={item.image}
                alt={item.name}
                className="lg:w-[300px] w-[80%] mx-auto object-contain"
            />
            <div>
                <h1 className="text-2xl font-semibold">{item.name}</h1>
                <h2 className="text-gray-500 text-sm">{item.description}</h2>
                <h3 className="text-xl font-bold text-green-500">{item.price}</h3>
            </div>
        </div>
    ))}
</div>

            </div>
        </div>
    );
}

export default Menu;
