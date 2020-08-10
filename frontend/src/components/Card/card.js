import React from "react";

class Card extends React.Component {
  render() {
    const containerStyle = {
      color: "black",
      backgroundColor: this.props.backgroundColor,
      width: this.props.width,
      height: this.props.height,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '10px'
    };

    return <div style={containerStyle}>      
        <h1>{this.props.topic}</h1>
        </div>    
  }
}

export default Card;