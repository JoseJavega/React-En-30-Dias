// index.js

import React from "react";
import ReactDOM from "react-dom";
import asabenehImage from "./images/asabeneh.jpg";

// Funcion para mostrar mes, dia y año

// Componente UserCard
const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className="user-card">
    <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
);

// Componente button
const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
);

// Estilos CSS en un objeto javascript
const buttonStyles = {
  backgroundColor: "#61dbfb",
  padding: 10,
  border: "none",
  borderRadius: 5,
  margin: 3,
  cursor: "pointer",
  fontSize: 18,
  color: "white",
};

// Componente basado en clases
class Header extends React.Component {
  constructor(props) {
    super(props);
    // El código dentro del constructor se ejecuta antes que otra cosa
  }
  render() {
    console.log(this.props.data);
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data;

    return (
      <header>
        <div className="header-wrapper">
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    );
  }
}

// Componente TechList
// Componente basado en clases
class TechList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { techs } = this.props;
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
    return techsFormatted;
  }
}

// Componente Main
// Componente basado en clases
class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        <div className="main-wrapper">
          <p>Requisito previo para iniciar en react.js:</p>
          <ul>
            <TechList techs={this.props.techs} />
          </ul>
          <UserCard user={this.props.user} />
          <Button text="Saludar gente" onClick={this.props.greetPeople} style={buttonStyles} />
          <Button text="Mostrar fecha" onClick={this.props.handleTime} style={buttonStyles} />
        </div>
      </main>
    );
  }
}

// Componente Footer
// componente basado en clases
class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer>
        <div className="footer-wrapper">
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    );
  }
}

class App extends React.Component {
  showDate = (time) => {
    const months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];

    const month = months[time.getMonth()].slice(0, 3);
    const year = time.getFullYear();
    const date = time.getDate();
    return ` ${month} ${date}, ${year}`;
  };
  handleTime = () => {
    alert(this.showDate(new Date()));
  };
  greetPeople = () => {
    alert("Bienvenido al reto 30 días con React, 2020");
  };
  render() {
    const data = {
      welcome: "Bienvenido a 30 días con React",
      title: "Empezando React",
      subtitle: "Librería JavaScript",
      author: {
        firstName: "Asabeneh",
        lastName: "Yetayeh",
      },
      date: "Oct 7, 2020",
    };
    const techs = ["HTML", "CSS", "JavaScript"];

    // copiando el autor del objeto data a la variable user a través de operador spread
    const user = { ...data.author, image: asabenehImage };

    return (
      <div className="app">
        <Header data={data} />
        <Main user={user} techs={techs} handleTime={this.handleTime} greetPeople={this.greetPeople} />

        <Footer date={new Date()} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
