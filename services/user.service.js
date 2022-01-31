import { BehaviorSubject } from 'rxjs';
import getConfig from 'next/config';
import Router from 'next/router'

import { fetchWrapper } from 'helpers';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;
const userSubject = new BehaviorSubject(process.browser && JSON.parse(localStorage.getItem('user')));

export const userService = {
    user: userSubject.asObservable(),
    get userValue () { return userSubject.value },
    login,
    logout,
    getAll
};

function login(email, password) {
    return fetchWrapper.post(`${baseUrl}/login`, { email, password })
        .then(user => {
            // publish user to subscribers and store in local storage to stay logged in between page refreshes
            console.log(user);
            userSubject.next(user);
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}

function logout() {
    // remove user from local storage, publish null to user subscribers and redirect to login page
    localStorage.removeItem('user');
    userSubject.next(null);
    Router.push('/login');
}

async function getAll() {
    console.log('staff> getting information');
    var response = await fetchWrapper.get(`${baseUrl}/staff`);    
    console.log(response.data);
    console.log('staff> do');
    var users = response.data;
    /*[
        {
            "id": 1,
            "username": "test",
            "password": "test",
            "firstName": "Test",
            "lastName": "User"
        }
    ];*/
    return users;
}


function getToken(){}