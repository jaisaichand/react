import React, { Component } from 'react';
import Validator from './Validator';
import Char from './Char'
import './char.scss'

class Assignmenttwo extends Component {

    state = {
        length: 0,
        finalText: ''
    }

    textArray = [];
    funn;

    typeLengthChangeHaldler = (event) => {
        this.setState({ finalText: event.target.value })
        this.setState({ length: event.target.value.length })
        console.log(event.target.value.length)
        this.textArray = this.state.finalText.split('');
        console.log(this.textArray);
    }

    clickHandler = (i) => {
        console.log(i)
        console.log('.')
        let copyText = this.state.finalText.split('');
        copyText.splice(i, 1)
        let cptext = copyText.join('')
        this.setState({ finalText: cptext })
    }


    render() {

        let elementsArray = [];
        //console.log(this.textArray)
        elementsArray = this.state.finalText.split('').map((val, i) => {
            //  console.log(this.textArray)
            return <Char className="charr" key={i} click={() => this.clickHandler(i)} char={val} />;

        })


        return (
            <div>
                <div>
                    <input type="text" value={this.state.finalText} onChange={(e) => { this.typeLengthChangeHaldler(e) }} />
                    <span>{this.state.length}</span>
                </div>
                <Validator length={this.state.length} />
                <div>

                    {
                        elementsArray

                    }
                </div>

            </div>
        )
    }
}

export default Assignmenttwo;