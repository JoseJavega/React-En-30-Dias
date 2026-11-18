<div align="center">
  <h1> 30 Días de React: Componentes de Clase </h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>

<sub>Author:
<a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
<small> Octubre, 2020</small>
</sub>

</div>

[<< Day 6](../Dia_06_Map_List_Keys/06_map_list_keys.md) | [Day 8 >>](../08_Day_States/08_states.md)

![30 Days of React banner](/images/30_days_of_react_banner_day_7.jpg)

- [Componentes de Clase](#componentes-de-clase)
  - [Acceder a las props en los componentes de Clase](#acceder-a-las-props-en-los-componentes-de-clase)
  - [Métodos en los componentes basados en Clases](#métodos-en-los-componentes-basados-en-clases)
- [Ejercicios](#ejercicios)
  - [Ejercicios: Nivel 1](#ejercicios-nivel-1)
  - [Ejercicios: Nivel 2](#ejercicios-nivel-2)
  - [Ejercicios: Nivel 3](#ejercicios-nivel-3)

# Componentes de Clase

En las secciones anteriores, hemos cubierto JSX, componentes funcionales y props. En esta sección, cubriremos los componentes de clase o componentes con estado. Solo los componentes basados en clases solían tener estado y métodos de ciclo de vida. Sin embargo, a partir de la versión 16.8.0 de React, los componentes funcionales pueden tener estado y ciclo de vida usando React Hooks. En el reto 30 Días de React, cubriremos React antes y después de la 16.8.0, es decir, tanto la versión antigua como la más reciente. Hay muchos códigos escritos en versiones anteriores y en algún momento pueden necesitar migración. Además, para entender React muy bien, uno también tiene que entender los componentes basados en clases.

Todos los componentes anteriores son componentes funcionales. Hagamos también un componente basado en clases. Un componente basado en clases se crea usando la clase de JavaScript y hereda de React Component. Aprendamos cómo crear un componente basado en clases convirtiendo todos los componentes funcionales que hicimos anteriormente. No es importante convertirlos todos, pero los estamos convirtiendo con el fin de aprender cómo cambiar componentes funcionales a componentes de clase.

```js
// Clase e hija de JavaScript pura
// Imagina que esto es lo que importamos del paquete React
class Component {
  constructor(props) {}
}

// Así es como hacemos componentes basados en clases heredando del padre
class Child extends Component {
  constructor(props) {
    super(props);
  }
}
```

Componente React funcional

```js
// index.js

import React from "react";
import ReactDOM from "react-dom";
// Componente Header
// Componente Functional
const Header = () => (
  <header>
    <div className="header-wrapper">
      <h1>Bienvenido a 30 días con React</h1>
      <h2>Empezando React</h2>
      <h3>Librería JavaScript</h3>
      <p>Asabeneh Yetayeh</p>
      <small>Oct 6, 2020</small>
    </div>
  </header>
);
const rootElement = document.getElementById("root");
ReactDOM.render(<Header />, rootElement);
```

Un componente de React basado en clases es un hijo de React.Component y tiene un método render incorporado, y puede tener un constructor.

```js
//index.js

import React from "react";
import ReactDOM from "react-dom";

// componente basado en clases
class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header-wrapper">
          <h1>Bienvenido a 30 días con React</h1>
          <h2>Empezando React</h2>
          <h3>Librería JavaScript</h3>
          <p>Asabeneh Yetayeh</p>
          <small>Oct 7, 2020</small>
        </div>
      </header>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Header />, rootElement);
```

Veamos el componente anterior con un constructor.

```js
//index.js

import React from "react";
import ReactDOM from "react-dom";

// componente basado en clases
class Header extends React.Component {
  constructor(props) {
    super(props);
    // El código dentro del constructor se ejecuta antes que cualquier otro código.
  }
  render() {
    return (
      <header>
        <div className="header-wrapper">
          <h1>Bienvenido a 30 días con React</h1>
          <h2>Empezando React</h2>
          <h3>Librería JavaScript</h3>
          <p>Asabeneh Yetayeh</p>
          <small>Oct 7, 2020</small>
        </div>
      </header>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Header />, rootElement);
```

Cambiemos todos los componentes funcionales a componentes basados en clases.

```js
// Componente TechList
// componente functional
const TechList = () => {
  const techs = ["HTML", "CSS", "JavaScript"];
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
  return techsFormatted;
};

// Componente TechList
// componente basado en clases
class TechList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const techs = ["HTML", "CSS", "JavaScript"];
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
    return techsFormatted;
  }
}

// Componente Main
// Componente funcional
const Main = () => (
  <main>
    <div className="main-wrapper">
      <p>Requisito previo para iniciar en react.js:</p>
      <ul>
        <TechList />
      </ul>
    </div>
  </main>
);

// Componente Main
// componente basado en clases
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
            <TechList />
          </ul>
        </div>
      </main>
    );
  }
}

// Componente Footer
// Componente functional
const Footer = () => (
  <footer>
    <div className="footer-wrapper">
      <p>Copyright 2020</p>
    </div>
  </footer>
);

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
          <p>Copyright 2020</p>
        </div>
      </footer>
    );
  }
}

// App, o el componente padre o contenedor
// Componente functional
const App = () => (
  <div className="app">
    <Header />
    <Main />
    <Footer />
  </div>
);

// App, o el componente padre o contenedor
// componente basado en clases
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
```

Pongamos todas los componentes basado en clase juntos.

```js
//index.js

import React from "react";
import ReactDOM from "react-dom";

// componente basado en clases
class Header extends React.Component {
  constructor(props) {
    super(props);
    // El código dentro del constructor se ejecuta antes que cualquier otro código.
  }
  render() {
    return (
      <header>
        <div className="header-wrapper">
          <h1>Bienvenido a 30 días con React</h1>
          <h2>Empezando React</h2>
          <h3>Librería JavaScript</h3>
          <p>Asabeneh Yetayeh</p>
          <small>Oct 7, 2020</small>
        </div>
      </header>
    );
  }
}

// Componente TechList
// componente basado en clases
class TechList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const techs = ["HTML", "CSS", "JavaScript"];
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
    return (
      <main>
        <div className="main-wrapper">
          <p>Requisito previo para iniciar en react.js:</p>
          <ul>
            <TechList />
          </ul>
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
          <p>Copyright 2020</p>
        </div>
      </footer>
    );
  }
}

// App, o el componente padre o contenedor
// componente basado en clases
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

## Acceder a las props en los componentes de Clase

Afirmamos que props es un medio para enviar datos de un componente a otro, o podemos decir que props es un portador de datos. Por lo tanto, también deberíamos manejar props en los componentes basados en clases. Podemos acceder a las props de un componente basado en clases usando la palabra clave _this_. Veamos el ejemplo a continuación.

```js
// index.js

import React from "react";
import ReactDOM from "react-dom";

// componente basado en clases
class Header extends React.Component {
  constructor(props) {
    super(props);
    // El código dentro del constructor se ejecuta antes que cualquier otro código.
  }
  render() {
    return (
      <header>
        <div className="header-wrapper">
          <h1>{this.props.data.welcome}</h1>
          <h2>{this.props.data.title}</h2>
          <h3>
            {this.props.data.author.firstName} {this.props.data.author.lastName}
          </h3>
          <small>{this.props.data.date}</small>
        </div>
      </header>
    );
  }
}
const App = () => {
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

  return (
    <div className="app">
      <Header data={data} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Como puedes ver en el ejemplo anterior, para extraer los datos de las props tenemos que escribir _props.data_ cada vez. Podemos evitar esta repetición usando la desestructuración.

```js
// index.js

import React from "react";
import ReactDOM from "react-dom";

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
const App = () => {
  const data = {
    welcome: "Bienvenido a 30 días con React",
    title: "Empezando React",
    subtitle: "Librería JavaScript",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
    date: "Oct 6, 2020",
  };

  return (
    <div className="app">
      <Header data={data} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Fíjate que el código de arriba es mas límpio que el anterior. Ahora vamos a limpiar todos los componentes que tenemos y a colocarlos juntos.

```js
// index.js

import React from "react";
import ReactDOM from "react-dom";

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
    return (
      <main>
        <div className="main-wrapper">
          <p>Requisito previo para iniciar en react.js:</p>
          <ul>
            <TechList techs={this.props.techs} />
          </ul>
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

    return (
      <div className="app">
        <Header data={data} />
        <Main techs={techs} />
        <Footer date={new Date()} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

## Métodos en los componentes basados en Clases

Accedemos a los métodos en los componentes basados en clases. La mayoría de las veces, escribimos diferentes métodos en el componente padre y los pasamos a los componentes hijos. Veamos la implementación.

Añadamos un método a este componente.

```js
//index.js

import React from "react";
import ReactDOM from "react-dom";

// componente basado en clases
class Header extends React.Component {
  greetPeople = () => {
    alert("Bienvenido al reto 30 días con React, 2020");
  };
  render() {
    return (
      <header>
        <div className="header-wrapper">
          <h1>Bienvenido a 30 días con React</h1>
          <h2>Empezando React</h2>
          <h3>Librería JavaScript</h3>
          <p>Asabeneh Yetayeh</p>
          <small>Oct 7, 2020</small>
          <button onClick={this.greetPeople}> Greet </button>
        </div>
      </header>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Header />, rootElement);
```

La invocación o llamada del método se desencadena cuando ocurre el evento. Por lo tanto, siempre que pases un método a un escuchador de eventos, no invoques el método.

Ahora, tomemos el código que teníamos y añadamos todos los métodos necesarios.

```js
// index.js

import React from "react";
import ReactDOM from "react-dom";
import asabenehImage from "./images/asabeneh.jpg";

// Función para mostrar mes, día y año

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
```

La mayoría de las veces, el componente contenedor o el componente padre puede escribirse como componente de clase y los demás como componentes funcionales o de presentación. Los datos normalmente fluyen desde los componentes padre hacia los componentes hijo y es unidireccional. Sin embargo, la última versión de React nos permite escribir todos los componentes de nuestra aplicación solo con componentes funcionales. Esto era imposible en versiones anteriores.
En la siguiente sección, cubriremos el estado, que es el corazón de React. El estado permite que un componente de React se vuelva a renderizar cada vez que haya un cambio en el estado.

# Ejercicios

## Ejercicios: Nivel 1

1. ¿Cómo se escribe una función pura de JavaScript?
2. ¿Qué es la herencia y cómo se crea un hijo a partir de una clase padre?
3. ¿Qué es un componente de React basado en clases?
4. ¿Cuál es la diferencia entre un componente funcional de React y un componente de React basado en clases?
5. ¿Cuándo necesitamos usar componentes basados en clases en lugar de componentes funcionales?
6. ¿Cuáles son los casos de uso de un componente basado en clases?
7. ¿Qué tipo de componente se usa con más frecuencia? ¿Funcional o basado en clases?
8. ¿Qué es el ciclo de vida de React? (aún no cubierto)
9. ¿Qué es el estado en React? (aún no cubierto)

## Ejercicios: Nivel 2

Aprende más sobre los componentes basados en clases, cambiando los ejercicios de días anteriores a componenets basados en clases

## Ejercicios: Nivel 3

Proximamente ...

🎉 FELICIDADES ! 🎉

[<< Day 6](../Dia_06_Map_List_Keys/06_map_list_keys.md) | [Day 8 >>](../Dia_08_Estados/08_estados.md)
