import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="container" name="contact">
        <div className="row">
          <h1 className="text-warning fw-bold display-4 text-center">
            Contact Me
          </h1>
          <div className="col-lg-5 col-md-12 col-sm-12 text-center mx-auto mt-5">
            <div className="d-flex flex-column gap-4 mt-4 w-75 mx-auto shadow-lg bg-light p-3 rounded-3">
              <input
                type="Email"
                className="form-control fw-bold "
                placeholder="Email"
              />
              <input
                type="text"
                className="form-control fw-bold "
                placeholder="Your Name"
              />
              <input
                type="text"
                className="form-control fw-bold "
                placeholder="Subject"
              />
              <textarea
                className="form-control fw-bold "
                cols="43"
                rows="3"
                placeholder="Write Something..."
              ></textarea>
              <button className="btn btn-success fw-bold">SEND</button>
            </div>
          </div>

          <div className="col-lg-5 col-md-12 col-12 text-center mt-5 mx-auto mb-5">
            <div className="text-center mb-5 d-flex  gap-3 justify-content-center mt-5">
              <a
                target="_blank"
                href="https://github.com/ArunkumarVK4"
                className="btn btn-secondary hand element"
              >
                <BsGithub size={35} />
              </a>

              <a
                target="_blank"
                href=""
                className="btn btn-primary element hand"
              >
                <BsLinkedin size={35} />
              </a>
            </div>
            <div className="text-light ">
              <h4>
                <span>
                  <img
                    className="img-fluid rounded-4 element mb-3"
                    style={{ width: "6rem" }}
                    src="https://i.gifer.com/Anm7.gif"
                    alt=""
                  />
                </span>{" "}
                vkarunkumar446@gmail.com
              </h4>
              <h4>
                <span className="mt-2">
                  <img
                    className="img-fluid rounded-4 element mt-2"
                    style={{ width: "6rem" }}
                    src="https://i.pinimg.com/originals/20/b6/86/20b6860e2f5560e6fae086a51051bdbc.gif"
                    alt=""
                  />
                </span>{" "}
                +91 8610216170
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
