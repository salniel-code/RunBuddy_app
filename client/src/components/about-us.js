import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Header extends Component {
    render() {
      return (
     <div className="jumbotron">
         <h1 className="display-4">RunBuddy</h1>
         <hr className="my-4"></hr>
         <h3 className="display-6">Vad är RunBuddy?</h3>
 <p className="lead">RunBuddy är för dig som gillar löpning och lite vänskaplig tävling. 
 Runbuddy är ett enkelt sätt att tävla med kompisarna om vem som springer längst varje dag och genom tiderna.</p>
 <hr className="my-2"></hr>
 <h3  className="display-6">Hur fungerar det?</h3>
 <p className="lead">Varje gång du är färdig med en löprunda lägger du till detta under "Skapa Löprunda" och du kan sedan se och jämföra med dina vänner
 under "Alla Löprundor".</p>
         <Link to="/skapa" className="btn btn-primary">
             Lägg till löprunda
         </Link>
     </div>
      );
    }
  }
  