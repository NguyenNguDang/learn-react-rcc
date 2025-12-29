import React, { Component } from "react";
import glasses from "../data/glasses.json"; 

export default class SelectGlassesEX extends Component {
  state = {
    glassesItem: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  renderGlasses = () => {
    return glasses.map((item) => {
      return (
        <div className="col-2 p-2" key={item.id}>
          <img 
            style={{ width: "100%", cursor: "pointer", border: '1px solid #eee' }} 
            src={item.url} 
            alt={item.name} 
            onClick={()=>{ this.setState({glassesItem: item}) }}
          />
        </div>
      );
    });
  };

  render() {
    const container = {
      backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(./glassesImage/background.jpg)",
      minHeight: "100vh", 
      backgroundSize: "cover",
      backgroundPosition: "center",
    };

    const header = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "rgba(0, 0, 0, 0.5)",
      marginBottom: "20px"
    };

    const title = {
      fontSize: "30px",
      fontWeight: "bold",
      padding: "20px 0",
      color: "white",
      margin: 0
    };

    const modelContainer = {
        position: 'relative',
        width: '100%',
        maxWidth: '350px', 
        margin: '0 auto' 
    }

    const modelImgStyle = {
        width: '100%',
        display: 'block'
    }

    const glassesOnFaceStyle = {
        width: '150px',
        position: 'absolute',
        top: '105px',    
        left: '50%', 
        transform: 'translateX(-50%)', 
        opacity: 0.8,
        zIndex: 10
    }

    const infoStyle = {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'rgba(255, 165, 0, 0.5)',
        textAlign: 'left',
        padding: '10px',
        color: '#fff'
    }

    return (
      <div style={container}>
        <div style={header}>
          <p style={title}>TRY GLASSES APP ONLINE</p>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6 text-center">
                <div style={modelContainer}>
                    <img style={modelImgStyle} src="./glassesImage/model.jpg" alt="Model" />
                    
                    <img style={glassesOnFaceStyle} src={this.state.glassesItem.url} alt="Glasses" />
                    
                    <div style={infoStyle}>
                        <h5 style={{color: 'purple'}}>{this.state.glassesItem.name}</h5>
                        <p style={{fontSize: '12px', margin: 0}}>{this.state.glassesItem.desc}</p>
                    </div>
                </div>
            </div>

            <div className="col-6 text-center">
                <div style={modelContainer}>
                    <img style={modelImgStyle} src="./glassesImage/model.jpg" alt="Model" />
                </div>
            </div>
          </div>

          <div className="row mt-5 bg-white p-3 mx-2" style={{borderRadius: '10px'}}>
             {this.renderGlasses()}
          </div>
        </div>
      </div>
    );
  }
}