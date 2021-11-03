import React, { useState } from "react";

const App = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    number: "",
    qua: "",
  });


  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    const value = event.target.value;
    const name = event.target.name;

    setFullName((preValue) => {
      return{
        ...preValue,
        [name] : value,
      }


      // if (name === "fName") {
      //   return {
      //     fname: value,
      //     lname: preValue.lname,
      //     email: preValue.email,
      //     number: preValue.number,
      //   };
      // } else if (name === "lName") {
      //   return {
      //     fname: preValue.fname,
      //     lname: value,
      //     email: preValue.email,
      //     number: preValue.number,
      //   };
      // }else if (name === "email") {
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email: value,
      //     number: preValue.number,
      //   };
      // }else if (name === "number") {
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email: preValue.email,
      //     number: value,
      //   };
      // }

    });
  }

  const onSubmits = (event) => {
    event.preventDefault();
    alert("Form Submitted successfully");
  }

  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmits} >
          <div>

            <h1>Hello {fullName.fname} {fullName.lname}</h1>
            <p> {fullName.email} </p>
            <p> {fullName.number} </p>
            <p> {fullName.qua} </p>


            <input type="text"
              placeholder="Enter Your Name"
              name="fname"
              onChange={inputEvent}
              value={fullName.fname} />

            <input type="text"
              placeholder="Enter Your last Name"
              name="lname"
              onChange={inputEvent}
              value={fullName.lname} />

            <input type="email"
              placeholder="Enter Your Email"
              name="email"
              onChange={inputEvent}
              value={fullName.email} />

            <input type="number"
              placeholder="Enter Your Phone Number"
              name="number"
              onChange={inputEvent}
              value={fullName.number} />

              <input type="text"
              placeholder="Enter Your Qualification"
              name="qua"
              onChange={inputEvent}
              value={fullName.qua} />

            <button type="submit">Submit</button>

          </div>
        </form>
      </div>
    </>
  )
};
export default App;