import React, { Component } from 'react'

class RussApp extends Component {

    state = {
        data: [],
    }

    // A function that is called after the component
    // is inserted into the html page
    componentDidMount() {

        const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'

        // Make a GET request and set the json data to the 'data' attribute of the page's state
        fetch(url)
            .then((result) => result.json())
            .then((result) => {
                this.setState({
                    data: result,
                })
            })
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