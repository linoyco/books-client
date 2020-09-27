import axios from 'axios';

const Axios = axios.create({
    baseURL: 'http://localhost:9000'
});

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