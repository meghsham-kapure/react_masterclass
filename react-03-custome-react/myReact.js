// Step 1 : selecting an root 
const rootEleemnt = document.querySelector('#root');

// Step 2 : Creating an element map
const reactElement = {
    type : 'a', 
    props : {
        href : 'https://www.google.com',
        target : '_self',
    },
    childern : 'click me to visit google.dom'
};


// Step 3 : Rendering the element into root

function customeRender (reactElement, rootContainer){
   // Creating new HTML Element with map 
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.childern;
    
    // BAD APPROCH
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);

    // Loop through all props, doesnt matter how many are there

    // GOOD APPROCH 
    for (const prop in reactElement.props) {
        if (prop === 'children') continue; // Skip children
        else domElement.setAttribute(prop, reactElement.props[prop]);
    }

    // Appending the created lement in rootContainer
    rootContainer.appendChild(domElement);
} 

customeRender(reactElement, rootEleemnt);