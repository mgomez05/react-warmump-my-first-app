import React, {Component} from 'react'
import TableThatUsesSimpleComponents from './TableAsSimpleComponent'

class RussApp extends Component {
  render() {
    return (
      <div className="container">
        <h1>Hello, React 2!</h1>
        <TableThatUsesSimpleComponents />
      </div>
    )
  }
}

export default RussApp