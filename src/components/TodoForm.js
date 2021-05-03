import React from "react";

class Todoform extends React.Component {
    constructor() {
        super();
        this.state = {
            input:""
        }
    }

    handleChanges = e => {
        this.setState({
          input: e.target.value
        });
      };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.input);
    }

    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <input
                onChange={this.handleChanges}
                type="text"
                name="chores"
                />
            <button>Add</button>
          </form>
        );
    }

}

export default Todoform;
