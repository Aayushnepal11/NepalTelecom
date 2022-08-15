import { Header } from "./Components/Header";
import { Helmet } from "react-helmet";
import './style.css';
import React, { Component } from "react";



class Application extends Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>NT</title>
          <meta name="description" content="Nepal Telecom Dummy Website" />
        </Helmet>
        <div>
          <Header />
        </div>
      </div>
    );
  }
}

export default Application;
