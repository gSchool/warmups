import React from 'react'
import ReactDOM from 'react-dom'
import CardList from './components/CardList'
import CardData from './CardData.json'
import AddCardForm from './components/AddCardForm'

export default class App extends React.Component {

  render() {
    return (
     <main>
        <CardList title="To Do" cards={CardData} />
        <AddCardForm />
     </main>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('root'))
