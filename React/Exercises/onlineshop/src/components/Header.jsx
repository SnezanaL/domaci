import React from "react";
import NotifBar from "./NotifBar";
import { Icon } from "@iconify/react";

function Header() {
  return (
    <header className='bg-gray-300 px-12 py-3 text-gray-600'>
      <section className='header-top flex justify-between'>
        <span className='logo flex gap-1'>
          <Icon icon='fxemoji:mansshirt' className='text-2xl' />
          <span>Shopify</span>
        </span>
        <span className='search'>
          <input
            type='text'
            name='search'
            id='search'
            placeholder='Search here...'
            className='bg-transparent border border-gray-400 rounded py-1 px-2'
          />
        </span>
        <NotifBar />
      </section>
    </header>
  );
}

export default Header;
