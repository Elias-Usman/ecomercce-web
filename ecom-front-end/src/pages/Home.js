import axios from "../axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import categories from "../categories";
import "./Home.css";
import { updateProducts } from "../features/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductPreview from "../components/ProductPreview";



function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products); //answer the product
  const lastProducts = products.slice(0, 8); //get latest product
  useEffect(() => {
    axios.get('/products').then(({data}) => dispatch(updateProducts(data)))
  }, []);


  return (
    <div>
      <img
        style={{ width: 1134, height: 550 }}
        src="https://res-console.cloudinary.com/di7wf4dlv/media_explorer_thumbnails/a73cce425066ab947923bf4e67980503/detailed"
        alt=""
      />
      <div className="seatured-products-container container mt-4">
        <h2>Latest Products</h2>
        <div className="d-flex justify-content-center flex-wrap">
        {lastProducts.map((product) => (
          <ProductPreview {...product} />
        ))}
        </div>

        <div>
          <Link
            to="catagory/all"
            style={{
              textAlign: "right",
              display: "block",
              textDecoration: "none",
            }}
          >
            See more {">>"}
          </Link>
        </div>
      </div>

      {/* sale banner */}
      <div className="sale__banner--container mt-4">
        <img src="https://res.cloudinary.com/learn-code-10/image/upload/v1654093280/xkia6f13xxlk5xvvb5ed.png" alt="" />
      </div>
      
      <div className="recent-products-container container mt-4">
        <h2>Categories</h2>
        <Row>
          {categories.map((category) => (
            <LinkContainer to={`/category/${category.name.toLocaleLowerCase()}`}>
              <Col md={4} ms-auto>
                <div style={{ backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.img})`, gap: "10px"}} className="category-tile">
                    {category.name}
                </div>
              </Col>
            </LinkContainer>
          ))}
        </Row>
      </div>


    </div>
  );
};

export default Home;
