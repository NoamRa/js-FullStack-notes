import React from 'react';
import './Footer.css'

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer">
                <p className="footer-text">
                    <span className="copyleft">&copy;</span> {(new Date()).getFullYear()} All Rights Reversed.
                </p>
            </div>
        )
    }
}

export default Footer