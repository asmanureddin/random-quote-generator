import React from "react";
import axios from "axios";

import "./App.css";

class App extends React.Component {
    state = { advice: ""};

    componentDidMount() {
        this.fetchAdvice();

    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            const{advice} = response.data.slip;
            this.setState({ advice })
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render () {
        const {advice}=this.state;
        return (
            <div className="app">
                <div className="card">
                    <div>
                    <p className="heading">"{advice}"</p>
                    </div>
                    <div>
                    <button className="button" onClick={this.fetchAdvice}> 
                        <span className="buttonText">
                            CLICK ME FOR AN ADVICE!
                        </span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;