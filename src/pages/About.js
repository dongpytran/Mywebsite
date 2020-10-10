import React from 'react';

class About extends React.Component{
      componentDidMount(){
            const scrpit2 = document.createElement("script");
            scrpit2.id = "cursorprv2";
            scrpit2.src = 'assets/js/cursorPreview.js';
            scrpit2.async = true;
            document.body.appendChild(scrpit2);

            const scrpit3 = document.createElement("script");
            scrpit3.id = "page2";
            scrpit3.src = 'assets/js/pageloadinggsap.js';
            scrpit3.async = true;
            document.body.appendChild(scrpit3);
        }
        componentWillUnmount(){
            document.body.removeChild(document.querySelector("#cursorprv2"));
            document.body.removeChild(document.querySelector("#page2"));
        }
    render(){
        return(
            <div>
                <div className="container">
                  <div className="row">
                        <div className="col-lg-12 about image wow fadeInUp" data-wow-delay="1s"></div>
                  </div>
            </div>

            <div className="container">
                  <div className="hero-content">
                        <br/><br/>

                        <div className="row">
                              <div className="col-lg-12">
                                    <h3 className="wow fadeInUp" data-wow-delay="1.2s">.About Me</h3><br/>

                                    <p className="wow fadeInUp">Living with passion is what I strictly adhere to. “Always do what you love” how much ever hackneyed this sounds it holds absolutely true.</p>

                                    <p className="wow fadeInUp" data-wow-delay="0.2s">I am Py Tran. I'm studying Information Technology at Ho Chi Minh University Of Food Industry.</p>
                                    <div className="container">
                                          <div className="row">
                                                <div className="col-lg-6 wow fadeInUp" style={{position:'relative'}}>
                                                      
                                                      <img  id="py" className="about wow fadeInUp" data-wow-delay="1s" style={{objectFit: 'cover'}} src="./assets/img/py.jpg" alt="TranDongPy"/>
                                                </div>
                                                <div className="col-lg-6 about wow fadeInUp">
                                                      <p className="wow fadeInUp" data-wow-delay="1.2s">I've known about Hardstyle for a long time ago. When i was a little boy, depressed with everything and i didn't have as much energy as other kids. Hardstyle has revived me.</p>
                                                      <p className="wow fadeInUp" data-wow-delay="0.6s">The first song that brought me to the World Of Hardstyle was Doomed - Headhunterz (2011).
                                                      At that time, my mind was like: 'Wtf is this? What's this genre? Finally i found something that i fell in love with.'</p>
                                                </div>
                                          </div>
                                          <div className="row">
                                                <div className="col-lg-6 about wow fadeInUp" style={{position:'relative'}}>
                                                <p className="wow fadeInUp" data-wow-delay="0.4s">I don't know why so many people hate Hardstyle. They said that it sounds like "crap", "it sucks" etc... Everybody has different tastes of music, i am not complaining about that. I have nothing to complain about as I am open to it all.</p>
                                                </div>
                                                <div id="meme-container" className="col-lg-6 about wow fadeInUp">
                                                      <img id="memee" className="wow fadeInUp" style={{width:'500px'}} src="./assets/img/simpson.jpg" alt="meme"/>
                                                </div>
                                          </div>
                                          <div className="row">
                                          <p className="wow fadeInUp" data-wow-delay="0.4s">Hardstyle motivates me!</p>
                                                <p className="wow fadeInUp" data-wow-delay="0.6s">Hardstyle does exactly that what it promises. This music gives me the power to study, play, especially when i workout or do something I don’t like! Hardstyle is an indispensable companion in my tranformation journey from skinny 86 lbs up to 143 lbs. </p>
                                                <p className="wow fadeInUp" data-wow-delay="0.8s">I'm very proud to be a part of Hardstyle. I love it so so much! <i className="fa fa-heart"></i> Fuarkkkkkkkkkkkk !</p>
                                          </div>
                                    </div>

                              </div>
                        </div>
                  </div>
            </div>

            <div className="whitespace"></div>
            </div>
        )
    }
}
export default About