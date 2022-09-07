import React, { Component } from 'react'

class Form extends Component {
    initialState = {
        name: '',
        job: '',
    }

    state = this.initialState

    handleChange = () => {

        const { name, value } = event.target 

        this.setState({
            [name]: value
        })
    }

}