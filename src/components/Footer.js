import React from 'react';

class Footer extends React.Component{
    render(){
        return(
            <div>
                <div className="footer">
                  <div className="container">
                        <br/><br/>

                        <div className="collab">
                              <div className="row">
                                    <div className="col-lg-12">
                                          <p className="wow fadeInUp">Got an interesting song? Contact me !!</p>
                                    </div>
                              </div>
                        </div>

                        <br/>

                        <div className="hr">
                              <div className="row"></div>
                        </div>

                        <br/><br/>

                        <div className="info">
                              <div className="row">
                                    <div className="col-lg-4" id="personal">
                                          <p className="wow fadeInUp">Location</p>
                                          <h4 className="wow fadeInUp" data-wow-delay="0.2s"><i className="fa fa-map-marker" aria-hidden="true"></i> Ho Chi Minh City</h4>
                                          <br/><br/>
                                    </div>

                                    <div className="col-lg-4" id="media">
                                          <p className="wow fadeInUp" data-wow-delay="0s">Follow me on</p>

                                          <ul>
                                                <li className="wow fadeInUp" data-wow-delay="0.4s"><a href="https://facebook.com/pydaika13" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" title="Follow me on Facebook"></i></a></li>
                                                <li className="wow fadeInUp" data-wow-delay="0.6s"><a href="https://www.instagram.com/trandongpy_26_08/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" title="Follow me on Instagram"></i></a></li>
                                                <li className="wow fadeInUp" data-wow-delay="0.8s"><a href="/"><i className="fa fa-twitter" title="Follow me on Twitter" rel="noopener noreferrer"></i></a></li>
                                                <li className="wow fadeInUp" data-wow-delay="1s"><a href="https://www.youtube.com/channel/UCoZYOPcStM9Tpa83nzZThsQ?view_as=subscriber" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube-play" title="Follow me on Youtube"></i></a></li>
                                          </ul>

                                          <br/><br/>
                                    </div>

                                    <div className="col-lg-4" id="address">
                                          <p className="wow fadeInUp" data-wow-delay="0s">Contact me</p>
                                          <h4 className="wow fadeInUp" data-wow-delay="0.2s">tramdongpy@gmail.com</h4>
                                          <br/><br/>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className="end-footer">
                        <p className="wow fadeInUp" data-wow-delay="0.1s">Designed & Developed by TranDongPy</p>
                        <p className="wow fadeInUp" data-wow-delay="0.3s">All rights reserved &copy; 2020</p>
                        <img src="./assets/img/sign2.gif" alt="pytran" className="wow fadeInUp" data-wow-delay="0.4s"/>
                  </div>
            </div>

            <br/><br/><br/><br/>
            </div>
        )
    }
}
export default Footer
