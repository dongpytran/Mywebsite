import React from 'react';

class Error404 extends React.Component{
    render(){
        return(
            <div>
                <div className="container-fluid text-center" style={{marginTop: '300px', marginBottom:'200px'}}>
                    <h1>404 Error!</h1>
                    <h3>The page you're looking for was not found.</h3>
                </div>
            </div>
        )
    }
}
export default Error404