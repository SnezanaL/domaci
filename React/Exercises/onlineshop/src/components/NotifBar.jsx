import React from "react";
import { Icon } from "@iconify/react";

function NotifBar() {
  return (
    <div className='flex gap-3'>
      <span className='cart flex gap-1'>
        <Icon
          icon='mdi:cart-outline'
          style={{ color: "#3c3e3e" }}
          className='text-xl'
        />
        <span>cart</span>
        <span className='cart-num bg-green-300'>3</span>
      </span>
      <span className='notif'>notif</span>
      <span className='user'>user</span>
    </div>
  );
}

export default NotifBar;
