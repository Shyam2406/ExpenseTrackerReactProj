import axios from "axios";
import React, { useState } from "react";

const Signin = () => {
  var [email, setemail] = useState("");
  var [password, setpassword] = useState("");

  const login = (e) => {
    e.preventDefault();

    var data = {
      email: email,
      password: password,
    };
    console.log(data);
    axios
      .post("http://localhost:5000/login", data)
      .then((res) => {
        // var msg = res.data.msg;
        console.log(res)
        if (res) {
          // msg = "Login Succ"
          alert(res);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const AddUserData = (req, res) => {
  //   // console.log("haresh-----------", req.body);
  //   axios
  //     .post("http://localhost:5000/add/data", req.body)
  //     .then((resBody) => {
  //       console.log(resBody);
  //       res.redirect("/user");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div>
      <form onSubmit={login}>
        <div className="form-group">
          <label Htmlfor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signin;
