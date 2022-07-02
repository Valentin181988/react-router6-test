import {useEffect, useState} from 'react';
import {getPublications} from '../servises/publicationsApi';

export const ListPage = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        getPublications().then(setItems);
    }, []);

    console.log(items)

    return(
        <main>
            <h1>List Page</h1>
            <ol>
              {items.map(item => (
                 <li key={item.id}>{item.title}</li> 
              ))} 
            </ol>     
        </main>
    );
};