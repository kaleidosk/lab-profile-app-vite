import {Link} from 'react-router-dom';

function HomePage() {
    return (
      <div>
        <h1>Home Page</h1>
        <Link to="/signup">
          <button>Sign up</button>
        </Link>
        <Link to="/login">
         <button>Log in</button>
        </Link>
      </div>
    );
  }
  
  export default HomePage;