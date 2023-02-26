import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
export default function Home() {
  // Intial Data
  const [data, setData] = useState([]);
// Navigate to page intial
  const Navigate = useNavigate();
// Get data from Api
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://reqres.in/api/users`);
      const data = await response.json();
      setData(data.data);
      console.log(data);
    };
    fetchData();
  }, []);
// Navigate to detail page
  const getDetail = async (Id) => {
    // const resp = await fetch(`https://reqres.in/api/users/${Id}`);
    // const res = await resp.json();
    Navigate(`/detail/${Id}`);
    // console.log(res);
  };

  // Logout and clear localstorage

  const clearStorage = () => {
    localStorage.clear();
    Navigate("/");
  };
// If the data is empty it will show loading and waiting for response from fetch api
  if (!data.length) return <div className="text-center">Loading</div>;
  return (
    <div className="Home">
      <div className="TopBar">
        <h1>Home Page</h1>
        <button onClick={() => clearStorage()} className="btn">
          Log Out
        </button>
      </div>

      <ul className="Datalist">
        {data.map((value, index) => (
          <li onClick={() => getDetail(value.id)} key={index}>
            {value.first_name} {value.last_name}
          </li>
        ))}
      </ul>
    </div>
  );
}
