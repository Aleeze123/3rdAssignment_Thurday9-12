const Contact = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">
      <main className="pt-20 px-6 text-white w-full max-w-lg">
        <h1 className="text-4xl font-bold text-center text-orange-400">Contact Us</h1>
        <p className="mt-4 text-lg text-center">
          We&apos;d love to hear from you! Please fill out the form below.
        </p>
        
        <form className="mt-8 bg-orange-300 p-6 rounded-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-black font-semibold">Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full p-3 mt-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-400" 
              placeholder="Your Name" 
              required 
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-black font-semibold">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full p-3 mt-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-400" 
              placeholder="Your Email" 
              required 
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-black font-semibold">Message</label>
            <textarea 
              id="message" 
              rows={4} 
              className="w-full p-3 mt-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-400" 
              placeholder="Your Message" 
              required 
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full py-2 mt-4 bg-orange-400 text-black font-semibold rounded hover:bg-orange-500 shadow-md hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
