import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { mainContext } from "../../Contexts/MainContext";

const EditPage = () => {
  const data = useContext(mainContext);
  const { getProductToEdit, productToEdit, saveEditedProduct } = data;
  const params = useParams();
  const history = useHistory();
  const [editProduct, setEditProduct] = useState(productToEdit);
  useEffect(() => {
    getProductToEdit(params.id);
  }, []);
  useEffect(() => {
    setEditProduct(productToEdit);
  }, [productToEdit]);
  const handleChange = (e) => {
    let product = {
      ...editProduct,
      [e.target.name]: e.target.value,
    };
    setEditProduct(product);
  };
  const handleClick = () => {
    saveEditedProduct(editProduct);
    history.push("/");
  };
  if (editProduct === "Error") {
    return (
      <div>
        <h2>No products sorry bro</h2>
        <Link to="/">Go Back</Link>
      </div>
    );
  }
  return (
    <div>
      {editProduct ? (
        <div>
          <input
            value={editProduct.art}
            onChange={handleChange}
            type="text"
            placeholder="Enter art.number"
            name="art"
          />
          <input
            value={editProduct.price}
            onChange={handleChange}
            type="text"
            placeholder="Enter price"
            name="price"
          />
          <select value={editProduct.size} onChange={handleChange} name="size">
            <option hidden>Size</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
            <option value="xxl">XXL</option>
          </select>
          <select
            value={editProduct.color}
            onChange={handleChange}
            name="color"
          >
            <option hidden>Color</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="pink">Pink</option>
            <option value="red">Red</option>
          </select>
          <select value={editProduct.type} onChange={handleChange} name="type">
            <option hidden>Type</option>
            <option value="evening">Evening</option>
            <option value="wedding">Wedding</option>
            <option value="casual">Casual</option>
          </select>
          <button onClick={handleClick}>Save</button>
        </div>
      ) : (
        <h2>Loading</h2>
      )}
    </div>
  );
};

export default EditPage;
