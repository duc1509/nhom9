import React, { Component } from 'react'

export default class Report extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: 'option1', // Tùy chọn mặc định
        };
    }

    handleOptionChange = (e) => {
        const selectedOption = e.target.value;
        this.setState({ selectedOption });
    }
    render() {

        return (

            <div class="wrapper">

                <div>
                    <h1>Chọn một tùy chọn:</h1>
                    <select value={this.state.selectedOption} onChange={this.handleOptionChange}>
                        <option value="option1">Tùy chọn 1</option>
                        <option value="option2">Tùy chọn 2</option>
                        <option value="option3">Tùy chọn 3</option>
                        <option value="option4">Tùy chọn 4</option>
                    </select>
                    <p>Bạn đã chọn: {this.state.selectedOption}</p>
                </div>

            </div>


        );
    }
}

