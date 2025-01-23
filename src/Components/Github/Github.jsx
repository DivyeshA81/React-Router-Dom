import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
    const data = useLoaderData()
//   const [data, setData] = useState(null); 

//   useEffect(() => {
//     fetch("https://api.github.com/users/divyeshS81")
//       .then((response) => response.json()) 
//       .then((data) => {
//         console.log(data);
//         setData(data); 
//       })
//       .catch((error) => console.error("Error fetching data:", error)); 
//   }, []); 

  
  if (!data) {
    return <div className="text-center m-4 text-gray-600 text-3xl">Loading...</div>;
  }

  return (
    <div className="text-center m-4 bg-gray-600 text-white text-3xl">
      <p>Github Followers: {data.followers}</p>
      <img
        src={data.avatar_url}
        alt="GitHub profile"
        width={300}
        height={300}
        className="mt-4 rounded-full"
      />
    </div>
  );
};

export default Github;


export const githubInfoLoader = async () => {
   const response = await fetch('https://api.github.com/users/divyeshS81')
   return response.json()
}