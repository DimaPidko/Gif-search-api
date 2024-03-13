import { useEffect, useState } from 'react';
import useGifService from '../../../services/gifService';

import styles from './ShowGif.module.sass';

const ShowGif = () => {
    const { getAllGif } = useGifService();

    const [gif, setGif] = useState([]);
    const [offset, setOffset] = useState(0);

    const onRequest = (offset) => {
        getAllGif(offset).then(onGifLoaded);
    };

    const onGifLoaded = (newGifList) => {
        setGif((gifList) => [...gifList, ...newGifList]);
        setOffset((offset) => offset + 9);
    };

    useEffect(() => {
        onRequest(offset);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const renderItems = (arr) => {
        const items = arr.map((item) => {
            return (
                <li
                    key={item.id}
                    className={styles.gifWrapper_item}>
                    <a href={item.url}>
                        <img
                            src={item.gif}
                            alt={item.type}
                        />
                    </a>
                </li>
            );
        });
        return (
            <ul
                key="1"
                className={styles.gifWrapper}>
                {items}
            </ul>
        );
    };

    const items = renderItems(gif);

    return (
        <>
            {items}
            <button
                onClick={() => onRequest(offset)}
                className={styles.loadMore}>
                Load More
            </button>
        </>
    );
};

export default ShowGif;
