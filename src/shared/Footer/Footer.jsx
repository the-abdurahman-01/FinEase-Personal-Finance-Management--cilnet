import React from 'react'
import { Link } from 'react-router'
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa'
import { GiWallet } from "react-icons/gi";
import { RiTwitterXLine } from "react-icons/ri";
import { HiOutlineMail } from 'react-icons/hi'

import { useTheme } from '../../context/ThemeContext/ThemeContext'

const Footer = () => {
  const { isDarkMode } = useTheme()
  const currentYear = new Date().getFullYear()

  return (
    <footer className={`${isDarkMode ? 'bg-gray-900 border-t border-gray-700 text-gray-300' : 'bg-gray-100 text-gray-900'} transition-colors duration-500`}>
      <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div   className={`outline-none   bg-transparent ${
                    isDarkMode ? "text-yellow-500" : "text-blue-600"}`}>
                <GiWallet  className="w-13 h-15" />
              </div>
              <h2  className={`w-full outline-none  bg-transparent ${
                    isDarkMode ? "text-yellow-500" : "text-blue-600"}`}>FinanceFlow</h2>
            </div>
            <p className={`${isDarkMode ? 'text-gray-500' : 'text-grgray'} text-sm leading-relaxed`}>
              Take control of your finances with FinanceFlow — track expenses, set goals, and build your financial freedom confidently.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://x.com/rah_abdur5635" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800 transition-colors">
                <RiTwitterXLine className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/theabdurrahman" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800 transition-colors">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/its.abdurrahman1/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800 transition-colors">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="https://github.com/the-abdurahman-01" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800 transition-colors">
                <FaGithub className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Finance Tools</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-gray-800 transition-colors text-sm">Dashboard Overview</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-gray-800 transition-colors text-sm">Budget Planner</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-gray-800 transition-colors text-sm">Expense Tracker</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-gray-800 transition-colors text-sm">Savings Goals</Link></li>
              <li><Link to="/reports" className="text-gray-400 hover:text-gray-800 transition-colors text-sm">Reports & Insights</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Support</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-gray-400 hover:text-gray-800 transition-colors text-sm">FAQs</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-gray-800 transition-colors text-sm">Contact Us</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-gray-800 transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-gray-800 transition-colors text-sm">Terms & Conditions</Link></li>
              <li><Link to="/security" className="text-gray-400 hover:text-gray-800 transition-colors text-sm">Security</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Stay in Control</h3>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
              Get financial tips and updates to make smarter money decisions.
            </p>
            <form className="space-y-2">
              <div className="relative">
                <HiOutlineMail className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} size={18} />
                <input
                  type="email"
                  placeholder="Your email address"
                  className={`pl-10 pr-3 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200 text-sm placeholder-gray-500 ${
                    isDarkMode
                      ? 'bg-gray-800 border-gray-700 text-gray-100 focus:bg-gray-900'
                      : 'bg-gray-50 border-gray-300 text-gray-800 focus:bg-white'
                  }`}
                />
              </div>
              <button
                type="submit"
                 className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition cursor-pointer ${
                  isDarkMode
                    ? "bg-gray-700 text-yellow-400 hover:bg-yellow-600 hover:text-white"
                    : "bg-blue-700 text-white hover:bg-blue-400 hover:text-blue-800"
                }`}
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500">
              By subscribing, you agree to receive financial insights and updates.
            </p>
          </div>
        </div>
      </div>

      <div className={`${isDarkMode ? 'border-gray-800' : 'border-gray-200'} border-t py-6`}>
        <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-gray-500">
              © {currentYear} FinanceFlow. All rights reserved.
            </div>
            <div className="text-sm text-gray-400">
              Developed By{" "}
              <a
                href="https://the-abdurahman-01.github.io/my-protflio-website/"
                target="_blank"
                rel="noopener noreferrer"
               className={`w-full outline-none hover:underline  bg-transparent ${
                    isDarkMode ? "text-yellow-500" : "text-blue-600"}`}
              >
                MD Abdur Rahman
              </a>
            </div>
           <div className="flex flex-wrap gap-4">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-gray-800 transition">Privacy Policy</Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-gray-800 transition">Terms of Service</Link>
              <Link to="/cookies" className="text-sm text-gray-400 hover:text-gray-800 transition">Cookie Policy</Link>
              <Link to="/accessibility" className="text-sm text-gray-400 hover:text-gray-800 transition">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
