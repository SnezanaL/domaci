import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

export function Navbar() {
  return (
    <nav className='flex items-center'>
      <ul className='flex gap-3 text-md me-auto'>
        <li className='hover:text-red-400'>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li className='hover:text-red-400'>
          <NavLink to='/store'>Store</NavLink>
        </li>
        <li className='hover:text-red-400'>
          <NavLink to='/about'>About</NavLink>
        </li>
      </ul>

      <span className='relative'>
        <Icon icon='mdi:cart-outline' className='text-3xl hover:text-red-500' />
        <span className='num bg-red-400 rounded-full p-2 text-gray-100 w-5 h-5 absolute top-3 left-4 flex justify-center items-center'>
          0
        </span>
      </span>
    </nav>
  );
}
