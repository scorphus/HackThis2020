import React from "react";
import plus from "../../assets/+.svg";
import './addCard.css';

class AddCard extends React.Component {
  render() {
    const containerStyle = {
      color: "black",
      backgroundColor: "lightgrey",
      width: this.props.width,
      height: this.props.height,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: this.props.borderRadius,
      border: "none",
      fontSize: "1rem"
    };    

    const imgStyle = {
    }
    
    const headerStyle = {
        margin: "20px 0 0 0",
        fontWeight: "50"
    }

    return (
      <button className="addcard" style={containerStyle} onClick={this.props.onClick}>
        <img src={plus} alt="add" style={imgStyle} width="20%" height="40%"></img>
        <h1 style={headerStyle}>Create New</h1>
      </button>
    );
  }
}

export default AddCard;
