import React from 'react'

class InterestBox extends React.Component {
  render() {
    return (
      <div className="interest-box">
        <a href={this.props.link} target="_blank">
          <i className={this.props.iconClass} aria-hidden="true"></i>
        </a>
        <div className="interest-text">{this.props.name}</div>
      </div>
    );
  }
};

export default InterestBox
