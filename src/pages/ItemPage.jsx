import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { getPublicationsById } from '../servises/publicationsApi';
import { Publication } from '../components/Publication';

export const ItemPage = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        async function fetchItem() {
            try {
              await getPublicationsById(itemId).then(item => setItem(item));
            } catch(error) {
                toast.error('All is crashed!')
            }
        }
        fetchItem();
    }, [itemId]) 

    return (
        <main>
            <Link to="/list">Go back</Link>
            {item && <Publication item={item} />}
        </main>
    );
};