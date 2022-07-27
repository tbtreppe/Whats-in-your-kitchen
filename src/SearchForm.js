// import { React, useState, useEffect } from "react";
// import axios from "axios";

// function Searched() {
//   const [search, setSearch] = useState([]);
//   const [APIData, setAPIData] = useState([]);

//   useEffect(() => {
//     axios
//       .get(
//         `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${search}`
//       )
//       .then((response) => {
//         setAPIData(response.data);
//       });
//   }, []);

//   function handleChange(e) {
//     e.persist();
//     setSearch((f) => ({ ...f, [e.target.name]: e.target.value }));
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//   }

//   const getSearched = async (search) => {
//     const resp = await axios.get(
//       `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${search}`
//     );
//     const data = await resp.json();

//     return data.results;
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Search for item</label>
//           <input
//             name="name"
//             id="name"
//             placeholder="Enter an item"
//             onChange={handleChange}
//           />
//         </div>
//         <button>Search</button>
//       </form>
//     </div>
//   );
// }

// export default Searched;
