import React from "react";
import Restaurants from "./Food/page";
import Reviews from "./Reviews/page";
import About from "./About/page";
import Contact from "./Contact/page";

const Home = () => {
  return (
    <>
      <main 
        className="relative min-h-screen flex flex-col justify-center items-center text-white bg-cover bg-center" 
        style={{ 
          backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1670740967011-86730910a2e5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div> 
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 z-10 text-center">Welcome to A🌟 Restaurant</h1>
        
        <p className="text-lg md:text-xl mb-6 z-10 text-center">
          Let us take you on a journey of delightful dishes.
        </p>
        
        <div className="flex justify-center z-10">
          <a
            href="/Food"
            className="bg-orange-400 text-white rounded-lg px-6 py-3 hover:bg-orange-500 transition duration-300 text-lg md:text-xl"
          >
            Taste the Experience
          </a>
        </div>
      </main>

      <Restaurants />
      <Reviews />
      <About />
      <Contact />
    </>
  );
};

export default Home;
