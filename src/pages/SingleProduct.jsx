import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import PRODUCTS from '../data';
const SingleProduct = () => {
  const navigate = useNavigate();

  const { productID } = useParams();
  const { pathname } = useLocation();

  const SingleProduct = PRODUCTS.find(
    (product) => product.id === parseInt(productID)
  );
  const { id, name, price, image, details } = SingleProduct;
  return (
    <main>
      <div className="pg-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1>{name}</h1>
              {/* <p>{pathname}</p> */}
            </div>
            <div className="col-g-5">
              <nav aria-label="breadcrump">
                <ol className="breadcrump justify-content-end">
                  <li className="breadcrump-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrump-item">
                    <Link to="/product">Product</Link>
                  </li>
                  <li className="breadcrump-item active" aria-current="page">
                    {name}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container content">
        <div className="row">
          <div className="col-lg-5">
            <img src={image} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-7">
            <h2>{name}</h2>
            <p className="price">
              <strong>{price}</strong>
            </p>
            <p>
              {details}
              {details}
              {details}
              {details}
            </p>
            <br />
            <button
              className="btn btn-primary btn-sm"
              onClick={() => navigate(-1)}
            >
              Back
            </button>{' '}
            &nbsp;
            <button
              className="btn btn-primary btn-sm"
              onClick={() => navigate('/')}
            >
              Navigate to Products
            </button>{' '}
            &nbsp;
            <Link to="/product" className="btn btn-primary btn-sm">
              PRODUCTS
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleProduct;
