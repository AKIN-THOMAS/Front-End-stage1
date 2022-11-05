import React from "react";
import './contact.css';
import internship from '../photo/internship.svg';
import I4G from '../photo/I4G.png';
import '../photo/checkbox.svg'
import Button from "react-bootstrap/Button"



const Contact = () => {
     
    }
    return(
        
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


export default Contact;