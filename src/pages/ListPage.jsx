import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {getPublications} from '../servises/publicationsApi';
import { Loader } from '../components/Loader';

const useFetchItems = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchItems() {
            setLoading(true);
            try {
                const items = await getPublications();
                setItems(items);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchItems();
    }, []);

    return { items, loading}
};

export const ListPage = () => {

    const { items, loading, error } = useFetchItems();
    

    return(
        <main>
            <h1>List Page</h1>
            {loading && <Loader />}

            {!error && (<ol>
              {items.map(item => (
                 <li key={item.id}>
                    <Link to={`/list/${item.id}`}>{item.title}</Link>
                </li> 
              ))} 
            </ol>)}           
        </main>
    );
};