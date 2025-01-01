import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;

    return (
      <div className="four wide column" key={id} style={{ backgroundColor: "white" }}>
        <Link to={`/product/${id}`}>
        <div className="ui card" style={{ height: "350px" }}>
          <div className="image" style={{ height: "200px", overflow: "hidden" }}>
            <img
              className="ui fluid image"
              src={image}
              alt={title}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div className="content">
            <div className="header">{title}</div>
            <div className="meta price">${price}</div>
            <div className="meta">{category}</div>
          </div>
        </div>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;
