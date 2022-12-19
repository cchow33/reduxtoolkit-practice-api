import { useSelector } from "react-redux";
import React from "react";
import "./navbar.css";

const Navbar = () => {
  // This will update the name in the navbar to the name in our UserSlice
  const name = useSelector(state => state.user.name) // 'user' is name of store from store.js

  console.log('navbar re-rendered')


  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navbarLeft">
          <span className="logo">Redux practice</span>
          <span className="navbarLink">Home</span>
          <span className="navbarLink">About</span>
          <span className="navbarLink">Contact</span>
        </div>
        <div className="navbarCenter">
          <div className="search">
            <input
              type="text"
              placeholder="search for something..."
              className="searchInput"
            />
          </div>
        </div>
        <div className="navbarRight">
          <span className="navbarName">{name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
