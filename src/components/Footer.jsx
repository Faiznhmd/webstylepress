import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="d-flex justify-content-center">
          <div className="nav nav-pills">
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="product">Products</Link>
            <Link to="posts">Posts</Link>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
