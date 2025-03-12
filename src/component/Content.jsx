import React, { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";

const Content = ({ searchQuery }) => {
  const { category } = useParams();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  function ATC(prod) {
    console.log("Add to Cart");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(prod);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  useEffect(() => {
    console.log("Fetching data for category:", category);
    
    const apiUrl = category 
      ? `https://fakestoreapi.com/products/category/${category}` 
      : `https://fakestoreapi.com/products`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setData(data);
        setFilteredData(data); // Initially, set filteredData to all data
      });
  }, [category]);

  useEffect(() => {
    if (searchQuery) {
      const filtered = data.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }, [searchQuery, data]);

  return (
    <div className="content">
      <section className="banner">
        <h1>Welcome to Luxora</h1>
        <p>Your ultimate destination for fashion and lifestyle.</p>
      </section>
      <section className="categories">
        <h2>Shop Smart, Enjoy Fast!!</h2>
        <div className="category-cards">
          {filteredData.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} alt={item.title} className="product-image" />
              <li>{item.title}</li>
              <button className="btn" onClick={() => ATC(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Content;



// import React from "react";
// import { useEffect, useState } from "react";

// const Content = () => {

//   let [data, setData] = useState([]);

//   function ATC(prod){
//     console.log("Add to Cart");
//     const cart=JSON.parse(localStorage.getItem("cart")) || [];
//     cart.push(prod);
//     localStorage.setItem("cart",JSON.stringify(cart));
//     //localStorage.setItem("cart",JSON.stringify(prod));
//   }

//   useEffect(() => {
//     console.log("useEffect called");
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("Fetched data:", data);
//         setData(data);
//       });
//   }, []);
//   return (
//     <div className="content">
//       <section className="banner">
//         <h1>Welcome to MyClone</h1>
//         <p>Your ultimate destination for fashion and lifestyle.</p>
//       </section>
//       <section className="categories">
//         <h2>JOY SHOPPING</h2>
//         <div className="category-cards">
//         {data.map((item) => (
//           <div className="card" key={item.id}>
//             <img src={item.image} alt={item.title} className="product-image" />
//             <li>{item.title}</li>
//             <button className="btn" onClick={()=>ATC(item)}>Add to Cart</button>
//           </div>
//         ))}
//       </div>
//       </section>
//     </div>
//   );
// };

// export default Content;
