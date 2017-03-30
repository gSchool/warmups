import React from 'react'

export default class Component extends React.Component {

  render() {
    return (
      <li className="list-group-item">
        {this.props.title}
      </li>
    )
  }

}
