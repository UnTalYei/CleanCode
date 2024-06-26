// Hay que agregar la dependencia de axios ```yarn add axios```
// import axios from 'axios';

import { HttpClient } from "./02-open-close-c";




export class TodoService { 
    constructor(private httpCliente: HttpClient) {}
    async getTodoItems() {
        const { data } = await this.httpCliente.get('https://jsonplaceholder.typicode.com/todos/');
        return data;
    }
}


export class PostService {
    constructor(private httpCliente: HttpClient) {}
    async getPosts() {
        const { data } = await this.httpCliente.get('https://jsonplaceholder.typicode.com/posts');
        return data;
    }
}


export class PhotosService {
    constructor(private httpCliente: HttpClient) {}
    async getPhotos() {
        const { data } = await this.httpCliente.get('https://jsonplaceholder.typicode.com/photos');
        return data;
    }

}