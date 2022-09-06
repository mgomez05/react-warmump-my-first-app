import React, {Component} from 'react'
import TableThatUsesSimpleComponents from './TableThatUsesSimpleComponents'

class RussApp extends Component {
  render() {

    // The characters that will be displayed in the table
    const CHARACTERS = [
      {
        name: 'Charlie',
        job: 'Janitor'
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspiring'
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]

    return (
      <div className="container">
        <h1>Hello, React 2!</h1>
        <TableThatUsesSimpleComponents />
      </div>
    )
  }
}

export default RussApp