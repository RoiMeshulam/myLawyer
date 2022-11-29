import React from 'react'
// import { useState } from 'react'
// import '../App.css';

import { db } from "../utils/firebase";
import { onValue, ref , set} from "firebase/database";





const LawyerLogin = () => {

  const sayHello = (event) =>{
    console.log("check");
    event.preventDefault();
    alert("hello");
    var name = "roi";
    var email = "rohimesh@walla.com";
    var userid = "123";
    set(ref(db, 'users/' + userid), {
      username: name,
      email: email
    })
    .then(()=>{alert("sucsses")})
    .catch((error)=>{alert("there was an error"+error)})

  }



  // function sayHello(){
    
  //   console.log(db);
  //   alert("hello1");
  //   var name = "roi";
  //   var email = "rohimesh@walla.com";
  //   var userid = "123";
  //   set(ref(db, 'users/' + userid), {
  //     username: name,
  //     email: email
  //   })
  //   .then(()=>{alert("sucsses")})
  //   .catch((error)=>{alert("there was an error"+error)})
    
  //   ;


  // }





  return (

    <form className='add-form'>
    <div className='form-control'>
    <label>שם משתמש</label>
    <input
      type='text'
      placeholder='הכנס/י שם משתמש'
    //   onChange={(e) => setText(e.target.value)}
    />
  </div>
  <div className='form-control'>
    <label>סיסמה</label>
    <input
      type='text'
      placeholder='הכנס/י סיסמה'
    //   onChange={(e) => setText(e.target.value)}
    />
  </div>
  <input type='submit' value='התחבר' className='btn btn-block' onClick={sayHello} />
  </form>
  )
}

export default LawyerLogin
