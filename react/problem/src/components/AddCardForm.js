import React from 'react'

export default class Component extends React.Component {

  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()
    console.log(this.refs.title.value)
  }

  render() {
    return (
      <form className="well" onSubmit={this.onSubmit}>
        <fieldset className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" ref="title" id="title" className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <button className="btn btn-success">Add Task</button>
        </fieldset>
      </form>
    )
  }

}
