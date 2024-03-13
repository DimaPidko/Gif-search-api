'use strict';
import { useHttp } from '../hooks/http.hook';

const useGifService = () => {
    const { request } = useHttp();

    const _apiKey = '9NQlGcnpQygpG8NU9WaFbpZZlEwm2AfD';

    const getAllGif = async (offset = 0, rating = 'r') => {
        const res = await request(
            `https://api.giphy.com/v1/gifs/trending?api_key=${_apiKey}&limit=9&offset=${offset}&rating=${rating}`
        );
        return res.data.map(_transformGif);
    };

    const getRandomGif = async () => {
        const res = await request(
            `https://api.giphy.com/v1/gifs/random?api_key=${_apiKey}`
        );
        return { gif: res.data.images.fixed_height.url, url: res.data.url };
    };

    const _transformGif = (data) => {
        return {
            type: data.type,
            id: data.id,
            gif: data.images.fixed_height.url,
            url: data.url,
        };
    };

    return { getAllGif, getRandomGif };
};

export default useGifService;
