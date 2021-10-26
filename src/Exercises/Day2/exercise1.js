import React, {Component} from 'react';
import { DisplayList } from './displayULComponent';

export class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date(), timestamps: []};
    }
  
  
    tick = ()=> {
      let date = new Date();
      this.setState({
        date: date,
        timestamps: [...this.state.timestamps,date]
      });
    }
  
    render() {
      return (
        <div>
          <div>
              <p>It is {this.state.date.toLocaleTimeString()}.</p>
              <button onClick={this.tick}>
                  Show current time
              </button>
          </div>
          <DisplayList timestamps={this.state.timestamps}/>
        </div>
      );
    }
  }
