import { create } from 'apisauce';

const apiClient = create({
    baseURL: 'http://127.0.0.1:3000/api'
});

export async function postData (data) {

    try {
        const response = await apiClient.post('/register', data);

        if (!response.ok) {
            console.error('POST request failed:', response.problem);
        }
    }
    catch (error) {
        console.error('An error occurred:', error);
    }
}
