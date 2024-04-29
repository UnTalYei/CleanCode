// import axios from 'axios';

export class HttpClient {
    // async get(url: string) {
    //     const { data, status } = await axios.get(url);
    //     console.log('status :>> ', status);
    //     return {data, status};
    // }

    async get(url: string) {
        const resp = await fetch( url );
        const data = await resp.json();



        // console.log('status :>> ', 500);
        return {data, status: resp.status};
    }
}