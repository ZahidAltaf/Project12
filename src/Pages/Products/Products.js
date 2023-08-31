import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link} from "react-router-dom";
import { useApiDataContext } from "../../Context/Context";

const Products = () => {
const { apiData } = useApiDataContext();
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          {apiData?.map((data) => (
            <>
              <div className=" col-md-3 pb-5 mt-5 pt-5">
                <div className=" card" style={{ width: "18rem" }}>
                  <img
                    src={data?.images[0]}
                    className="zoom  card-img-top"
                    style={{ height: 250 }}
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title display-6">
                      {data?.title.slice(0, 8)}
                    </h5>
                    <p className="card-text " style={{ fontSize: 23 }}>
                      {data?.category}
                    </p>
                    <p className="fw-bolder ">{data?.discountPercentage}</p>
                    <p className="fw-bolder text-danger">{data?.price}</p>
                    <p className="fw-bolder ">
                      {data?.rating} <i className="fa fa-star text-warning"></i>
                    </p>
                    <Link
                      to={`/productdetailpage/${data.id}`}
                      className="btn btn-outline-dark"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
