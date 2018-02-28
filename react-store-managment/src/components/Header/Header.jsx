import React from 'react';
import { Button } from 'semantic-ui-react';


const Head = (props) => {
    return (
        <header>
            <p>{props.title}</p>
            <Button
                content="Login"
            />
        </header>
    );
}

export default Head;