import React, { Component } from 'react';

class ConditionalRender extends Component {

    toggleSwitchHandler = () => {
        let data = this.state.showDiv;
        this.setState({
            showDiv: !data
        })
    }
    state = {
        showDiv: false
    }
    render() {
        let dataFin = null;
        if (this.state.showDiv === true) {
            dataFin = (
                <div>
                    <h3>dynamic rendering using if</h3>
                    <p>this is rendered dynamically with if inside render</p>
                </div>
            )
        }

        return (
            <div>
                <button onClick={this.toggleSwitchHandler}>Toggle</button>


                <div>

                    {
                        this.state.showDiv === true ?
                            <div>
                                <h3>Terinary rendering </h3>
                                <p>Showing paragraph</p>
                            </div>
                            : null
                    }
                </div>
                <br />
                <br />
                <br />
                <div>

                    {
                        dataFin
                    }
                </div>
                <br />
                <br />
                <br />
            </div>
        )
    }
}

export default ConditionalRender;