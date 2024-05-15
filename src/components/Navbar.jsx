import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-blue-500 py-4 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold">
            <NavLink to='/'>Store</NavLink>
          </div>
          <ul className="flex space-x-4">
            <li>
              <NavLink
                to="/bookmark"
                className="text-white hover:text-gray-300 "
              >
                Bookmark
              </NavLink>
            </li>
            
          </ul>
        </div>
      </nav>
  )
}

export default Navbar