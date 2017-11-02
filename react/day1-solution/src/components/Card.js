import React from 'react'
import classnames from 'classnames';

export default class Card extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      completed: props.completed || false
    }
  }

  toggleCompleted() {
    this.setState({
      completed: !this.state.completed
    })
  }

  render() {
    const classes = classnames({
      'text-warning': this.state.completed,
      'list-group-item': true
    })
    return (
      <li className={classes} onClick={() => this.toggleCompleted()}>
        {this.props.title}
      </li>
    )
  }
}
