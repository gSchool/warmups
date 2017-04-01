import React from 'react'
import Card from './Card'

export default class Component extends React.Component {

  renderCards() {
    return this.props.cards.map((card, i) => {
      return <Card {...card} id={i} toggleCompleted={this.props.toggleCompleted} key={i} />
    })
  }

  render() {
    return (
      <div className="card-list">
        <h1>{this.props.title}</h1>
        <ul className="list-group">
          {this.renderCards()}
        </ul>
      </div>
    )
  }

}

Component.defaultProps = {
  cards: []
}
