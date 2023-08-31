import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const [productDetail, setProductDetail] = useState({ images: [] });
  const [cart, setCart] = useState(0);
  const [imageChange, setImageChange] = useState(0);
  const { id } = useParams();
  const fetchProductDetailPage = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      if (!response.ok) {
        throw new Error("Network Error");
      }
      const data = await response.json();
      setProductDetail(data);
    } catch (error) {
      console.error("Error Fetching Data", error);
    }
  };

  console.log("productsDetail", productDetail);

  useEffect(() => {
    fetchProductDetailPage();
  }, []);

  const handleImageChange = (index) => {
    setImageChange(index);
  };

  const handleCart = () => {
    setCart(cart + 1);
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5 pt-5">
        <div className="row mt-5 pt-5">
          <div className="col-lg-6">
            <img
              src={productDetail?.images[imageChange]}
              style={{ width: 550, height: 440, margin: 20 }}
              alt="largerImg"
            />
            {productDetail?.images?.map((image, i) => (
              <img
                key={i}
                onClick={() => handleImageChange(i)}
                src={image}
                style={{
                  width: 80,
                  height: 100,
                  padding: 10,
                  marginBottom: 20,
                }}
                alt="smallImgs"
              />
            ))}
          </div>
          <div className="col-lg-6">
            <h1>
              {productDetail?.brand}
              <span className="pl-2 text-dark">
                  <i className="fa fa-shopping-cart text-danger">
                    <sup className="text-danger ">{cart}</sup>
                  </i>
              </span>
            </h1>
            <h5>
              {productDetail.rating}{" "}
              <i className="fa fa-star text-warning pb-2 pt-2"></i>
            </h5>
            <h4 className="pb-2">{productDetail.description}</h4>
            <h3>$ {productDetail.price}</h3>
            <select className="form-control w-25 mt-3">
              <option>Select Color</option>
              <option>Red</option>
              <option>Blue</option>
              <option>Black</option>
            </select>
            <button className="btn btn-dark mt-3" onClick={() => handleCart()}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default ProductDetailPage;
