
class DOMNodeCollection {

    constructor(arr) {
        this.elements = arr;
    }

    html(str){
        // debugger
        if (str){
            this['elements'].forEach((el) => {
                el['innerHTML'] = str;
            });
        } else {
            return this['elements'][0]['innerHTML'];
        }
    }

    empty(){
        this['elements'].forEach((el)=>{
            el['innerHTML'] = "";
        });
    }

    append(object){
        this['elements'].forEach( (el) => {
            debugger
            if (object instanceof String || object instanceof HTMLElement){
                el['innerHTML'] += object;
            } else {
                el['innerHTML'] += object['elements'][0]['outerHTML'];
            }
        });
    }
}

module.exports = DOMNodeCollection;