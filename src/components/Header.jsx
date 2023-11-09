import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className=" d-flex justify-content-between align-items-center">
          <div className="logo">
            <Link to="/" className="brand">
              WSP
            </Link>
          </div>
          <div className="nav nav-pills">
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="product">Products</Link>
            <Link to="posts">Posts</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
