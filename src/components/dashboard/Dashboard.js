import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import DynamicSearchForm from "../dynamic-search-form/DynamicSearchForm";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [searchValues, setSearchValues] = useState([""]);
  const [debounceStatus, setDebounceStatus] = useState();
  
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <header className='bg-primary text-white text-center py-3'>
        <div className='row'>
          <div className='col'>
            <h1>Welcome to the Dashboard</h1>
          </div>
          <div className='col'>
            <Button type='button' className='btn btn-light float-end mx-3' onClick={handleLogout}>
              Logout
            </Button>
            <p>You are logged in as: {user?.email}</p>
          </div>
        </div>
      </header>

      <main className='container mt-3'>
        <DynamicSearchForm setSearchValues={setSearchValues} setDebounceStatus={setDebounceStatus}/>
      </main>

      <footer className='bg-light text-center py-3'>
        <p>
          This content is fetched from context API <br /> <code>user?.email - {user?.email}</code>
        </p>
        <p>
          Search Values<br /> <code>{searchValues?.search?.join(", ")}</code>
        </p>
        <p>
          Debounce Status<br /> <code>{debounceStatus?.join(" || ")}</code>
        </p>
      </footer>
    </>
  );
};

export default Dashboard;
