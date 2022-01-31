import { BehaviorSubject } from 'rxjs';
import getConfig from 'next/config';
import Router from 'next/router'

import { fetchWrapper } from 'helpers';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;

const menuSubject = new BehaviorSubject(process.browser && JSON.parse(localStorage.getItem('menu')));

export const menuService = {
    user: menuSubject.asObservable(),
    get userValue () { return menuSubject.value },
    getAll
};

async function getAll() {
    console.log('menu> getting information');
    var data = await fetchWrapper.get(`${baseUrl}/system/menu_active`);    
    console.log(data);
    console.log('menu> do');
    var users = [
        {
            "id": 1,
            "username": "test",
            "password": "test",
            "firstName": "Test",
            "lastName": "User"
        }
    ];
    return data;
}
