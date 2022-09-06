import React, {Component} from 'react'
import TableThatUsesSimpleComponents from './TableThatUsesSimpleComponents'

class RussApp extends Component {

  state = {

    // The characters that will be displayed in the table
    characters: [
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
    ],
  }

  removeCharacter = (index) => {
    const { characters } = this.state

    this.setState({

      // Set the characters to the same list of characters,
      // minus the one character whose index matches the <index> 
      // argument
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  render() {

    return (
      <div className="container">
        <h1>Hello, React 2!</h1>
        <TableThatUsesSimpleComponents characterData={CHARACTERS}/>
      </div>
    )
  }
}

export default RussApp