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
const TableBody = (props) => {

    // Create an array of rows using props 
    const rows = props.characterData.map((row, index) => {

        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    })


    return (
        <tbody>{rows}</tbody>
    )
}

// A Class Component (that coincidentally uses simple components)
const TableThatUsesSimpleComponents = (props) => {

    const { characterData, removeCharacter } = props

    return (
        <table>
            <TableHeader />
            <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
        </table>
    )
}

export default TableThatUsesSimpleComponents