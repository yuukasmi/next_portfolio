import  { Component } from 'react'; 

class BodyClass extends Component {
    componentDidMount() {
        console.log(window.location.pathname);
        var path = window.location.pathname;
        if (window.location.pathname == '/') {
            this.setBodyClass('home');
        } else if (window.location.pathname == path) {
            var pathClass= path.replace('/', '')
            this.setBodyClass(pathClass);
        } 
    }
    setBodyClass(className) {
        // remove other classes
        document.body.className ='';
        // assign new class
        document.body.classList.add(className);
    }
    render() { 
        return null;
    }
}
export default BodyClass;