import React, { Component } from 'react'

class RussApp extends Component {

    state = {
        data: [],
    }

    // A function that is called after the component
    // is inserted into the html page
    componentDidMount() {

    }

    render() {
        const { data } = this.state
        
        // For each entry in the data, make an element in a bulleted list
        const result = data.map((entry, index) => {
            return <li key={index}>{entry}</li>
        })

        return <ul>{result}</ul>
    }
}

export default RussApp