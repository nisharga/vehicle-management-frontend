'use client'

const Footer = () => {
  return <>
    <footer className="bg-gray-900 py-20">
      <div className="container mx-auto flex flex-wrap">

        <div className="w-full md:w-1/5 p-4">
          <h4 className="text-white text-lg font-semibold mb-5">Service</h4>
      
          <ul>
            <li><a href="#" className="text-gray-400 hover:text-white">about us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">our services</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">privacy policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">visit website</a></li>
          </ul>
        </div>

        <div className="w-full md:w-1/5 p-4">
          <h4 className="text-white text-lg font-semibold mb-5">Company</h4>
          <ul>
            <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">shipping</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">returns</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">order status</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">payment options</a></li>
          </ul>
        </div>

        <div className="w-full md:w-1/5 p-4">
          <h4 className="text-white text-lg font-semibold mb-5">Legal</h4>
          <ul>
            <li><a href="#" className="text-gray-400 hover:text-white">download</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">changelog</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">github</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">all version</a></li>
          </ul>
        </div>

        <div className="w-full md:w-1/5 p-4">
          <h4 className="text-white text-lg font-semibold mb-5">VT-Shop</h4>
          <ul>
            <li><a href="#" className="text-gray-400 hover:text-white">download</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">changelog</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">github</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">all version</a></li>
          </ul>
        </div>

        <div className="w-full md:w-1/5 p-4">
          <h4 className="text-white text-lg font-semibold mb-5">Contact Us</h4>
          <div className="flex">
            <a href="#" className="text-white bg-white bg-opacity-20 inline-block h-10 w-10 rounded-full flex items-center justify-center mr-4 hover:bg-white hover:text-gray-900 transition-all duration-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white bg-white bg-opacity-20 inline-block h-10 w-10 rounded-full flex items-center justify-center mr-4 hover:bg-white hover:text-gray-900 transition-all duration-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white bg-white bg-opacity-20 inline-block h-10 w-10 rounded-full flex items-center justify-center mr-4 hover:bg-white hover:text-gray-900 transition-all duration-300">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white bg-white bg-opacity-20 inline-block h-10 w-10 rounded-full flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all duration-300">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

      </div>
    </footer>
  </>;
};

export default Footer;
