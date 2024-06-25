import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div id="footer">
           <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <h5><i className="fa fa-road"></i> ABG Company LTD.</h5>
                            <div className="row">
                                <div className="col-6">
                                    <ul className="list-unstyled">
                                        <li><a href="">Bahaddarhat</a></li>
                                        <li><a href="">Chittagong</a></li>
                                        
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul className="list-unstyled">
                                        <li><b><a href="">About Us</a></b></li>
                                        <li><a href="">Mahima Motors is one of the first and largest website about motorcycle in Bangladesh. We have started our journey since 25th January 2012. We have experienced and hard working team and our prime goal is to provide motorcycle related necessary information to the visitors in easy way</a></li>
                                        
                                    </ul>
                                </div>
                            </div>
                           
                            <br />
                        </div>
                        <div className="col-md-2">
                            <h5 className="text-md-right">Contact Us</h5>
                            <hr />
                            <p>01978232355</p><hr/>
                         <p>ashfaqurrashid1@gmail.com</p>
                         <p>c231245@ugrad.iiuc.ac.bd</p><hr/>
                         <p>facebook.com</p>                     
                              </div>
                        <div className="col-md-5">
                            
                                
                        
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
