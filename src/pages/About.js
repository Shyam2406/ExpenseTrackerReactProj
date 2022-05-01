import React from 'react';
import {Link} from 'react-router-dom';

const About = () => {
  return (
    <div>
       <h1 classNameName="h3 mb-3"> About Our Team</h1>

       <div className="row">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Developer 1</h5>
        <h6 className="card-title">Shyam Patel</h6><br/>
        <h6 className="card-title">Skills:</h6>
        <p className="card-text">HTML, CSS, JAVASCRIPT, REACT.JS, NODE.JS, JAVA</p>
        <p className="card-text">If You Have Any Query During using Website,You can Contact Me <br/>Here is my Email Address You can Put Mail Me.</p>
        <p className="card-text"><i data-feather="mail"></i>{" "}shyampatel210@gmail.com</p>
       
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
      <h5 className="card-title">Developer 2</h5>
      <h6 className="card-title">Gadhavi Jitudan</h6><br/>
      <h6 className="card-title">Skills:</h6>
        <p className="card-text">HTML, CSS, JAVASCRIPT, BOOTSTRAP, REACT.JS, NODE.JS, PYTHON</p>
        <p className="card-text">If You Have Any Query During using Website,You can Contact Me <br/>Here is my Email Address You can Put Mail Me.</p>
        <p className="card-text"><i data-feather="mail"></i>{" "}gadhavijitu018@gmail.com</p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default About
