import './App.css';

//import './custom-style/scss/includes.scss'

import 'foundation-sites/dist/css/foundation.min.css'
import 'foundation-sites/dist/css/foundation-float.min.css'
import './custom-style/main.css'
import './custom-style/main'

import Background from './components/Background'
import {redirect} from "react-router-dom";
import {useEffect} from "react";

export async function loader() {
    if (window.location.pathname === "/") {
        return redirect(`/movie`)
    } else {
        redirect(`/anime`)
    }
}

function App() {

    useEffect(() => {
        const Jquery = require('jquery')
        Jquery(document).ready($ => {
            $(document).foundation()
        })
    }, []);

    return (
        <div className="App">
            <Background></Background>
        </div>

    );
}

export default App;
