import client from './client';

const endpoint = '/register';

export const registerUser = (user) => {
    const data = new FormData();
    data.append('name', user.name);
    data.append('phone', user.phone);
    data.append('gender', user.gender);
    data.append('password', user.password);
    data.append('password', user.confirmPassword);

    return client.post(endpoint, data);
};