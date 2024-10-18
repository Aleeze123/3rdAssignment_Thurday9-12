import { FaStar } from 'react-icons/fa'; 

const Reviews = () => {
    return (
        <div className="bg-black min-h-screen">
            <main className="pt-20 px-6 text-orange-400">
                <h1 className="text-4xl font-bold text-center">Customer Reviews</h1>
                <p className="mt-4 text-lg text-center">
                    See what our customers are saying about their dining experiences.
                </p>
                <section className="mt-12">
                    <h2 className="text-3xl font-semibold text-center">What Our Guests Are Saying</h2>

                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="bg-orange-300 text-black p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                            <FaStar className="text-yellow-500" />
                            <h3 className="font-bold text-xl mt-2">Hoorain</h3>
                            <p className="mt-2 text-gray-900">&quot;The food was absolutely delicious! I can&apos;t wait to come back.&quot;</p>
                        </div>
                        <div className="bg-orange-300 text-black p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                            <FaStar className="text-yellow-500" />
                            <h3 className="font-bold text-xl mt-2">Shahzain</h3>
                            <p className="mt-2 text-gray-900">&quot;A wonderful dining experience! The ambiance and service were top-notch.&quot;</p>
                        </div>
                        <div className="bg-orange-300 text-black p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                            <FaStar className="text-yellow-500" />
                            <h3 className="font-bold text-xl mt-2">Hania</h3>
                            <p className="mt-2 text-gray-900">&quot;I loved the variety on the menu! Every dish was a delight.&quot;</p>
                        </div>
                        <div className="bg-orange-300 text-black p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                            <FaStar className="text-yellow-500" />
                            <h3 className="font-bold text-xl mt-2">Huda</h3>
                            <p className="mt-2 text-gray-900">&quot;The service was exceptional, and the food was outstanding!&quot;</p>
                        </div>

                        <div className="bg-orange-300 text-black p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                            <FaStar className="text-yellow-500" />
                            <h3 className="font-bold text-xl mt-2">R Khan</h3>
                            <p className="mt-2 text-gray-900">&quot;A hidden gem! I can&apos;t recommend this place enough.&quot;</p>
                        </div>

                        <div className="bg-orange-300 text-black p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                            <FaStar className="text-yellow-500" />
                            <h3 className="font-bold text-xl mt-2">Nimra</h3>
                            <p className="mt-2 text-gray-900">&quot;Everything we tried was amazing. Will definitely return!&quot;</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Reviews;
