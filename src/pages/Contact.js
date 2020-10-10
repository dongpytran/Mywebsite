import React from 'react';

const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
      }
class Contact extends React.Component{
    constructor(props) {
          super(props);
          this.state = { name: "", email: "", message: "" };
        }
    handleSubmit = e => {
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contactme", ...this.state })
          })
            .then(() => alert("Success! Your message was sent successfully, thank you!"))
            .catch(error => alert("Can't send your message, please try again!"));

          e.preventDefault();
        };

        handleChange = e => this.setState({ [e.target.name]: e.target.value });
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
        const { name, email, message } = this.state;
        return(
            <div>
            <div className="whitespace"></div>

            <div className="container">
                <div className="hero-content">
                        <br/><br/>

                        <div className="row">
                            <div className="col-lg-8">

                                    <h3 className="wow fadeInUp" data-wow-delay="1s">Say hello <span role="img" aria-labelledby="">👋</span></h3><br/>
                                    <p className="wow fadeInUp" data-wow-delay="1.2s">Follow my social media or leave a message for me now !!</p>

                            </div>
                        </div>
                </div>
            </div>


            <div className="container">
                <div className="row">
                        <div className="col-lg-8">
                            <form id="contact-form" data-netlify="true" onSubmit={this.handleSubmit}>
                <ul>
              <li className="wow fadeInUp" data-wow-delay="1.4s">
                <label>
                  Your Name: <div className="textarea"><input type="text" name="name" value={name} onChange={this.handleChange} /></div>
                </label>
              </li>
              <li className="wow fadeInUp" data-wow-delay="1.6s">
                <label>
                  Your Email: <div className="textarea"><input type="email" name="email" value={email} onChange={this.handleChange} /></div>
                </label>
              </li>
              <li className="wow fadeInUp" data-wow-delay="1.6s">
                <label>
                  Message: <div className="textarea"><textarea name="message" value={message} onChange={this.handleChange} rows="6" /></div>
                </label>
              </li>
                </ul>
              <p>
                <button type="submit" id="contact-submit" className="send wow fadeInUp">Send Message</button>
              </p>
            </form>
                        </div>
                </div>
            </div>


            <div className="whitespace"></div>
        </div>
        )
    }
}
export default Contact
