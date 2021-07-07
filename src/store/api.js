import axios from './../plugins/axios.js';

export async function login(params) {
    const { data } = await axios
        .post('users/login', params)
        .then(res => res)
        .catch(error => {
            return {
                data: { error: error}
            };
        });
    
    return data;
}

export async function fetchUser() {
    const { data } = await axios
        .get('users')
        .then(res => res)
        .catch(error => {
            return {
                data: { error: error}
            };
        });
    
    return data;
}
