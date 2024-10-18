import Image from 'next/image';

const Restaurants = () => {
    return (
        <div>
            <main className="pt-20 px-6 bg-black text-orange-400">
                <h1 className="text-4xl font-bold text-center">Savor the Flavors</h1>
                <p className="mt-4 text-lg text-center">
                    Discover delicious cuisines and unique dining experiences.
                </p>
                <section className="mt-12">
                    <h2 className="text-3xl font-semibold text-center">Explore Culinary Delights</h2>
                    
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="bg-orange-300 text-black p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                            <Image 
                                src="/Chinese Scallion Oil Noodles.jpeg" 
                                alt="Chinese Scallion Oil Noodles" 
                                width={400} 
                                height={300} 
                                className="rounded-lg" 
                            />
                            <h3 className="font-bold text-xl mt-4">Chinese Scallion Oil Noodles</h3>
                            <p className="mt-2 text-gray-900">&quot;Delicious noodles tossed in scallion oil, perfect for any meal.&quot;</p>
                        </div>
                        <div className="bg-orange-300 text-black p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                            <Image 
                                src="/biryani.jpeg" 
                                alt="Biryani" 
                                width={400} 
                                height={300} 
                                className="rounded-lg" 
                            />
                            <h3 className="font-bold text-xl mt-4">Biryani</h3>
                            <p className="mt-2 text-gray-900">&quot;A fragrant rice dish cooked with spices and marinated meat.&quot;</p>
                        </div>
                        <div className="bg-orange-300 text-black p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                            <Image 
                                src="/burger.jpeg" 
                                alt="Burger" 
                                width={400} 
                                height={300} 
                                className="rounded-lg" 
                            />
                            <h3 className="font-bold text-xl mt-4">Burger</h3>
                            <p className="mt-2 text-gray-900">&quot;A mouthwatering burger topped with fresh ingredients and served with crispy fries.&quot;</p>
                        </div>
                        <div className="bg-orange-300 text-black p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                            <Image 
                                src="/sandwich.jpeg" 
                                alt="Tasty Grilled Sandwich" 
                                width={400} 
                                height={300} 
                                className="rounded-lg" 
                            />
                            <h3 className="font-bold text-xl mt-4">Tasty Grilled Sandwich</h3>
                            <p className="mt-2 text-gray-900">&quot;A savory sandwich filled with fresh veggies and melted cheese, grilled to perfection.&quot;</p>
                        </div>
                        <div className="bg-orange-300 text-black p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                            <Image 
                                src="/Rice.jpeg" 
                                alt="Chinese Rice" 
                                width={400} 
                                height={300} 
                                className="rounded-lg" 
                            />
                            <h3 className="font-bold text-xl mt-4">Chinese Rice</h3>
                            <p className="mt-2 text-gray-900">&quot;Fluffy rice stir-fried with fresh vegetables and soy sauce, a perfect side dish.&quot;</p>
                        </div>
                        <div className="bg-orange-300 text-black p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                            <Image 
                                src="/fish.jpeg" 
                                alt="Baked Mackerel Fish" 
                                width={400} 
                                height={300} 
                                className="rounded-lg" 
                            />
                            <h3 className="font-bold text-xl mt-4">Baked Mackerel Fish</h3>
                            <p className="mt-2 text-gray-900">&quot;Deliciously seasoned mackerel, baked to perfection for a healthy meal.&quot;</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Restaurants;
