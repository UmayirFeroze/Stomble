import { postData } from './client';

// const endpoint = '/register';

export const registerUser = async ({ name, phone, gender, password, confirmPassword }) => {

    const data = {
        name: 'john doe',
        phone: '+406564069',
        gender: 'male',
        password: 'asd@1234',
        confirmPassword: 'asd@1234'
    };

    return await postData(data);
};