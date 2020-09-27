import axios from 'axios';

const Axios = axios.create({
    baseURL: 'localhost:9000'
});

const API_KEY = '308a457aaec919a2227e6a73f69ff109';
const GET_BOOKS_URL = '/';

export const getBooksRequest = () => {
    const url = `${GET_BOOKS_URL}`;
    return Axios.get(url);
}

// export const getBooksRequest = (city: string) => {
//     const url = `${GET_BOOKS_URL}`;
//     return Axios.get(url, {
//         params: {
//             'q': city,
//             'units': 'metric',
//             'appid': API_KEY
//         }
//     });
// }