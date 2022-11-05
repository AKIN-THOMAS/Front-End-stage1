import React from "react";
import {useState} from 'react';
import './contact.css';
import internship from '../photo/internship.svg';
import I4G from '../photo/I4G.png';
import Button from "react-bootstrap/Button"
import { useEffect} from 'react';


const Contact = () => {
     
    const [name, setname] = useState("");

    const onChange = (e) =>{
        const {value} = e.target;

        setname(value);
    }
    return(
        // <main>
        //     <div className="welcome">
        //         <h2>Contact Me</h2>
        //         <p>Hi there, contact me to ask me about anything you have in mind</p>
        //     </div>
        //     <div className="contact-form">
        //         <form action="#" id="form">
        //             <div className="user-details">
        //                 <div className="part1">
        //                     <div className="input-box">
        //                         <label>First name</label>
        //                         <input type= "text" onChange = {onChange}
        //                         placeholder = "Enter your first name"
        //                         name="firstname"  value = {name} />
                               
        //                     </div>
        //                     <div className="input-box">
        //                         <label>Last name</label>
        //                         <input type= "text" 
        //                         placeholder = "Enter your last name"
        //                         name="lastname" />
        //                     </div>
        //                 </div>
        //                 <div className="part2">
        //                     <div className="input-box">
        //                         <label>Email</label>
        //                         <input type= "email" 
        //                         placeholder = "yourname@email.com"
        //                         name="email" />
        //                     </div>
        //                     <div className="input-box">
        //                         <label>Message</label>
        //                         <textarea type="text" 
        //                         placeholder="Send me a message and i will reply as soon as possible"/>
        //                     </div>
        //                     <div className="check">
        //                         <input  type="checkbox"/> You agree to providing your data to {name} who may contact you.
        //                     </div>
        //                     <div className="btn">
        //                         <button className=" btn-1">
        //                             <p>Send message</p>
        //                         </button>
        //                     </div>
        //                     <footer>                  
        //                         <div className="main_1">
        //                             <div className="sub_2">
        //                                 <img className="internship" src= {internship} alt="zuri internship"/>
        //                                 <p className="word">HNG Internship 9 Frontend task</p>
        //                                 <img className="I4G" src={I4G} alt="ingressive for good"/>
        //                             </div>
        //                         </div>
        //                     </footer>
        //                 </div>
        //             </div>
        //         </form>
        //     </div>
        // </main>
<body>
    <section>
        <div className="row body">
            <div className="container">
            <div className="col-md-12">
                <div className="jumbotron">
                    <div className="main">
                        <div className="welcome">
                            <h2>Contact me</h2>
                            <p>Hi there, contact me to ask me anything you have in mind</p>
                        </div>
                        <form action="#">
                            <div className="user-details">
                            <div className="now">
                                    <div className="input-box ">
                                        <label>First name</label>
                                        <input type="text" id="first_name" placeholder="Enter your first name" required />
                                    </div>
                                    <div className="input-box ">
                                        <label>Last name</label>
                                        <input className="lastname" id="last_name" type="text" placeholder="Enter your last name" required />
                                    </div>
                            </div>
                                <div className="later">
                                    <div className="input-box">
                                        <label>Email</label>
                                        <input className="email" id="email" type="email" placeholder="yourname@email.com" required />
                                    </div>
                                    <div className="input-box">
                                        <label>Message</label>
                                        <textarea  id="message" placeholder="Send me a message and i will replay you as soon as possible" required></textarea>
                                    </div>
                                </div>
                    
                            <div className="check">
                                    <input type="checkbox" required/> <label>You agree to providing your data to {name} who may contact you</label>
                            </div>
                    
                            <div>
                                    <Button id="btn__submit" type="submit">Send message</Button>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
    <footer>                  
                    <div className="main_footer">
                        <span></span>
                        <div className="sub_footer">
                            <img className="internship" src= {internship} alt="zuri internship"/>
                            <p className="word">HNG Internship 9 Frontend task</p>
                            <img className="I4G" src={I4G} alt="ingressive for good"/>
                        </div>
                    </div>
                </footer>
</body>
    );
}

export default Contact;