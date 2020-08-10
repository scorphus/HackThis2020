import React from "react";
import AddCard from "../AddCard/addCard";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const containerStyle = {
      color: "black",
      backgroundColor: this.props.backgroundColor,
      width: this.props.width,
      height: this.props.height,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "10px",
      fontSize: "2rem"
    };

    const headerStyle = {
      fontWeight: "50"
    }

    let button;
    if (this.props.add == false) {
      return (
        <div style={containerStyle}>
          <h1 style={headerStyle}>{this.props.topic}</h1>
        </div>
        );      
    } else {
      return <AddCard height={this.props.height} width={this.props.width} border={this.props.border}/>
    }
  }
}

export default Card;
