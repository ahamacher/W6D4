const DOMNodeCollection = require("./dom_node_collection");

window.$l = function(arg){
    
    if(arg instanceof HTMLElement) {
        return new DOMNodeCollection ([arg]);
    }else {
        const nodeList = document.querySelectorAll(arg);
        const stringArr = Array.from(nodeList);
        return new DOMNodeCollection(stringArr);
    }
};


