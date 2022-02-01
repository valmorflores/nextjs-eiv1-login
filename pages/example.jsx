import Sidebar from 'components/Sidebar';
import React from 'react';
import { menuService } from 'services/menu.service';

export default function example({info}) {
  return <Sidebar info={info} />
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