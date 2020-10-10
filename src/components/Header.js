import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{

    render(){
        return(
            <div>
                <div className="cursor1"></div>
            <div className="cursor-follower"></div>
            <nav>
                  <span id="brand">
                        <Link to="/" style={{fontWeight:'200'}}><span style={{fontSize: '28px', fontWeight: '200'}}>P</span><span style={{fontSize:'20px'}}> Y</span><span style={{fontSize:'15px'}}> T</span><span style={{fontSize:'15px'}}> R</span><span style={{fontSize:'20px'}}> A</span><span style={{fontSize: '28px',fontWeight: '200'}}> N</span></Link>
                  </span>

                  <ul id="menu">
                        <li><Link to="/" className="bigger"><span className="scale-this" style={{letterSpacing: '1px'}}>.Home</span></Link></li>
                        <li><Link to="/playlist" className="bigger"><span className="scale-this">.Playlist</span></Link></li>
                        <li><Link to="/about" className="bigger"><span className="scale-this">.About</span></Link></li>
                        <li><Link to="/contact" className="bigger"><span className="scale-this">.Contact</span></Link></li>
                  </ul>

                  <div id="toggle">
                        <div className="span"><i className="fa fa-bars"></i></div>
                  </div>

            </nav>

            <div id="resize">
                  <div className="close-btn"><i className="fa fa-close"></i></div>

                  <ul id="menu">
                        <li><Link to="/"><span>.</span>Home</Link></li>
                        <li><Link to="/playlist"><span>.</span>Album</Link></li>
                        <li><Link to="/about"><span>.</span>About</Link></li>
                        <li><Link to="/contact"><span>.</span>Contact</Link></li>
                  </ul>
            </div>
            </div>
        )
    }
}
export default Header