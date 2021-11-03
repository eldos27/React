import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { mainContext } from "../../Contexts/MainContext";

const HomePage = () => {
  const { getProducts, products, deleteProduct } = useContext(mainContext);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <Link style={{ textDecoration: "none", color: "red" }} to="/create">
        Create Page
      </Link>
      {products ? (
        products.length ? (
          <table>
            <thead>
              <tr>
                <th>Art</th>
                <th>Price</th>
                <th>Size</th>
                <th>Type</th>
                <th>Color</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => (
                <tr key={item.id}>
                  <td>{item.art}</td>
                  <td>{item.price}</td>
                  <td>{item.size}</td>
                  <td>{item.type}</td>
                  <td>{item.color}</td>
                  <td>
                    <button
                      style={{ borderRadius: "20px", backgroundColor: "red" }}
                      onClick={() => deleteProduct(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <Link
                      style={{ textDecoration: "none", color: "red" }}
                      to={`/edit/${item.id}`}
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h2>No products</h2>
        )
      ) : (
        <h2>Loading</h2>
      )}
    </div>
  );
};

export default HomePage;
