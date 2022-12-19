import React from "react";
import { useSelector } from 'react-redux'
import Warning from "../warning/Warning";
import "./update.css";
import { update, remove, addHello } from '../../redux/userSlice'
import { useState } from "react";
// use a hook to dispatch action
import { useDispatch } from "react-redux";  

export default function Update() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const user = useSelector(state => state.user);
  // dispatch update action using useDispatch hook: 
  const dispatch = useDispatch();
  // console.log(name, email)

  const handleUpdate = (e) => {
    e.preventDefault();
    // dispatch 'update' action
    dispatch(addHello({name, email})) // pass in payload -name, email 
  };

  // OR:
  // user { name: name, email: email,}
  // dispatch(update(user))

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(remove()) //no payload to pass in
  };

  return (
    <div className="update">
      <div className="updateWrapper">
        <h3 className="updateTitle">Update Your Account</h3>
        <Warning />
        <button className="delete" onClick={handleDelete}>Delete Account</button>
        <div className="updateContainer">
          <form>
            <div className="formItem">
              <label>Profile Picture</label>
              <div className="profilePic">
                <span className="change">Change</span>
              </div>
            </div>
            <div className="formItem">
              <label>Username</label>
              <input
                className="formInput"
                type="text"
                placeholder={user.name}
                // update setName name state whenever name is changed
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label>Email</label>
              <input
                className="formInput"
                type="text"
                placeholder={user.email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label>Password</label>
              <input className="formInput" type="password" />
            </div>
            
            
            <button
              className="updateButton" onClick={handleUpdate}
              // when this update button is clicked it, the 'update' action is dispatched in userSlice.js
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
