<div align="center">
  <h1> 30 Días de React: Estados</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>

<sub>Autor:
<a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
<small> Octuber, 2020</small>
</sub>

</div>

[<< Day 7](../Dia_07_Componentes_De_Clase/07_class_components.md) | [Day 9 >>](../Dia_09_Renderizado_Condicional/09_renderizado_condicional.md)

![30 Days of React banner](/images/30_days_of_react_banner_day_8.jpg)

- [Estados](#estados)
  - [¿Qué es el estado?](#¿qué-es-el-estado?)
  - [¿Cómo definir un estado?](#¿cómo-definir-un-estado?)
  - [Reescribir un estado usando un metodo JavaScript](#Reescribir-un-estado-usando-un-metodo-JavaScript)
- [Ejercicios](#ejercicios)
  - [Ejercicios: Nivel 1](#ejercicios-nivel-1)
  - [Ejercicios: Nivel 2](#ejercicios-nivel-2)
  - [Ejercicios: Nivel 3](#ejercicios-nivel-3)

# Estados

## ¿Qué es el estado?

¿Qué es el estado? En Inglés, estado significa _la condición particular de algo o alguien en un momento específico_.

Antes de nada, déjame mostrarte algunos estados - ¿Estás contento o triste? - ¿La luz está encendida o apagada? - ¿Está lleno o vacío? Por ejemplo, yo estoy contento porque estoy disfrutando el reto de los 30 Días de React. Espero que tú también estés contento.

El State es un objeto en react que permite a un componente re-renderizarse cuando su estado cambia.

## ¿Cómo definir un estado?

Definimos un valor inicial del estado dentro o fuera del constructo en un componente basado en clases. No podemos directamente modificar o mutar el valor pero podemos usar el método _setState()_ para definir un nuevo estado.
Tal como puedes ver abajo, en el objeto state tenemos un contador que se inicia con valor 0.
Podemos acceder a él usando _this.state_ y en nombre de la propiedad.
Mira el ejemplo.

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  // declarando state
  state = {
    count: 0,
  };
  render() {
    // accediendo al valor de state
    const count = this.state.count;
    return (
      <div className="App">
        <h1>{count} </h1>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Si ejecutas el código anterior verás cero en el navegador. Podemos incrementar o disminuir el valor cambiando el valor de state, usando el metodo de JavaScript.

## Reescribir un estado usando un metodo JavaScript

Ahora, añadamos algunos métodos para incrementar y disminuir el valor de count haciendo click en un botón. Añadimos un botón para aumentar y otro parta disminuir. Para definir el estado usaremos el métodod e react _this.setState_.
Mira el ejemplo abajo.

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
  // declarando state
  state = {
    count: 0,
  };
  render() {
    // accediendo al valor de state
    const count = this.state.count;
    return (
      <div className="App">
        <h1>{count} </h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Sumar uno</button>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Si entendiste el ejemplo anterior, añadir el metodo para restar será fácil. Vamos a añadir el método de menos uno en el evento del click.

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
  // declarando state
  state = {
    count: 0,
  };
  render() {
    // accediendo al valor del state
    const count = this.state.count;
    return (
      <div className="App">
        <h1>{count} </h1>

        <div>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>Sumar uno</button>{" "}
          <button onClick={() => this.setState({ count: this.state.count - 1 })}>Restar uno</button>
        </div>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Ambos botonos funcionan bien, pero necesitamos reestructurar bien el código. Vamos a crear métodos en el componente.

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
  // declarando state
  state = {
    count: 0,
  };
  // método que suma uno al state

  addOne = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // método que resta uno al state
  minusOne = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    // accediendo al valor de state
    const count = this.state.count;
    return (
      <div className="App">
        <h1>{count} </h1>

        <div>
          <button className="btn btn-add" onClick={this.addOne}>
            +1
          </button>{" "}
          <button className="btn btn-minus" onClick={this.minusOne}>
            -1
          </button>
        </div>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Veamos más ejemplos sobre el estado, en el siguiente ejemplo desarrollaremos una pequeña aplicación que muestra un perro o un gato.
Podemos empezar estableciendo el estado inicial con gato; luego, cuando se haga clic, mostrará perro y viceversa. Necesitamos un método que cambie el animal de forma alternativa. Veamos el código a continuación. Si quieres verlo en vivo, haz clic [aquí](https://codepen.io/Asabeneh/full/LYVxKpq).

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
  // declarando state
  state = {
    image: "https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg",
  };
  changeAnimal = () => {
    let dogURL = "https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg";
    let catURL = "https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg";
    let image = this.state.image === catURL ? dogURL : catURL;
    this.setState({ image });
  };

  render() {
    // accediendo al valor de state
    const count = this.state.count;
    return (
      <div className="App">
        <h1>30 Días con React</h1>
        <div className="animal">
          <img src={this.state.image} alt="animal" />
        </div>

        <button onClick={this.changeAnimal} class="btn btn-add">
          Cambiar
        </button>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Ahora, juntemos todos los códigos que tenemos hasta ahora y también implementemos el estado cuando sea necesario

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";
import asabenehImage from "./images/asabeneh.jpg";

// Función que muestra año, dia y mes

const showDate = (time) => {
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

// Componente User Card
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

// CSS styles in JavaScript Object
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

// componente basado en clases
class Header extends React.Component {
  constructor(props) {
    super(props);
    // El código dentro del constructor se ejecuta antes que cualquier otro código.
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
      <header style={this.props.styles}>
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

const Count = ({ count, addOne, minusOne }) => (
  <div>
    <h1>{count} </h1>
    <div>
      <Button text="+1" onClick={addOne} style={buttonStyles} />
      <Button text="-1" onClick={minusOne} style={buttonStyles} />
    </div>
  </div>
);

// Componente TechList
// componente basado en clases
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
// componente basado en clases
class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { techs, user, greetPeople, handleTime, changeBackground, count, addOne, minusOne } = this.props;
    return (
      <main>
        <div className="main-wrapper">
          <p>Requisito previo para iniciar en react.js:</p>
          <ul>
            <TechList techs={techs} />
          </ul>
          <UserCard user={user} />
          <Button text="Saludar" onClick={greetPeople} style={buttonStyles} />
          <Button text="Mostrar fecha" onClick={handleTime} style={buttonStyles} />
          <Button text="Cambiar fondo" onClick={changeBackground} style={buttonStyles} />
          <Count count={count} addOne={addOne} minusOne={minusOne} />
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
  state = {
    count: 0,
    styles: {
      backgroundColor: "",
      color: "",
    },
  };
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
  // metodo para sumar 1 al state
  addOne = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // metodo para restar 1 al state
  minusOne = () => {
    this.setState({ count: this.state.count - 1 });
  };
  handleTime = () => {
    alert(this.showDate(new Date()));
  };
  greetPeople = () => {
    alert("Bienvenido al reto 30 días con React, 2020");
  };
  changeBackground = () => {};
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
    const date = new Date();
    // copiando el autor del objeto data a la variable user a través de operador spread
    const user = { ...data.author, image: asabenehImage };

    return (
      <div className="app">
        {this.state.backgroundColor}
        <Header data={data} />
        <Main
          user={user}
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          changeBackground={this.changeBackground}
          addOne={this.addOne}
          minusOne={this.minusOne}
          count={this.state.count}
        />
        <Footer date={new Date()} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Creoq eu ahora ya entenderás muy bien el state. Después de esto seguiremos usando state en otras secciones porque state y props son el corazón de las aplicaciones react.

## Ejercicios

### Ejercicios: Nivel 1

1. ¿Cuál fue tu estado hoy? ¿Estás contento? Espero que sí. Si lograste llegar hasta aquí, deberías estar contento.
2. ¿Qué es el estado en React?
3. ¿Cuál es la diferencia entre props y estado en React?
4. ¿Cómo accedes al estado en un componente de React?
5. ¿Cómo estableces el estado en un componente de React?

### Ejercicios: Nivel 2

1. Usa el estado de React para cambiar el fondo de la página. Puedes usar esta técnica para aplicar un modo oscuro a tu portafolio.

![Cambia el Fondo](../images/08_day_changing_background_exercise.gif)

2.  Después de mucho tiempo de confinamiento, puede que estés pensando en viajar y no sepas a dónde ir. Puede que te interese desarrollar un selector aleatorio de países que elija tu destino de vacaciones.

![Cambia el Fondo](../images/08_day_select_country_exercise.gif)

### Ejercicios: Nivel 3

Proximamente ...

🎉 FELICIDADES ! 🎉

[<< Day 7](../Dia_07_Componentes_De_Clase/07_class_components.md) | [Day 9 >>](../Dia_09_Renderizado_Condicional/09_renderizado_condicional.md)
