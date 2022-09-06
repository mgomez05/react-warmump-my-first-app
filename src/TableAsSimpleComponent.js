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
        <tbody>
            <tr>
                <td>Charlie</td>
                <td>Janitor</td>
            </tr>
            <tr>
                <td>Mac</td>
                <td>Bouncer</td>
            </tr>
            <tr>
                <td>Dee</td>
                <td>Aspiring actress</td>
            </tr>
            <tr>
                <td>Dennis</td>
                <td>Bartender</td>
            </tr>
        </tbody>
    )
}

// A Class Component (that coincidentally uses simple components)
class TableAsSimpleComponent extends Component {
    render() {
        return (
            <table>
                <TableHeader />
                <TableBody />
            </table>
        )
    }
}

export default TableAsSimpleComponent