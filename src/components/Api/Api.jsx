import axios from "axios";

const API_KEY = '29713049-07e20095513e7d10800a19bda';

export const fetchImages = async (query, page, perPage) => {
    const response = await axios.get
        (`https://pixabay.com/api/?key=${API_KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=${perPage}&safesearch=true`);
    return response.data;
};