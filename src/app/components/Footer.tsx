const Footer = () => {
    return (
      <footer className="bg-black text-orange-400 py-6">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">A❤️ Restaurant</h2>
          <p className="mb-2">Karachi, Pakistan</p>
          <p className="mb-4">Phone: (123) 456-7890</p>
          <p className="mb-4">Email: info@arestaurant.com</p>
  
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="text-orange-300 hover:text-orange-500">Facebook</a>
            <a href="#" className="text-orange-300 hover:text-orange-500">Twitter</a>
            <a href="#" className="text-orange-300 hover:text-orange-500">Instagram</a>
          </div>
  
          <p className="text-sm">&copy; 2024 A Restaurant. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  