const heading = React.createElement("h1" , {
    id : "title"
} , "Hello from React"); 

//h1 will now have an attribute id
//createElement will create a tag
//takes 3 args,<tagname,object,valueInside_tag>

console.log(heading); 
//This is a plaing JS object.
//The react elements are basically object.


const root = ReactDOM.createRoot(document.getElementById("root"));

//this tells where in HTML we want to run the react code.

const heading1 = React.createElement("h1",{
    id : "title"
}, "Heading 1");


const heading2 = React.createElement("h1" , {
    id : "title"
}, "Heading 2");

const div = React.createElement("div",{
    id : "container"
}, [heading1,heading2]);

root.render(div);
//passing a react element inside the root.
//This render method, takes an object and modifies the DOM.
//Hence DOM is rendered with the values of this react element, which is nothing but a 
//JS object.