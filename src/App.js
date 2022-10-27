import React from "react";
import profile_pic from './photo/profile_pic.png';
import hub_icon from './photo/hub_icon.png';
import internship from './photo/internship.png';
import I4G from './photo/I4G.png';
import icon from './photo/Icon.png';
import './App';

import './App.css'

const App = () => {
    return(
        <body className="main">
            <section className="profile">
                <div>
                    <img className="profile_id"  src= {profile_pic} alt="profile picture"/>
                    <p className="twitter">Annette Black</p>
                    {/* <p className="slack">ABIMBOLA</p> // my slack name that was asked to be hidden */}
                    {/* <div className="icon">
                        <img src={icon} alt ="icon"/>
                    </div> */}
                </div>
            </section>
            <section>
                <div className="row">
                    <div className="container">
                    <div className="linksection">
                        <button className="twitter_zuri"> <a href="https://training.zuri.team/" target= 'blank'>Twitter</a></button>
                        <button className="button_zuri"> <a href="https://training.zuri.team/" target= 'blank'>Zuri Team</a></button>
                        <button className="zuri_books"> <a href="https://books.zuri.team/" target= 'blank'>Zuri Books</a></button>
                        <button className="python_books"> <a href="https://books.zuri.team/" target= 'blank'>Python Books</a></button>
                        <button className="check_coders"> <a href="https://background.zuri.team/" target= 'blank'>Background Check for Coders </a></button>
                        <button className="design_books"> <a href="https://books.zuri.team/design-rules" target= 'blank'>Design Books </a></button>
                </div>
               
                    </div>
                </div>
               
                    <div className="social-icons">
                        <img  src= {hub_icon} alt="slack icon"/>
                        <img  src= {hub_icon} alt =" github icon"/>
                    </div>
            </section>
            <footer>
                {/* <hr size= "100px" width="80%" color="grey" />   */}
                

                <div className="main_footer">
                    <span></span>
                    <div className="sub_footer">
                        <img className="internship" src= {internship} alt="zuri internship"/>
                        <p className="text">HNG Internship 9 Frontend task</p>
                        <img className="I4G" src={I4G} alt="ingressive for good"/>
                    </div>
                </div>
            </footer>
        </body>
    );
}
export default App;