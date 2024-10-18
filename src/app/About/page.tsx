import { FaMapMarkerAlt, FaUtensils, FaHeart, FaClock } from 'react-icons/fa';

const About = () => {
  return (
      <div className="bg-black min-h-screen">
          <main className="pt-20 px-6 text-white">
              <h1 className="text-4xl font-bold text-center text-orange-400">About Us</h1>
              <p className="mt-4 text-lg text-center">
                  Welcome to <strong>A Restaurant</strong>, where culinary excellence meets exceptional service.
              </p>
              <section className="mt-12">
                  <h2 className="text-3xl font-semibold text-center text-orange-400">Our Story</h2>
                  
                  <div className="mt-8 space-y-6">
                      <div className="flex items-center justify-center">
                          <FaMapMarkerAlt className="text-orange-400 mr-2" />
                          <p className="mt-4 text-center">
                              Nestled in the heart of the city, we pride ourselves on offering a diverse menu that caters to every palate.
                          </p>
                      </div>

                      <div className="flex items-center justify-center">
                          <FaUtensils className="text-orange-400 mr-2" />
                          <p className="mt-4 text-center">
                              Our chefs are passionate about crafting dishes that celebrate the rich flavors of various cuisines, using only the freshest ingredients sourced from local suppliers.
                          </p>
                      </div>

                      <div className="flex items-center justify-center">
                          <FaHeart className="text-orange-400 mr-2" />
                          <p className="mt-4 text-center">
                              Whether you&apos;re in the mood for classic comfort food or adventurous international flavors, we have something special just for you.
                          </p>
                      </div>

                      <div className="flex items-center justify-center">
                          <FaClock className="text-orange-400 mr-2" />
                          <p className="mt-4 text-center">
                              At A Restaurant, we believe dining is not just about food&mdash;it&apos;s about the experience. Our warm, inviting atmosphere is designed to make every meal memorable, whether it&apos;s a casual lunch with friends, or a special celebration.
                          </p>
                      </div>

                      <div className="flex items-center justify-center">
                          <FaHeart className="text-orange-400 mr-2" />
                          <p className="mt-4 text-center">
                              Join us and discover why we&apos;re a beloved destination for food lovers. We can&apos;t wait to serve you!
                          </p>
                      </div>
                  </div>
              </section>
          </main>
      </div>
  );
};

export default About;
