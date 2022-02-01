import React from 'react';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands'; 
import { menuService } from 'services/menu.service';

export default function Sidebar({info}) {
  return (       
    <div class="bg-black text-white w-100">
        <ul>
            {info.menu_primary.aside_menu_active.map((item) => (
            <li><i class={item.icon} ></i> {item.name} : {item.id}</li>            
        ))}
        {info.menu_secoundary.aside_menu_active.map((item) => (
            <li><i class={item.icon} ></i> {item.name} : {item.id}</li>
        ))}
        </ul>
    </div>          
    );
}
