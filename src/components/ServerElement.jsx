import React, { Component } from 'react';

const warningStyle = {
    color: 'red'
};

export class ServerElement extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        console.log('constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps')
        return null;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate')
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        console.log('render')
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    {this.props.name}
                </div>
                <div className="panel-body">
                    {this.props.type === 'server' ? (
                        <strong style = { warningStyle }>
                            {this.props.content}
                        </strong>) : (<em>
                            {this.props.content}
                        </em>)}
                </div>
            </div>
        )
    }
}

export default ServerElement

