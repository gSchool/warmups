import React from 'react'
import ReactDOM from 'react-dom'
import CardList from './components/CardList'
import CardData from './CardData.json'
import AddCardForm from './components/AddCardForm'
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: CardData
    };
  }

  onAddCard = (card) => {
    const API_URL = `https://hn.algolia.com/api/v1/search?query=${card.title}`

    axios
      .get(API_URL)
      .then(response => response.data)
      .then(result => {
        console.log(result);
        this.setState({
          cards: this.state.cards.concat(card)
        });
      });
  }

  toggleCompleted = (cardToUpdate) => {
    this.setState({
      //using an immutable pattern to toggle completed
      cards: this.state.cards.map( (item, index) => {
          if(index !== cardToUpdate) {
            // This isn't the item we care about - keep it as-is
            return item;
          }

          // Otherwise, this is the one we want - return an updated value
          return {
            ...item,
            completed: !item.completed
          };
      })
    })
  }

  render() {
    return (
     <main>
        <CardList title="To Do" cards={this.state.cards} toggleCompleted={this.toggleCompleted}/>
        <AddCardForm onSubmit={this.onAddCard}/>
     </main>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('root'))
