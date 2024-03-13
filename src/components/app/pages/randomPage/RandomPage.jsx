import { useEffect, useState } from 'react';
import useGifService from '../../../../services/gifService';

import Navigation from '../../../interface/navigation/Navigation';

const RandomPage = () => {
    const { getRandomGif } = useGifService();
    const [random, setRandom] = useState({});

    const onRequest = () => {
        getRandomGif().then(onGifLoaded);
    };

    const onGifLoaded = (gif) => {
        setRandom(gif);
    };

    useEffect(() => {
        onRequest();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Navigation />
            <div>
                <a href={random.url}>
                    <img
                        src={random.gif}
                        alt="gif"
                    />
                </a>
                <button onClick={() => onRequest()}>Random Again</button>
            </div>
        </>
    );
};

export default RandomPage;
