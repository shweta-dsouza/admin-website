import { Link, useRouteError } from "react-router-dom";

const PageNotFound = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" style={{ display: 'flex', justifyContent: 'center', alignItems:'center', flexDirection: 'column' }}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>The Page you are looking for does not exist.</p>
      <Link to={'/'}>Go to Dashboard</Link>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default PageNotFound;