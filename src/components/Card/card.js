import React from "react";
import AddCard from "../AddCard/addCard";
import './card.css';

class Card extends React.Component {
  render() {
    const containerStyle = {
      color: "black",
      backgroundColor: this.props.backgroundColor,
      width: this.props.width,
      height: this.props.height,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: this.props.border || "none",
      borderRadius: this.props.borderRadius,
      fontSize: this.props.fontSize || "2rem"
    };

    if (this.props.add === false) {
      return (
        <button className={`card ${this.props.className}`} style={containerStyle} onClick={this.props.onClick}>
          {this.props.children}
        </button>
        );      
    } else {
      return <AddCard height={this.props.height} 
      width={this.props.width} 
      borderRadius={this.props.borderRadius} 
      onClick={this.props.onClick}
      fontSize={this.props.fontSize}
      />
    }
  }
}

export default Card;
