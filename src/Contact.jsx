import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/CSS/Contact.css'
const Contact = () => {
  return (
    <>
      <div className="  bg-primary container-home-page">
        <div style={{ color: "white", overflow: "auto" }}>
          <div className="row ">
            <span className=" col-12 d-flex  justify-content-center   ">
              <h1> Contact</h1>
            </span>
            <div className="col-12 ms-5 ">
              <h2>Opening Hour</h2>
              <p className="">Monday to Friday</p>
            </div>
            <div className="col-12  ms-5 ">
              <h2>Information</h2>
              <ul
                className="p-0 m-0"
                style={{ listStyle: "none", textDecoration: "none" }}
              >
                <li className="">
                  Address : <a>Hwang ho</a>
                </li>
                <li className="">
                  Phone : <a>1234567</a>
                </li>
                <li className="">
                  Email : <a>Hwang@gmail.com</a>
                </li>
              </ul>
            </div>
            <div className="col-12 ms-5  ">
              <h2>Questions?</h2>
              <p>Email this from using this form</p>
            </div>
            <div className="   pb-2 d-flex  justify-content-center  align-items-center">
              <form className=" col-5 d-flex flex-column pt-2">
                <input type="text" placeholder="Name" />
                <input className="mt-2" type="email" placeholder="Email" />
                <input
                  className="p-2 mt-2"
                  type="number"
                  placeholder="Phone-Number"
                />
                <textarea
                  className="mt-2"
                  name="postContent"
                  rows={4}
                  cols={40}
                />
                <span className=" pt-2 d-flex justify-content-center align-items-center">
                  <button
                    type="sumbit"
                    className="btn btn-secondary col-4 "
                  >
                    Submit
                  </button>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-picture">
       
      </div>
    </>
  );
};

export default Contact;