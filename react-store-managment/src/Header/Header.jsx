import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    buttonLink = (text, url="", className="") => {
      return (
         <a href={url}>
             <Button>
                {text}
            </Button>
         </a>
      )
    }
    
    render() {
        let nav = React.createElement('div');
        this.props.isLoggedIn 
            ? nav = <div>
                    <span>
                        {this.buttonLink("Logout", "/login", "btn btn-link")}
                    </span> 
                    <span>
                        {this.buttonLink("My Store", "/my-store", "btn btn-link")}
                    </span>
                </div>
            : nav = <div>
                    <span>
                        {this.buttonLink("Login", "/login", "btn btn-link")}
                    </span> 
                    <span>
                        {this.buttonLink("Register", "/register", "btn btn-link")}
                    </span>
                </div>
        return (
            nav
        )
    }
}

export default Header;