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

    const _transformGif = (data) => {
        return {
            type: data.type,
            id: data.id,
            gif: data.images.fixed_height.url,
            url: data.url,
        };
    };

    return { getAllGif };
};

export default useGifService;
