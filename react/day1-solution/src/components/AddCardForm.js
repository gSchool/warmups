import React from 'react'

export default class Component extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.title);
  }

  onTitleChange = (event) => {
    this.setState({
      title: event.target.value
    });
  }

  render() {
    return (
      <form className="well" onSubmit={this.onSubmit}>
        <fieldset className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" className="form-control" value={this.state.title} onChange={this.onTitleChange}/>
        </fieldset>
        <fieldset className="form-group">
          <button className="btn btn-success">Add Task</button>
        </fieldset>
      </form>
    )
  }

}
