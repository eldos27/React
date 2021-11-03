import axios from "axios";
import React, { useReducer } from "react";
import { API } from "../Helpers/Const";

export const mainContext = React.createContext();
const INIT_STATE = {
  products: null,
  productToEdit: null,
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_PRODUCT_TO_EDIT":
      return { ...state, productToEdit: action.payload };
    default:
      return state;
  }
};
const MainContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const getProducts = async () => {
    try {
      const response = await axios(API);
      let action = {
        type: "GET_PRODUCTS",
        payload: response.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
  const createProduct = async (product) => {
    try {
      const response = await axios.post(API, product);
      console.log(response);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };
  const deleteProduct = async (id) => {
    try {
      const response = await axios.delete(`${API}/${id}`);
      console.log(response);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };
  const getProductToEdit = async (id) => {
    try {
      const response = await axios(`${API}/${id}`);
      let action = {
        type: "GET_PRODUCT_TO_EDIT",
        payload: response.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
      let action = {
        type: "GET_PRODUCT_TO_EDIT",
        payload: "Error",
      };
      dispatch(action);
    }
  };
  const saveEditedProduct = async (editedProduct) => {
    try {
      const response = await axios.patch(
        `${API}/${editedProduct.id}`,
        editedProduct
      );
      console.log(response);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <mainContext.Provider
      value={{
        getProducts,
        createProduct,
        deleteProduct,
        getProductToEdit,
        saveEditedProduct,
        products: state.products,
        productToEdit: state.productToEdit,
      }}
    >
      {props.children}
    </mainContext.Provider>
  );
};

export default MainContextProvider;
