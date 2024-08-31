const Footer = () => {
  return (
    <footer className="bg-tan text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2024 Seed. All rights reserved.</p>
        <nav className="flex justify-center mt-2 space-x-4">
          <a href="/privacy-policy" className="hover:text-gray-400">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:text-gray-400">Terms of Service</a>
          <a href="/contact" className="hover:text-gray-400">Contact Us</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
