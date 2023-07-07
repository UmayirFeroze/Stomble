import { create } from 'apisauce';

const apiClient = create({
    baseURL: 'http://127.0.0.1:3000/api'
});

apiClient.post('/register').then(response => {
    if (!response.ok) { response.problem; }
});