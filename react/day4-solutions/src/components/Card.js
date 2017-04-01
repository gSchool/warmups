import React from 'react'
import classnames from 'classnames';

export default class Card extends React.Component {
  render() {
    const classes = classnames({
      'text-warning': this.props.completed,
      'list-group-item': true
    })
    return (
      <li className={classes} onClick={() => this.props.toggleCompleted(this.props.id)}>
        {this.props.title}
      </li>
    )
  }
}
