import React from "react";
import plus from "../../assets/+.png";

class AddCard extends React.Component {
  constructor(props) {
    super(props);
  }

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
      borderRadius: this.props.border,
      fontSize: "1rem",
      boxShadow: "-4px 4px 10px rgba(0,0,0,0.5)"
    };    

    const imgStyle = {
    }
    
    const headerStyle = {
        margin: "20px 0 0 0",
        fontWeight: "50"
    }

    return (
      <div style={containerStyle}>
        <img src={plus} style={imgStyle} width="20%" height="40%"></img>
        <h1 style={headerStyle}>Create New</h1>
      </div>
    );
  }
}

export default AddCard;
