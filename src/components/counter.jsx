import React, { Component } from "react";

class Counter extends Component {
    render () {
        return (
            <div>
                <span className="badge m-2 badge-primary">{this.props.counter.value}</span>
                <button className="btn btn-secondary btn-sm" onClick={() => this.props.onIncrement(this.props.counter)}>Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }

}

export default Counter;