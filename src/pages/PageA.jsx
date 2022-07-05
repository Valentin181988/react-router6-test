import { useEffect } from "react";
import { Link, useSearchParams, useLocation } from "react-router-dom";

export const PageA = () => {
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();

    const query = searchParams.get('query');

    useEffect(() => {
        if (query) {
            console.log('Make the request')
        }
    }, [query]);

    const handleSubmit = e => {
        e.preventDefault();

        setSearchParams({query: e.currentTarget.elements.qery.value});
       };

    return (
        <div>
           <Link to="/page-b" state={{ from: location }}>To page B</Link>
           <hr />
           <form onSubmit={handleSubmit}>
             <input type="text" name="qery" autoComplete="off"/>
             <button type="submit">Set qery</button>
           </form> 
        </div>
    );
};