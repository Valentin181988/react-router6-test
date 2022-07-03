import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { getPublicationsById, deletePublication } from '../servises/publicationsApi';
import { Publication } from '../components/Publication';
import { Loader } from '../components/Loader';

export const ItemPage = () => {
    const { itemId } = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState(null);
    const [isDeleting, setIsDeleting] = useState(false);

    const deleteItem = async () => {
        try {
            setIsDeleting(true);
            await deletePublication(itemId);
            toast.success('Publication is deleted!')
            navigate('/list');
        } catch (error) {
            console.log(error);
        } finally {
            setIsDeleting(false);
        }
    };

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
            {item && (
                <> 
                    <hr />
                      <button type="button" onClick={deleteItem} disabled={isDeleting}>
                        Delete {isDeleting && <Loader />}
                      </button>
                    <hr />
                    <Publication item={item} />
                </>
            )}
        </main>
    );
};