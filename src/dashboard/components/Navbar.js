import { getSiteBaseURL } from "../../services/helpers";

import logo1 from '../../asset/images/afit-logo.jpg' 
import parkPic from '../../asset/images/user.svg';
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
  ];
  return (
    <nav class="bg-blue-500 border-gray-200 px-2 sm:px-4 py-2.5">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
  <a href={`${getSiteBaseURL()}/complaints`} class="flex items-center">
      <img src={logo1} class="mr-1 h-6 sm:h-9" alt="Flowbite Logo"/>
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">AFIT Hostel Complaint System - Admin</span>
  </a>

  <div class="flex items-center md:order-2">
      <button onClick={() => window.location.href="/profile"} type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="park-menu-button" aria-expanded="false" data-dropdown-toggle="park-dropdown" data-dropdown-placement="bottom">
        <span class="sr-only">Open park menu</span>
        <img class="w-8 h-8 rounded-full" src={parkPic} alt="park photo"/>
      </button>
      </div>


      {/*} Dropdown menu */}
      

      <button onClick={() => setIsMenuOpen(!isMenuOpen)} data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  
    
      





  <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
    <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
      <li>
        <a href="/complaints" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Complaints</a>
      </li>
      <li>
        <a href="/hostels" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Hostels</a>
      </li>
      <li>
        <a href="/students" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Students</a>
      </li>
      {/*<li>
        <a href="/students" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Not</a>
      </li>*/}
    </ul>
  </div>
  {isMenuOpen && <div class="w-full z-50 my-4 text-base list-none bg-blue-200 rounded divide-y divide-gray-100 shadow block text-black" id="park-dropdown" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom">
        
        <ul class="py-1" aria-labelledby="park-menu-button">
          <li>
            <a href="/hostels" class="block py-2 px-4 text-sm text-gray-700 hover:bg-blue-500 ">Hostels</a>
          </li>
          <li>
            <a href="/students" class="block py-2 px-4 text-sm text-gray-700 hover:bg-blue-500 ">Students</a>
          </li>
          <li>
            <a href="/complaints" class="block py-2 px-4 text-sm text-gray-700 hover:bg-blue-500 ">Complaints</a>
          </li>
        </ul>
      </div>}


  </div>
  

</nav>
    
)}