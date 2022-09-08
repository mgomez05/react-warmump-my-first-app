import React, {Component} from 'react'
import TableThatUsesSimpleComponents from './TableThatUsesSimpleComponents'
import Form from './Form'

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

  // Removes a character from the table
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

  // Allows us to submit a new character to the table 
  handleSubmit = (character) => {

    console.log("Calling handleSubmit() with")
    // Add the character to the list of elements 
    // in the character array attribute
    // - The ellipsis tells JS to 
    //   replace the array with each of the elements
    //   of the array
    this.setState(
      { characters: [...this.state.characters, character]} )
    }
    

  render() {

    const { characters } = this.state

    return (
      <div className="container">
        <h1>Hello, React 2!</h1>
        <TableThatUsesSimpleComponents characterData={characters} removeCharacter={this.removeCharacter}/>
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default RussApp