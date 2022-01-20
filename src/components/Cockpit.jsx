import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Cockpit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            content: ''
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <p>Add new Servers or blueprints!</p>
                    <label>Server Name</label>
                    <input type="text" className="form-control" value={this.state.name} onChange={(ele) => {
                        this.setState({ name: ele.target.value })
                    }}/>
                    <label>Server Content</label>
                    <input type="text" className="form-control" value={this.state.content} onChange={(ele) => {
                        this.setState({ content: ele.target.value })
                    }}/>
                    <br/>
                    <button
                        className="btn btn-primary"
                        onClick={() => this.props.serverCreated(this.state.name, this.state.content)}>Add Server</button>
                    <button
                        className="btn btn-primary"
                        onClick={() => this.props.bluePrintCreated(this.state.name, this.state.content)}>Add Server Blueprint</button>
                    </div>
                </div>
        )
    }
}

Cockpit.propTypes = {
    serverCreated: PropTypes.func.isRequired,
    bluePrintCreated: PropTypes.func.isRequired
}
export default Cockpit

