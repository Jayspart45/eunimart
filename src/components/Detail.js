import React from "react";
import { useParams,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Detail() {
  //get ID Params
  const userId = useParams();
  let id = userId.id;
  console.log(id);
  // Navigate initial
  const Navigate=useNavigate();
  // set initial of data to empty
  const [data, setUser] = useState([]);
// get the data
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`https://reqres.in/api/users/${userId.id}`);
      const data = await response.json();
      setUser(data.data);
      console.log(data.data);
    };
    fetchUser();
  }, [userId]);
  // Navigate
  const clearStorage=()=>{
    // localStorage.clear();
    Navigate('/Home');
  }

  return (
    <div>
      {data ? (
        <div className="DataPage">
          <h1 className="display-4">Detail Page</h1>
          <div className="card">
            <img
              className="card-img-top"
              src={data.avatar}
              alt={`${data.first_name} ${data.last_name}`}
            />
            <div className="card-body ">
              <h6>
                <span className="lead">Name </span>
                {data.first_name} {data.last_name}
              </h6>
              <h6>
                <span className="lead">Email </span> {data.email}
              </h6>
            </div>
          </div>
          <button className=" btn mt-2" onClick={()=>clearStorage()} >
          Go to Back
        </button>
        </div>
      ) : (
        <p>Loading data details...</p>
      )}
    </div>
  );
}
