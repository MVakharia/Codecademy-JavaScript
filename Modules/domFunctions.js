const toggleHiddenElement = (domElement) => {
    //The parameter 'domElement' signifies that this const is actually a function, not a field.

    if(domElement.style.display === 'none') {
        domElement.style.display = 'block';
    }
    else {
        domElement.style.display = 'none';
    }
}

export { toggleHiddenElement };

const resources = {
    toggleHiddenElement
}

export default resources;