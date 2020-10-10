import React, {useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';

function Waiting(){
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "assets/js/pageloadinggsap.js";
        script.async = false;
        document.body.appendChild(script);

        const script2 = document.createElement('script');
        script2.src = "assets/js/cursorPreview.js";
        script2.async = true;
        document.body.appendChild(script2);

        const script7 = document.createElement("script");
            script7.src = "assets/js/contextmenu.js";
            script7.async = true;
            document.body.appendChild(script7);
        return () => {
            document.body.removeChild(script);
            document.body.removeChild(script2);
            document.body.removeChild(script7);
  // This will remove the script on unmount
        }
    }, []);
    const location = useLocation();
    let name = '';
    let cate = '';
    let from = '';
    let day2 = '';
    let url = '';
    let detail= '';
    let poster = '';
    let urlpr = '';
    let urlne = '';
    let link1='';
    let link2='';
    let link3 ='';
    if(location.pathname === '/Waiting-For-The-Light-That-Never-Come'){
        name = 'Waiting For The Light That Never Come'
        cate = 'Hardstyle'
        from = 'Coone'
        day2 = '10-10-2020'
        url = './assets/video/light.mp4'
        detail = 'Support'
        poster = './assets/img/light.jpg'
        urlpr = '/Waiting-For-The-Light-That-Never-Come'
        urlne = '/They-Dont-Know-Us'
        link1 = "http://www.djcoone.com"
        link2 = 'http://www.facebook.com/djcoone'
        link3 = 'http://www.youtube.com/coonedj'
    }
    if(location.pathname === '/They-Dont-Know-Us'){
        name = 'They Dont Know Us'
        cate = 'Hardstyle'
        from = 'LUM!X'
        day2 = '10-10-2020'
        url = './assets/video/theydont.mp4'
        detail = 'Support'
        poster = './assets/img/they.jpg'
        urlpr = '/Waiting-For-The-Light-That-Never-Come'
        urlne = '/Without-You'
        link1 = 'https://soundcloud.com/lumix_music'
        link2 = 'https://www.facebook.com/lumixedm/'
        link3 = 'https://www.youtube.com/channel/UC9QnVOHfdiHz-0qzzDoBNbw'
    }if(location.pathname === '/Without-You'){
        name = 'Without You'
        cate = 'Hardstyle'
        from = 'Averion'
        day2 = '10-10-2020'
        url = './assets/video/without.mp4'
        detail = 'Support'
        poster = './assets/img/without.jpg'
        urlpr = '/They-Dont-Know-Us'
        urlne = '/Lost-Control'
        link1 = 'https://soundcloud.com/averionmusic'
        link2 = 'https://www.facebook.com/averionmusic'
        link3 = 'https://www.youtube.com/channel/UCPPT52XzgUvLAdt_RV6xlcw'
    }if(location.pathname === '/Lost-Control'){
        name = 'Lost-Conttrol'
        cate = 'Hardstyle'
        from = 'B2A & Anklebreaker'
        day2 = '10-10-2020'
        url = './assets/video/lostcontrol.mp4'
        detail = 'Support'
        poster = './assets/img/lost.jpg'
        urlpr = '/Without-You'
        urlne = '/Wild-Fire'
        link1 = 'https://soundcloud.com/officialb2amedia'
        link2 = 'https://www.facebook.com/OfficialB2AMedia'
        link3 = 'https://goo.gl/emYsH1'
    }
    if(location.pathname === '/Wild-Fire'){
        name = 'Wildfire'
        cate = 'Hardcore'
        from = 'Re-Style'
        day2 = '10-10-2020'
        url = './assets/video/wildfire.mp4'
        detail = 'Support'
        poster = './assets/img/wildfire.jpg'
        urlpr = '/Lost-Control'
        urlne = '/Faye'
        link1 = 'https://sptfy.com/djrestylemusic'
        link2 = 'http://fb.me/djrestylemusic'
        link3 = 'https://www.youtube.com/channel/UC5-p6UtFN5_buV55ouMTCKQ'
    }
    if(location.pathname === '/Faye'){
        name = 'Faye'
        cate = 'Hardstyle'
        from = 'Coone ft David Spekter'
        day2 = '10-10-2020'
        url = './assets/video/faye.mp4'
        detail = 'Support'
        poster = './assets/img/faye.jpg'
        urlpr = '/Wild-Fire'
        urlne = '/Here-I-Come'
        link1 = 'http://www.djcoone.com'
        link2 = 'http://www.facebook.com/djcoone'
        link3 = 'http://www.youtube.com/coonedj'
    }
    if(location.pathname === '/Here-I-Come'){
        name = 'Here I Come'
        cate = 'Hardstyle'
        from = 'Coone ft Wildstylez'
        day2 = '10-10-2020'
        url = './assets/video/hereicome.mp4'
        detail = 'Support'
        poster = './assets/img/hereicome.jpg'
        urlpr = '/Faye'
        urlne = '/One-Tribe'
        link1 = 'https://www.instagram.com/wildstylez'
        link2 = 'https://www.facebook.com/wildstylez'
        link3 = 'https://www.youtube.com/channel/UCLlHJRoXl6-9-w_3XtASFSw'
    }
    if(location.pathname === '/One-Tribe'){
        name = 'One Tribe'
        cate = 'Hardcore'
        from = 'Sefa'
        day2 = '10-10-2020'
        url = './assets/video/onetribe.mp4'
        detail = 'Support'
        poster = './assets/img/onetribe.jpg'
        urlpr = '/Here-I-Come'
        urlne = '/One-Tribe'
        link1 = 'https://djsefa.com/'
        link2 = 'https://www.facebook.com/djsefa/'
        link3 = 'https://www.youtube.com/channel/UCZpHk06_nhe7C6n0tD1mt_w'
    }
        return (
            <>
            <div>
                <div className="whitespace"></div>

                <div className="container">
                    <div className="hero-content">
                            <br/><br/>
                            <div className="row">
                                <div className="col-lg-12">
                                        <br/>

                                        <h1 className="wow fadeInUp" data-wow-delay="1s">{name}</h1><br/><br/>

                                        <div className="row">
                                            <div className="col-lg-4">
                                                    <p className="wow fadeInUp" data-wow-delay="1.2s">Categories :</p>
                                                    <h6 className="wow fadeInUp" data-wow-delay="1.3s">{cate}</h6>
                                            </div>

                                            <div className="col-lg-4">
                                                    <p className="wow fadeInUp" data-wow-delay="1.4s">Artist :</p>
                                                    <h6 className="wow fadeInUp" data-wow-delay="1.5s">{from}</h6>
                                            </div>

                                            <div className="col-lg-4">
                                                    <p className="wow fadeInUp" data-wow-delay="1.6s">Published :</p>
                                                    <h6 className="wow fadeInUp" data-wow-delay="1.7s">{day2}</h6>
                                            </div>
                                        </div>
                                        <br/>
                                                    <p className="wow fadeInUp" data-wow-delay="1.8s">{detail} {from}:</p>
                                                    <a style={{color:'#adadad', textDecoration:'none'}} className="wow fadeInUp" data-wow-delay="1.8s" href={link1} target="_blank" rel="noopener noreferrer">{from}</a>&nbsp;&nbsp;
                                                    <a style={{color:'#adadad', textDecoration:'none'}} className="wow fadeInUp" data-wow-delay="1.9s" href={link2} target="_blank" rel="noopener noreferrer">Facebook</a>&nbsp;&nbsp;
                                                    <a style={{color:'#adadad', textDecoration:'none'}} className="wow fadeInUp" data-wow-delay="2s" href={link3} target="_blank" rel="noopener noreferrer">Youtube</a>&nbsp;&nbsp;
                                </div>
                            </div>
                    </div>
                </div>


                <div className="project-img">
                    <div className="container">
                            <br/><br/>
                            <div className="row">
                                <video key={url} id="bg-video2" className="w-100 wow fadeInUp" data-wow-delay="2.1s" controls controlsList="nodownload" disablePictureInPicture poster={poster} style={{outline:'none'}}>
                                    <source src={url} type="video/mp4"></source>
                                </video>
                            </div>
                    </div>
                </div>


                <br/><br/>


                <div className="project-nav">
                    <div className="container">
                            <div className="row">
                                <div className="prev" style={{width:'50%'}}>
                                        <Link style={{color:'#adadad', textDecoration:'none'}} to={urlpr}><p><ion-icon name="arrow-back"></ion-icon>Prev</p></Link>
                                </div>
                                <div className="next" style={{width:'50%'}}>
                                        <Link style={{color:'#adadad', textDecoration:'none'}} to ={urlne}><p>Next<ion-icon name="arrow-forward"></ion-icon></p></Link>
                                </div>
                            </div>
                    </div>
                </div>


                <div className="whitespace"></div>
            </div>
            </>
        )
}
export default Waiting
