import React, { useState } from "react";
import emailjs from "@emailjs/browser";
function Contact_Form() {
    // let anchor = "#";
    let imgalt = "image";
    let publicUrl = process.env.PUBLIC_URL + "/";
    const [parametr, setParametr] = useState({});
    const handelChange = (e) => {
        setParametr({ ...parametr, [e.target.name]: e.target.value });
    };
    const sendHandel = (e) => {
        e.preventDefault();
        emailjs
            .send(
                "service_qcufotp",
                "template_o1veb5r",
                {
                    subject: parametr.subject,
                    name: parametr.name,
                    email: parametr.email,
                    message: parametr.message,
                    reply_to: parametr.email,
                },
                "Xm0uIrXkGf8R61tcc"
            )
            .then(
                (result) => {
                    alert("your E-mail has been sent ", result.text);
                },
                (error) => {
                    alert("Your E-mail was not sent ", error.text);
                }
            );
        setParametr({});
    };

    return (
        <div>
            <div className="contact-form-area pd-top-112">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="section-title text-center w-100">
                                <h2 className="title">
                                    Contact <span>Us</span>
                                </h2>
                                <p>
                                    Our team is always reachable to answer all
                                    your questions.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-5">
                            <img
                                src={publicUrl + "assets/img/others/21.png"}
                                alt={imgalt}
                            />
                        </div>
                        <div className="col-lg-7 offset-xl-1">
                            <form className="riyaqas-form-wrap mt-5 mt-lg-0">
                                <div className="row custom-gutters-16">
                                    <div className="col-md-6">
                                        <div className="single-input-wrap">
                                            <input
                                                type="text"
                                                className="single-input"
                                                name="name"
                                                onChange={handelChange}
                                            />
                                            <label>Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="single-input-wrap">
                                            <input
                                                type="text"
                                                className="single-input"
                                                name="email"
                                                onChange={handelChange}
                                            />
                                            <label>E-mail</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="single-input-wrap">
                                            <input
                                                type="text"
                                                className="single-input"
                                                name="subject"
                                                onChange={handelChange}
                                            />
                                            <label>Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="single-input-wrap">
                                            <textarea
                                                className="single-input textarea"
                                                cols="20"
                                                name="message"
                                                onChange={handelChange}
                                            ></textarea>
                                            <label className="single-input-label">
                                                Message
                                            </label>
                                        </div>
                                    </div>
                                    <div
                                        className="col-12"
                                        onClick={sendHandel}
                                    >
                                        <button className="btn btn-red mt-0">
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact_Form;
