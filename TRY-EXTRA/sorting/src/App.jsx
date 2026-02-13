// import { useEffect, useState } from "react";

// function App() {
//   const [query, setQuery] = useState("");
//   const [debounce, setDebounce] = useState("");
//   const [sortOrder, setSortOrder] = useState(null); 
//   const users = ["apple", "mango", "grapes", "guava"];

//   useEffect(() => {
//     const id = setTimeout(() => {
//       setDebounce(query);
//     }, 1000);

//     return () => clearTimeout(id);
//   }, [query]);

//   const filteredUsers = users.filter((name) =>
//     name.toLowerCase().startsWith(debounce.toLowerCase())
//   );

//   const displayedUsers =
//     sortOrder === "asc"
//       ? [...filteredUsers].sort((a, b) => a.localeCompare(b))
//       : sortOrder === "desc"
//       ? [...filteredUsers].sort((a, b) => b.localeCompare(a))
//       : filteredUsers;

//   return (
//     <div>
//       <h3>Sorting Array in Alphabetical Order:-</h3>
//       <ul>
//         {displayedUsers.map((name, index) => (
//           <li key={index}>{name}</li>
//         ))}
//       </ul>

//       <button onClick={() => setSortOrder("asc")}>
//         Sort A-Z
//       </button>

//       <button onClick={() => setSortOrder("desc")}>
//         Sort Z-A
//       </button>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";

const items = ["Oranges", "Apple", "Mango", "Grapes", "Guava", "Papaya"];

const App = () => {
  const [sort, setSort] = useState("asc");

  const sortedItems = [...items].sort((a, b) => {  //spread operator is used to copy
    if (sort === "asc") {
      return a.localeCompare(b);
    } else {
      return b.localeCompare(a);
    }
  });

  return (
    <div>
      <h1>Sorting in Alphabetical Order</h1>

      <label>SORT BY : </label>
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>

      <ul>
        {sortedItems.map((ele, index) => (
          <li key={index}>{ele}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
