import React  from "react";
import ReactDOM  from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

//this tells where in HTML we want to run the react code.

const heading1 = <h1 key="key1">This is the first heading</h1>;

const HeaderComponent = () => {
    return (
        <div>
            {heading1}
            <h2>This is the header HeaderComponent</h2>
            <h2>This is the header HeaderComponent</h2>
        </div>
    )
};




// console.log(HeaderComponent);
// root.render(heading1);
root.render(<HeaderComponent/>);
//passing a react element inside the root.
//This render method, takes an object and modifies the DOM.
//Hence DOM is rendered with the values of this react element, which is nothing but a 
//JS object.

