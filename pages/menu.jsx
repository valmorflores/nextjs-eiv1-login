import React from 'react';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands'; 
import { menuService } from 'services/menu.service';


export default Menu;

function Menu({info}) {
    console.log('Address => http://srvm24:89/dev/gestorequipes/api/v1/system/menu_active');
    console.log(info);
    console.log(info.menu_primary);
    console.log(info.menu_secoundary);
    return (                 
        <ul>
            {info.menu_primary.aside_menu_active.map((item) => (
            <li><i class={item.icon} ></i> {item.name} : {item.id}</li>            
          ))}
        {info.menu_secoundary.aside_menu_active.map((item) => (
            <li><i class={item.icon} ></i> {item.name} : {item.id}</li>
          ))}
        </ul>
    );
}

// get information from static info (cached or builded pages)
export const getStaticProps = async () => {
    const response = await menuService.getAll();
    const data = await response.data;
    return { 
        props: {
            info: data
        } }
}