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
      border: "none",
      borderRadius: this.props.borderRadius,
      fontSize: "2rem"
    };

    const headerStyle = {
      fontWeight: "50"
    }

    if (this.props.add === false) {
      return (
        <button className="card" style={containerStyle}>
          {this.props.children}
        </button>
        );      
    } else {
      return <AddCard height={this.props.height} width={this.props.width} borderRadius={this.props.borderRadius}/>
    }
  }
}

export default Card;
