import { Link, useLocation } from "react-router-dom";

export const PageB = () => {
    const location = useLocation();
    console.log(location)
    return (
        <div>
          Page B
          <hr />
          <Link to={location?.state?.from ?? '/page-a'}>
            Go back
          </Link>
        </div>
    );
};