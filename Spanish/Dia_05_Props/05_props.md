<div align="center">
  <h1> 30 Días de React: Props </h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>

<sub>Autor:
<a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
<small> Octubre, 2020</small>
</sub>

</div>

[<< Día 4](../Dia_04_Componentes/04_componentes.md) | [Día 6 >>](../Dia_06_Map_List_Keys/06_map_list_keys.md)

![30 Days of React banner](/images/30_days_of_react_banner_day_5.jpg)

- [Props](#props)
  - [Props en componentes funcionales](#props-en-componentes-funcionales)
  - [¿Qué son las props?](#qué-son-las-props)
  - [Objeto props](#objeto-props)
    - [Diferentes tipos de datos de props](#diferentes-tipos-de-datos-de-props)
    - [Props de tipo string](#props-de-tipo-string)
    - [Props de tipo number](#props-de-tipo-number)
    - [Props de tipo boolean](#props-de-tipo-boolean)
    - [Props de tipo array](#props-de-tipo-array)
    - [Props de tipo object](#props-de-tipo-object)
    - [Props de tipo function](#props-de-tipo-function)
  - [Desestructuración de props](#desestructuración-de-props)
  - [propTypes](#proptypes)
  - [defaultProps](#defaultprops)
- [Ejercicios: Componentes y props](#ejercicios-componentes-y-props)
  - [Ejercicios: Nivel 1](#ejercicios-nivel-1)
  - [Ejercicios: Nivel 2](#ejercicios-nivel-2)
  - [Ejercicios: Nivel 3](#ejercicios-nivel-3)

# Props

## Props en componentes funcionales

En el día anterior, hemos visto como injectar diferentes tipos de datos a componentes React JSX. Ahora veremos como los usamos en componentes y además cómo enviar diferentes datos como props

## ¿Qué son las props?

Props es una palabra clave especial en React que significa propiedades y se utiliza para pasar datos de un componente a otro y, principalmente, del componente padre al componente hijo. Podemos decir que props es un portador de datos o un medio para transportar datos.

Espero que estés familiarizado con las funciones de JavaScript. La mayoría de las veces, las funciones con parámetros son flexibles y pueden tomar datos dinámicos; del mismo modo, props es una forma de pasar datos o parámetros a un componente. Veamos la diferencia entre una función y un componente.

```js
// sintanxis de la función

const getUserInfo = (firstName, lastName, country) => {
  return `${firstName} ${lastName}. Lives in ${country}.`
}

// llamada a la función

getUserInfo('Asabeneh', 'Yeteyeh', 'Finland')

//sintaxis del componente

// componente User, el componente debe empezar con mayúscula
const User = (props) => {
  return (
    <div>
      <h1>
        {props.firstName}
        {props.lastName}
      </h1>
      <small>{props.country}</small>
    </div>
  )
}
// llamando o instanciando el componente, este componente tiene tres propiedades que llamaremos props:firstName, lastName, country
<User firstName = 'Asabeneh', lastName='Yetayeh' country = 'Finland' />
```

En la sección anterior, inyectamos datos de la siguiente manera, y hoy cambiaremos estos datos por props.

```js
const welcome = "Bienvenido a 30 días con React";
const title = "Empezando React";
const subtitle = "Librería JavaScript";
const author = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
};
const date = "Oct 4, 2020";

// componente Header
const Header = () => (
  <header>
    <div className="header-wrapper">
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        {author.firstName} {author.lastName}
      </p>
      <small>{date}</small>
    </div>
  </header>
);
```

En lugar de inyectar datos, también podemos pasar los datos como props. Las props de React son similares a los parámetros en las funciones.

## Objeto props

Las props de React son un objeto que se obtiene al instante cuando se crea un componente de React. Antes de pasar propiedades al componente, veamos qué obtenemos en el objeto props.

```js
import React from "react";
import ReactDOM from "react-dom";

// componente Header
const Header = (props) => {
  console.log(props); // objeto vacío, {}
  return (
    <header>
      <div className="header-wrapper">
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {author.firstName} {author.lastName}
        </p>
        <small>{date}</small>
      </div>
    </header>
  );
};

// App, o el componente padre o contenedor
// Componente funcional
const App = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
```

En el console.log(props) anterior, obtendrías un objeto vacío ({}). Esto significa que si no pasas ningún atributo o propiedad cuando instancias el componente, las props estarán vacías; de lo contrario, se poblarán con los datos que pasaste como atributos, y el nombre correcto de estos atributos es props.

Empecemos con un ejemplo sencillo. En el ejemplo siguiente, la cadena welcome se ha pasado como props en el componente Header.

```js
import React from "react";
import ReactDOM from "react-dom";

// componente Header
const Header = (props) => {
  console.log(props); // {welcome:'Bienvenido a 30 días con React'}
  return (
    <header>
      <div className="header-wrapper">
        <h1>{props.welcome}</h1>
      </div>
    </header>
  );
};

// App, o el componente padre o contenedor
// Componente funcional
const App = () => {
  return (
    <div className="app">
      <Header welcome="Bienvenido a 30 días con React" />
    </div>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
```

Ahora, cuando hagas console.log(props) deberías obtener el siguiente objeto, lo que significa que la propiedad welcome que pasamos al componente Header se puede encontrar dentro del objeto props.

```js
{
  welcome: "Bienvenido a 30 días con React";
}
```

### Diferentes tipos de datos de props

### Props de tipo string

El tipo de datos de las props enviadas al atributo del componente es un string

```js
import React from "react";
import ReactDOM from "react-dom";

// Header Component
const Header = (props) => {
  console.log(props);
  return (
    <header>
      <div className="header-wrapper">
        <h1>{props.welcome}</h1>
        <h2>{props.title}</h2>
        <h3>{props.subtitle}</h3>
        <p>
          {props.firstName} {props.lastName}
        </p>
        <small>{props.date}</small>
      </div>
    </header>
  );
};

// App, o el componente padre o contenedor
// Componente funcional
const App = () => (
  <div className="app">
    <Header
      welcome="Bienvenido a 30 días con React"
      title="Empezando React"
      subtitle="Librería JavaScript"
      firstName="Asabeneh"
      lastName="Yetayeh"
      date="Oct 4, 2020"
    />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Si revisas la consola del navegador, obtendrás en siguiente objeto.

```js
{
firstName: "Asabeneh",
lastName: "Yetayeh",
date: "Oct 4, 2020"
subtitle: "Librería JavaScript"
title: "Empezando React"
welcome: "Bienvenido a 30 días con React"
}
```

Como ahora ya eres un ninja de JavaScript, ya sabes que hacer con este objeto.

En el ejemplo que has visto arriba, el valor de props se ha escrito de manera estática. Sin embargo, es difícil implementar alguna lógica sobre datos escritos de manera estática, así que es mejor usar variables como props. Veamos el siguiente ejemplo:

```js
import React from "react";
import ReactDOM from "react-dom";

// Header Component
const Header = (props) => (
  <header>
    <div className="header-wrapper">
      <h1>{props.welcome}</h1>
      <h2>{props.title}</h2>
      <h3>{props.subtitle}</h3>
      <p>
        {props.firstName} {props.lastName}
      </p>
      <small>{props.date}</small>
    </div>
  </header>
);

// App, o el componente padre o contenedor
// Componente funcional
const App = () => {
  const welcome = "Bienvenido a 30 días con React";
  const title = "Empezando React";
  const subtitle = "Librería JavaScript";
  const firstName = "Asabeneh";
  const lastName = "Yetayeh";
  const date = "Oct 4, 2020";

  return (
    <div className="app">
      <Header
        welcome={welcome}
        title={title}
        subtitle={subtitle}
        firstName={firstName}
        lastName={lastName}
        date={date}
      />
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

### Props de tipo number

Vamos a usar números como props en el componente

```js
import React from "react";
import ReactDOM from "react-dom";

const Age = (props) => <div>Esta persona tiene {props.age} años.</div>;
const Weight = (props) => <p>El peso del objeto enla tierra es {props.weight} .</p>;

// App, o el componente padre o contenedor
// Componente funcional
const App = () => {
  let currentYear = 2020;
  let birthYear = 1820;
  const age = currentYear - birthYear;
  const gravity = 9.81;
  const mass = 75;

  return (
    <div className="app">
      <Age age={age} />
      <Weight weight={gravity * mass} />
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

### Props de tipo boolean

Podemos pasar datos de tipo boolean al componente React.

```js
import React from "react";
import ReactDOM from "react-dom";

const Status = (props) => {
  // operador ternario para comprobar el estado de la persona
  let status = props.status ? "Edad suficiente para conducir" : "Demasiado joven para conducir";
  return <p>{status}</p>;
};

// App, o el componente padre o contenedor
// Componente funcional
const App = () => {
  let currentYear = 2020;
  let birthYear = 2015;
  const age = currentYear - birthYear; // 15 years

  let status = age >= 18;

  return (
    <div className="app">
      <Status status={status} />
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

### Props de tipo array

En programación se usan frecuentemente los arrays y objetos como datos estructurados para solucionar diferentes problemas y almacenar datos de forma mas estructurada. Por eso encontramos datos en formato array muy a menudo. Vamos a pasar array como props al componente

```js
import React from "react";
import ReactDOM from "react-dom";

const Skills = (props) => <ul>{props.skills}</ul>;

const App = () => (
  <div className="app">
    <Skills skills={["HTML", "CSS", "JavaScript"]} />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Si ves el resultado en el navegador, los elementos de skills necesitan formateado. Por lo tanto, antes de renderizar, deberíamos añadir algunos elementos entre cada skill. Para modificar el array y añadir un elemento li podemos usar el método map. Deberías estar muy familiarizado con map, filter y reduce, de la programación funcional para sentirte cómodo con React; si no es así, por favor vuelve al repaso de JavaScript del día 1. Apliquemos map para modificar el array.

```js
import React from "react";
import ReactDOM from "react-dom";

// Componente Skills
const Skills = (props) => {
  // Modificando el array skills
  const skillList = props.skills.map((skill) => <li>{skill}</li>);
  return <ul>{skillList}</ul>;
};

const App = () => (
  <div className="app">
    <Skills skills={["HTML", "CSS", "JavaScript"]} />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Profundizaremos sobre listas y mapas en otra sección. Ahora, veamos objetos como props.

### Props de tipo object

Podemos pasar un objetc como props a los componentes React. Veamos un ejemplo.
Podemos cambiar las props anteriores de Header a un object. Por ahora cambiemos algunas propiedades para entenderlo mejor.

```js
import React from "react";
import ReactDOM from "react-dom";

// Componente Header
const Header = (props) => {
  return (
    <header>
      <div className="header-wrapper">
        <h1>{props.data.welcome}</h1>
        <h2>{props.data.title}</h2>
        <h3>{props.data.subtitle}</h3>
      </div>
    </header>
  );
};

// App, o el componente padre o contenedor
// Componente funcional
const App = () => {
  const data = {
    welcome: "Bienvenido a 30 días con React",
    title: "Empezando React",
    subtitle: "Librería JavaScript",
  };

  return (
    <div className="app">
      <Header data={data} />
    </div>
  );
};
const rootElement = document.getElementById("root");
// Renderizamos el elemento JSX usando el paquete ReactDOM
ReactDOM.render(<App />, rootElement);
```

Ahora cambiemos todas las propiedades anteriores de Header a object.

```js
import React from "react";
import ReactDOM from "react-dom";

const showDate = (time) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[time.getMonth()].slice(0, 3);
  const year = time.getFullYear();
  const date = time.getDate();
  return ` ${month} ${date}, ${year}`;
};
// Componente Header
const Header = (props) => {
  return (
    <header>
      <div className="header-wrapper">
        <h1>{props.data.welcome}</h1>
        <h2>{props.data.title}</h2>
        <h3>{props.data.subtitle}</h3>
        <p>
          {props.data.author.firstName} {props.data.author.lastName}
        </p>
        <small>{showDate(props.data.date)}</small>
      </div>
    </header>
  );
};

// El App, o el componente padre o contenedor
// Componente funcional
const App = () => {
  const data = {
    welcome: "Bienvenido a 30 días con React",
    title: "Empezando React",
    subtitle: "Librería JavaScript",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
    date: new Date(), // la fecha necesita ser formateada a un formato legible para humano
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

Cuando usamos un object como props, habitualmente desectructuramos los datos para acceder a los valores. Desectructurando hacemos más fácil de leer nuestro código. Pronto veremos desectructuración de props pero antes veamos funciones como props en componentes React.

### Props de tipo function

Podemos pasar una funcion como props a los componentes React. Veamos un ejemplo.

```js
import React from "react";
import ReactDOM from "react-dom";

// componente Button

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

// El App, o el componente padre o contenedor
// Componente funcional
const App = () => {
  const sayHi = () => {
    alert("Hi");
  };

  return (
    <div className="app">
      <Button text="Say Hi" onClick={sayHi} />
    </div>
  );
};
const rootElement = document.getElementById("root");
// Renderizamos el elemento JSX usando el paquete ReactDOM
ReactDOM.render(<App />, rootElement);
```

Incluso podemos escribir una función dentro de las llaves

```js
import React from "react";
import ReactDOM from "react-dom";

// componente Button

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

// El App, o el componente padre o contenedor
// Componente funcional
const App = () => {
  return (
    <div className="app">
      <Button text="Say Hi" onClick={() => alert("Hi")} />
    </div>
  );
};
const rootElement = document.getElementById("root");
// Renderizamos el elemento JSX usando el paquete ReactDOM
ReactDOM.render(<App />, rootElement);
```

Ahora, vamos a implementar algunas funciones como props

```js
import React from "react";
import ReactDOM from "react-dom";

// componente Button

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

// El App, o el componente padre o contenedor
// Componente funcional
const App = () => {
  const greetPeople = () => {
    alert("Bienvenido a 30 días con React Challenge, 2020");
  };

  return (
    <div className="app">
      <Button text="Greet People" onClick={greetPeople} />
      <Button text="Show Time" onClick={() => alert(new Date())} />
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

En el ejemplo de arriba, onClick es una prop que contiene la función greetPeople. HTML tiene los manejadores de eventos onclick, onmouseover, onhover, onkeypress etc. En React, estos manejadores (handlers) se usan en camelCase. Por ejemplo onClick, onMouseOver, onKeyPress etc. Cubriremos los eventos en React, a detalle, en otra sección.

Veamos más funciones como props para tener un entendimiento más claro sobre cómo manejar funciones como props en componentes React.

Este componente muestra mes, día y año en un alert box.

```js
import React from "react";
import ReactDOM from "react-dom";

// Función que muestra la fecha en formato Mes día, año ejemp. Oct 4, 2020
const showDate = (time) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[time.getMonth()].slice(0, 3);
  const year = time.getFullYear();
  const date = time.getDate();
  return ` ${month} ${date}, ${year}`;
};

// componente Button

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

// El App, o el componente padre o contenedor
// Componente funcional
const App = () => {
  const handleTime = () => {
    alert(showDate(new Date()));
  };
  const greetPeople = () => {
    alert("Bienvenido a 30 días con React Challenge, 2020");
  };
  return (
    <div className="app">
      <Button text="show time" onClick={handleTime} />
      <Button text="Greet People" onClick={greetPeople} />
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

## Desestructuración de props

A estas alturas, creo que eres un ninja de JavaScript y sabes sobre la desestructuración de arrays y objetos. La desestructuración de datos, hasta cierto punto, facilita la lectura. Desestructuricemos las props del componente Header. Todo lo que pasamos como props se almacena en el objeto props. Por lo tanto, props es un objetc y podemos desestructurar las propiedades. Desestructuricemos algunas de las props que escribimos como object en el ejemplo. Podemos desestructurar de muchas formas:

1. Desestructuración paso a paso

```js
import React from "react";
import ReactDOM from "react-dom";

const showDate = (time) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[time.getMonth()].slice(0, 3);
  const year = time.getFullYear();
  const date = time.getDate();
  return ` ${month} ${date}, ${year}`;
};
// componente Header
const Header = (props) => {
  const data = props.data;
  const { welcome, title, subtitle, author, date } = data;
  const { firstName, lastName } = author;
  return (
    <header>
      <div className="header-wrapper">
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  );
};

// El App, o el componente padre o contenedor
// Componente funcional
const App = () => {
  const data = {
    welcome: "Bienvenido a 30 días con React",
    title: "Empezando React",
    subtitle: "Librería JavaScript",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
    date: new Date(),
  };

  return (
    <div className="app">
      <Header data={data} />
    </div>
  );
};
const rootElement = document.getElementById("root");
// Renderizamos el elemento JSX usando el paquete ReactDOM
ReactDOM.render(<App />, rootElement);
```

2. Desestructuración en una línea

```js
import React from "react";
import ReactDOM from "react-dom";

const showDate = (time) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[time.getMonth()].slice(0, 3);
  const year = time.getFullYear();
  const date = time.getDate();
  return ` ${month} ${date}, ${year}`;
};
// Componente Header
const Header = (props) => {
  const data = props.data;
  const {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  } = data;

  return (
    <header>
      <div className="header-wrapper">
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  );
};

// App, o el componente padre o contenedor
// Componente funcional
const App = () => {
  const data = {
    welcome: "Bienvenido a 30 días con React",
    title: "Empezando React",
    subtitle: "Librería JavaScript",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
    date: new Date(),
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

3. Desestructuración de props dentro de los paréntesis

```js
import React from "react";
import ReactDOM from "react-dom";

const showDate = (time) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[time.getMonth()].slice(0, 3);
  const year = time.getFullYear();
  const date = time.getDate();
  return ` ${month} ${date}, ${year}`;
};
// Componente Header
const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  },
}) => {
  return (
    <header>
      <div className="header-wrapper">
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  );
};

// App, o el componente padre o contenedor
// Componente funcional
const App = () => {
  const data = {
    welcome: "Bienvenido a 30 días con React",
    title: "Empezando React",
    subtitle: "Librería JavaScript",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
    date: new Date(),
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

Ahora, desestructurizaremos todos los componentes que tenemos y los ensamblaremos justos. Pasaremos props de un componente a otro, típicamente de componentes padres a hijos.
Por ejemplo en el componente Main techs, user, greetPoeple y handleTime props se han pasado del componente padre Main a los hijos TechList y UserCard. Abajo encontrarás todos los códigos desestructurados y límpios.

```js
import React from "react";
import ReactDOM from "react-dom";
import asabenehImage from "./images/asabeneh.jpg";

// Función que muestra mes dia año

const showDate = (time) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[time.getMonth()].slice(0, 3);
  const year = time.getFullYear();
  const date = time.getDate();
  return ` ${month} ${date}, ${year}`;
};

// Componente Header
const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  },
}) => {
  return (
    <header>
      <div className="header-wrapper">
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  );
};

// Componente TechList
const TechList = ({ techs }) => {
  const techList = techs.map((tech) => <li key={tech}>{tech}</li>);
  return techList;
};

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

// Componente Button
const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
);

// Estilos CSS en Objeto JavaScript
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

// Componente Main
const Main = ({ user, techs, greetPeople, handleTime }) => (
  <main>
    <div className="main-wrapper">
      <p>Prerrequisito para empezar react.js:</p>
      <ul>
        <TechList techs={techs} />
      </ul>
      <UserCard user={user} />
      <Button text="Saludar" onClick={greetPeople} style={buttonStyles} />
      <Button text="Ver Fecha" onClick={handleTime} style={buttonStyles} />
    </div>
  </main>
);

// Componente Footer
const Footer = ({ copyRight }) => (
  <footer>
    <div className="footer-wrapper">
      <p>Copyright {copyRight.getFullYear()}</p>
    </div>
  </footer>
);

// App, o el componente padre o contenedor
// Componente funcional
const App = () => {
  const data = {
    welcome: "Bienvenido a 30 días con React",
    title: "Empezando React",
    subtitle: "Librería JavaScript",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
    date: new Date(), // la fecha necesita ser formateada a un formato legible para humano
  };
  const date = new Date();
  const techs = ["HTML", "CSS", "JavaScript"];
  // copiando author del objeto data a la variable user usando el operedor spread
  const user = { ...data.author, image: asabenehImage };

  const handleTime = () => {
    alert(showDate(new Date()));
  };
  const greetPeople = () => {
    alert("Welcome to 30 Days Of React Challenge, 2020");
  };

  return (
    <div className="app">
      <Header data={data} />
      <Main user={user} techs={techs} handleTime={handleTime} greetPeople={greetPeople} />
      <Footer copyRight={date} />
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

## propTypes

El paquete propTypes nos ayuda a asignar los tipos de datos de las props que pasamos a un componente.

## defaultProps

Se puede usar defaultProps cuando quweremos tener algunos valores iniciales prfedeterminados para las props de un componente

Cubriremos propTypes a detalle en otra sección.

# Ejercicios: Componentes y props

## Ejercicios: Nivel 1

1. ¿Qué son props en los componentes React?
2. ¿Cómo accedes a las props en los componentes React?
3. ¿Qué tipos de datos podemos pasar como props a los componentes?
4. ¿Qué es propTypes?
5. ¿Qué es default propTypes?

## Ejercicios: Nivel 2

1. Crea un componentes funcional que muestre la siguiente imagen

   ![Front end](/images/frontend_technologies.png)

2. Usa componentes funcionales para crear el siguiente diseño

![News Letter](/images/news_letter_design.png)

## Ejercicios: Nivel 3

1.  Utiliza el generador Hexadecimal de colores del ejemplo para crear colores aleatorios. Si no sabes como generar colores hexadecimales puedes usar [dummy data generator](https://www.30daysofreact.com/dummy-data)

![Hexadecimal colors](/images/hexadecimal_color_exercise.png)

2. Utiliza componentes funcionales para crear la siguiente tarjeta de usuario.

![User Card](/images/user_card_design_jsx.png)

🎉 FELICIDADES ! 🎉

[<< Día 4](../Dia_04_Componentes/04_componentes.md) | [Día 6 >>](../Dia_06_Map_List_Keys/06_map_list_keys.md)
