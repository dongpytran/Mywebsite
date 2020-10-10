import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component{
      componentDidMount () {
            /*const script1 = document.createElement("script");
            script1.src = "assets/js/cursor.js";
            script1.async = true;

            const script2 = document.createElement("script");
            script2.src = "assets/js/openmenu.js";
            script2.async = true;

            const script3 = document.createElement("script");
            script3.src = "assets/js/hidenav.js";
            script3.async = true;*/

            const script4 = document.createElement("script");
            script4.id = "bgmusic";
            script4.src = "assets/js/bg-music.js";
            script4.async = true;

            const script5 = document.createElement("script");
            script5.id = "page";
            script5.src = "assets/js/pageloadinggsap.js";
            script5.async = false;

            const script6 = document.createElement("script");
            script6.id = "cursorprv";
            script6.src = "assets/js/cursorPreview.js";
            script6.async = true;
            const script7 = document.createElement("script");
            script7.id="context";
            script7.src = "assets/js/contextmenu.js";
            script7.async = true;
            //const script8 = document.createElement("script");
            //script8.src = "assets/js/wow.min.js";
            //script8.async = false;
            
        
            //document.body.appendChild(script1);
            //document.body.appendChild(script2);
            //document.body.appendChild(script3);
            document.body.appendChild(script4);
            document.body.appendChild(script5);
            document.body.appendChild(script6);
            document.body.appendChild(script7);
            //document.body.appendChild(script8);
        }
        componentWillUnmount(){
            document.body.removeChild(document.querySelector("#bgmusic")); // This will remove the script on unmount
            document.body.removeChild(document.querySelector("#page"));
            document.body.removeChild(document.querySelector("#cursorprv"));
            document.body.removeChild(document.querySelector("#context"));
        }
      
    render(){
        return(
            <div>
      <div className="bg-music">
            
      </div>
      <button id="two-btn" className="wow fadeInUp" data-wow-delay="2s">
            <i id="play" className="material-icons">volume_off</i>
            <i id="pause" className="material-icons">volume_up</i>
      </button>
      <div className="wrapper">
            

            <div className="hero">
                  <div className="header">
                        <h1 className="line anim-typewriter">I Love Hardstyle!!</h1>
                        
                  </div>
                  <video id="bg-video" autoPlay loop playsInline preload="auto">
                        <source src="./assets/video/bgg.mp4" type="video/mp4"/>
                        <source src="./assets/video/bgg.mp4" type="video/ogg"/>
                        Your browser does not support video
                  </video>
            </div>

            <div className="scroll-down"></div>


            <div className="container-fluid">
                  <br/><br/><br/>

                  <h6>My Favourite Songs</h6>

                  <div className="vertical"></div>
                  <br/>

                  <div className="whitespace"></div>
                  <div className="whitespace"></div>

                  <div className="row">
                        <div className="col-lg-7"></div>

                        <Link className="col-lg-4 project project1 wow fadeInUp" data-wow-delay="0.5s" style={{color:'#fff',textDecoration:'none'}} to='/Waiting-For-The-Light-That-Never-Come'></Link><div></div>
                        <div className="col-lg-1"></div>
                  </div>

                  <div className="whitespace"></div>

                  <div className="row">
                        <div className="col-lg-1"></div>
                        <Link className="col-lg-4 project project2 wow fadeInUp" data-wow-delay="0.5s" style={{color:'#fff',textDecoration:'none'}} to='/They-Dont-Know-Us'></Link><div></div>

                        <div className="col-lg-7"></div>
                  </div>

                  <div className="whitespace"></div>

                  <div className="row">
                        <div className="col-lg-7"></div>

                        <Link className="col-lg-4 project project3 wow fadeInUp" data-wow-delay="0.5s" style={{color:'#fff',textDecoration:'none'}} to='/Without-You'></Link><div></div>

                        <div className="col-lg-1"></div>
                  </div>

                  <div className="whitespace"></div>

                  <div className="row">
                        <div className="col-lg-1"></div>

                        <Link className="col-lg-4 project project4 wow fadeInUp" data-wow-delay="0.4s" style={{color:'#fff',textDecoration:'none'}} to='/Lost-Control'></Link><div></div>

                        <div className="col-lg-7"></div>
                  </div>

                  <div className="whitespace"></div>
            </div>
            

      </div>

</div>
        )
    }
}

export default Home
