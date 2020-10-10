import React from 'react';
import {Link} from 'react-router-dom';

class Album extends React.Component{
    componentDidMount(){
        const scrpitImg = document.createElement("script");
        scrpitImg.id = "imgprv";
        scrpitImg.src = 'assets/js/imgPreview.js';
        scrpitImg.async = true;
        document.body.appendChild(scrpitImg);

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
        document.body.removeChild(document.querySelector("#imgprv"));
        document.body.removeChild(document.querySelector("#cursorprv2"));
        document.body.removeChild(document.querySelector("#page2"));
    }
    render(){
        return(
            <div>
                <div className="whitespace"></div>

                <div className="container">
                <div className="hero-content">
                <br/><br/>

                <div className="row">
                    <div className="col-lg-8">

                            <h3 className="wow fadeInUp" data-wow-delay="1s">.PlayList</h3><br/>
                            <p className="wow fadeInUp" data-wow-delay="1.2s">Here is a list of my favorite hardstyle songs that I listen to every day. (Updating)<br/>Listen, free your mind and enjoy!</p>

                    </div>
                </div>
                </div>
                </div>


                <div className="row workpage-wrapper pl-3">
                <div className="projects-wrapper">
                    <div className="projects-prv"></div>
                </div>
                <ul className="navi-list">
                    <li className="navi-item">
                    <Link className="nav-linkk nav-linkk-1 wow fadeInUp" data-wow-delay="1.4s" to='/Waiting-For-The-Light-That-Never-Come'>
                        <span data-text="1.&nbsp;Waiting&nbsp;For&nbsp;The&nbsp;Light&nbsp;That&nbsp;Never&nbsp;Come">1.&nbsp;Waiting&nbsp;For&nbsp;The&nbsp;Light&nbsp;That&nbsp;Never&nbsp;Come</span>
                    </Link>
                    </li>
                    <div className="project-overlay"></div>
                    <li className="navi-item">
                    <Link className="nav-linkk nav-linkk-2 wow fadeInUp" data-wow-delay="1.6s" to='/They-Dont-Know-Us'>
                        <span data-text="2.&nbsp;They&nbsp;Dont&nbsp;Know&nbsp;Us">2.&nbsp;They&nbsp;Dont&nbsp;Know&nbsp;Us</span>
                    </Link>
                    </li>
                    <li className="navi-item">
                    <Link className="nav-linkk nav-linkk-3 wow fadeInUp" data-wow-delay="1.8s" to='/Without-You'>
                        <span data-text="3.&nbsp;Without&nbsp;You">3.&nbsp;Without&nbsp;You</span>
                    </Link>
                    </li>
                    <li className="navi-item">
                    <Link className="nav-linkk nav-linkk-4 wow fadeInUp" data-wow-delay="1s" to='/Lost-Control'>
                        <span data-text="4.&nbsp;Lost&nbsp;Control">4.&nbsp;Lost&nbsp;Control</span>
                    </Link>
                    </li>
                    <li className="navi-item">
                    <Link className="nav-linkk nav-linkk-5 wow fadeInUp" to='/Faye'>
                        <span data-text="5.&nbsp;Faye">5.&nbsp;Faye</span>
                    </Link>
                    </li>
                    <li className="navi-item">
                    <Link className="nav-linkk nav-linkk-6 wow fadeInUp" to='/Here-I-Come'>
                        <span data-text="6.&nbsp;Here&nbsp;I&nbsp;Come">6.&nbsp;Here&nbsp;I&nbsp;Come</span>
                    </Link>
                    </li>
                    <li className="navi-item">
                    <Link className="nav-linkk nav-linkk-7 wow fadeInUp" to='/One-Tribe'>
                        <span data-text="7.&nbsp;One&nbsp;Tribe">7.&nbsp;One&nbsp;Tribe</span>
                    </Link>
                    </li>
                    <li className="navi-item">
                    <Link className="nav-linkk nav-linkk-8 wow fadeInUp" to='/Wild-Fire'>
                        <span data-text="8.&nbsp;Wildfire">8.&nbsp;Wildfire</span>
                    </Link>
                    </li>
                </ul>
                </div>
            </div>
        )
    }
}
export default Album