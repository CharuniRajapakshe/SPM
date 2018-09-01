import React from 'react';
import './App.css';
import {Navigation} from "./common/navigation/navigation";
import {Footer} from "./common/footer/footer";
import {Header} from "./common/header/header";


class App extends React.Component {
    render() {
        return (
                <div className="App">
                    <Header/>
                    <div className="row sidebar">
                        <div className="col-md-2 side-nav">
                            <Navigation/>
                        </div>
                        <div className="col-md-10 ">
                            <div className="row">
                                <div className="col-md-12 top-nav">
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
          
        );
    }
}

export default App;