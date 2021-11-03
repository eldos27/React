import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { mainContext } from "../../Contexts/MainContext";

const CreatePage = () => {
  const [product, setProduct] = useState({
    art: "",
    price: 0,
    size: "0",
    color: "",
    type: "",
  });
  const data = useContext(mainContext);
  const { createProduct } = data;
  const history = useHistory();
  const handleChange = (e) => {
    let object = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(object);
  };
  const handleClick = () => {
    createProduct(product);
    history.push("/");
  };
  return (
    <div>
      Create The dress
      <div>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter art.number"
          name="art"
        />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter price"
          name="price"
        />
        <select onChange={handleChange} name="size">
          <option hidden>Size</option>
          <option value="s">S</option>
          <option value="m">M</option>
          <option value="l">L</option>
          <option value="xl">XL</option>
          <option value="xxl">XXL</option>
        </select>
        <select onChange={handleChange} name="color">
          <option hidden>Color</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="pink">Pink</option>
          <option value="red">Red</option>
        </select>
        <select onChange={handleChange} name="type">
          <option hidden>Type</option>
          <option value="evening">Evening</option>
          <option value="wedding">Wedding</option>
          <option value="casual">Casual</option>
        </select>
        <button onClick={handleClick}>Create</button>
      </div>
    </div>
  );
};

export default CreatePage;
