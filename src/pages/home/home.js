import home from './home.html';
import '../../css/home.css';

const catListener = () => {
        
};

const unicornListener = () => {

};

export const Home = {
    template: home,
    listeners: {
        '.form_cat': catListener,
        '.unicornListener': unicornListener,
    }
}
