import axios from 'axios';

axios.defaults.baseURL = 'https://62c094d7c134cf51ced178f4.mockapi.io/';

export const getPublications = async () => {
    const response = await axios.get('/articles');
    return response.data;
};

export const addPublication = async data => {
    const response = await axios.post('/articles', data);
    return response.data;
};

export const deletePublication = async id => {
    const response = await axios.delete(`/articles/${id}`);
    return response.data;
};

