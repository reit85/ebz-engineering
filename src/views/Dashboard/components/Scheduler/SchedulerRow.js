import React from 'react';

export class SchedulerRow extends React.Component {
  render() {
    return <div 
      style={
        {
          fontWeight: "bold",
          fontSize: "1.2em",
          margin: '10px',
        }
      }>{
        this.props.row.name
        }</div>;
  }
}