import React, { Component } from 'react'

// Simple Component
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

// Simple Component
const TableBody = () => {
    return (
        <tbody/>
    )
}

// A Class Component (that coincidentally uses simple components)
class TableThatUsesSimpleComponents extends Component {
    render() {

        const { characterData } = this.props

        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData}/>
            </table>
        )
    }
}

export default TableThatUsesSimpleComponents