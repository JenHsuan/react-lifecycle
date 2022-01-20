import React, { Component } from 'react';
import { Cockpit } from './Cockpit';
import { ServerElement } from './ServerElement';

const containerStyle = {
  marginTop: '30px'
}
export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      serverElements: [
        {type: 'server', name: 'test', content: 'just a test'}
      ]
    };

    this.onServerAdded = this.onServerAdded.bind(this);
    this.onBlueprintAdded = this.onBlueprintAdded.bind(this);
    this.onChangeFirst = this.onChangeFirst.bind(this);
    this.onDestroyFirst = this.onDestroyFirst.bind(this);
    this.updateServerElements = this.updateServerElements.bind(this);
  }

  onServerAdded(name, content) {
    this.updateServerElements(name, content, 'server');
  }

  onBlueprintAdded(name, content) {
    this.updateServerElements(name, content, 'bluePrint');
  }

  updateServerElements(name, content, type) {
    this.setState({
      serverElements: [
        ...this.state.serverElements,
        {
          type: type,
          name: name,
          content: content
        }
      ]
    })
  }

  onChangeFirst() {
    if (this.state.serverElements.length === 0) {
      return;
    }
    //Set a new list for serverElment
    let newElements = [...this.state.serverElements];
    newElements[0].name = 'changed'
    this.setState({serverElements: newElements})
  }

  onDestroyFirst() {
    //Set a new list for serverElment
    let newElements = [...this.state.serverElements];
    newElements.splice(0, 1);
    this.setState({serverElements: newElements})
  }
  render() {
    return (
      <div className="container" style={ containerStyle }>
        <Cockpit
          serverCreated={this.onServerAdded}
          bluePrintCreated={ this.onBlueprintAdded}/>
        <hr />
        <button className="btn btn-primary" onClick={ this.onChangeFirst}>Change the first element</button>
        <button className="btn btn-primary" onClick={ this.onDestroyFirst}>Destroy the first element</button>

        {this.state.serverElements.map((serverElement, index) => {
          return (<div key={ index }>
            <ServerElement
              type={ serverElement.type}
              name={ serverElement.name}
              content={ serverElement.content}/>
          </div>)
        })}
      </div>
    )
  }
}

export default App
