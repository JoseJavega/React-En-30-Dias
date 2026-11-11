<div align="center">
  <h1> 30 Días de React: Mapeando Arrays </h1>
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

[<< Día 5](../Dia_05_Props/05_props.md) | [Día 7 >>](../07_Day_Class_Components/07_class_components.md)

![30 Days of React banner](/images/30_days_of_react_banner_day_6.jpg)

- [Mapeando arrays](#mapeando-arrays)
  - [Mapeando y renderizando arrays](#mapeando-y-renderizando-arrays)
    - [Mapeando array de números](#mapeando-array-de-números)
    - [Mapeando array de arrays](#mapeando-array-de-arrays)
    - [Mapeando array de objects](#mapeando-array-de-objects)
    - [Key en el mapeo de arrays](#key-en-el-mapeo-de-arrays)
- [Ejercicios](#ejercicios)
  - [Ejercicios: Nivel 1](#ejercicios-nivel-1)
  - [Ejercicios: Nivel 2](#ejercicios-nivel-2)
  - [Ejercicios: Nivel 3](#ejercicios-nivel-3)

# Mapeando arrays

El array es la estructura más frecuentemente usada para solucionar muchos tipos de problemas. En React, usamos map para transformar un array en una lista de JSX añadiendo ciertos elementos HTML a cada elemento del array.
An array is the most frequently used data structure to handle many kinds of problems. In React, we use map to modify an array to list of JSX by adding a certain HTML elements to each element of an array.

## Mapeando y renderizando arrays

La mayoría de las veces los datos tienen la forma de un array o de un array de objetos. Para renderizar este array o array de objetos, la mayoría de las veces modificamos los datos usando _map_. En la sección anterior, hemos renderizado la lista de techs usando el método map. En esta sección, veremos más ejemplos.

En los siguientes ejemplo, verás cómo renderizar un array de números, un array de strings, un array de paises y un array de skills en el navegador

```js
import React from "react";
import ReactDOM from "react-dom";
const App = () => {
  return (
    <div className="container">
      <div>
        <h1>Lista de Números</h1>
        {[1, 2, 3, 4, 5]}
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Si revisas el navegador, verás que los números están colocados en una línea. Para evitar esto, modificamos el array y cambiamos los elementos del array por elementos JSX. Mira el ejemplo de abajo, el array ha sido modificado a una lista de elementos JSX.

### Mapeando array de números

```js
import React from "react";
import ReactDOM from "react-dom";

const Numbers = ({ numbers }) => {
  // modifying array to array of li JSX
  const list = numbers.map((number) => <li>{number}</li>);
  return list;
};

// App component

const App = () => {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div className="container">
      <div>
        <h1>Lista de números</h1>
        <ul>
          <Numbers numbers={numbers} />
        </ul>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

### Mapeando array de arrays

Veamos cómo mapear un array de arrays

```js
import React from "react";
import ReactDOM from "react-dom";

const skills = [
  ["HTML", 10],
  ["CSS", 7],
  ["JavaScript", 9],
  ["React", 8],
];

// Componente Skill
const Skill = ({ skill: [tech, level] }) => (
  <li>
    {tech} {level}
  </li>
);

// Componente Skills
const Skills = ({ skills }) => {
  const skillsList = skills.map((skill) => <Skill skill={skill} />);
  console.log(skillsList);
  return <ul>{skillsList}</ul>;
};

const App = () => {
  return (
    <div className="container">
      <div>
        <h1>Skills Level</h1>
        <Skills skills={skills} />
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

### Mapeando array de objects

Renderizando un array de objects

```js
import React from "react";
import ReactDOM from "react-dom";

const countries = [
  { name: "Finlandia", city: "Helsinki" },
  { name: "Suiza", city: "Estocolmo" },
  { name: "Dinamarca", city: "Copenague" },
  { name: "Noruega", city: "Oslo" },
  { name: "Islandia", city: "Reykjavík" },
];

// Componente Country
const Country = ({ country: { name, city } }) => {
  return (
    <div>
      <h1>{name}</h1>
      <small>{city}</small>
    </div>
  );
};

// Componente Countries
const Countries = ({ countries }) => {
  const countryList = countries.map((country) => <Country country={country} />);
  return <div>{countryList}</div>;
};
// Componente App
const App = () => (
  <div className="container">
    <div>
      <h1>Lista de Países</h1>
      <Countries countries={countries} />
    </div>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

### Key en el mapeo de arrays

Los keys ayudan a React a identificar elementos que han cambiado, se han añadido o eliminado. Se deben añadir keys a los elementos dentro de los arrays para dar a los elementos una identidad estable. Deben ser únicos. Muchos de los datos ya vienen con un id que podemos usar como key. Si no pasamos un key a React durante el mapeado, se mostrará un warning en el navegador. Si los datos no traen un id tendremos que encontrar la manera de generar un identificar único para cada elemento cuando lo mapeemos. veamos el siguiente ejemplo:

```js
import React from "react";
import ReactDOM from "react-dom";

const Numbers = ({ numbers }) => {
  // modificando el array a un array JSX de li
  const list = numbers.map((num) => <li key={num}>{num}</li>);
  return list;
};

const App = () => {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div className="container">
      <div>
        <h1>Lista de Números</h1>
        <ul>
          <Numbers numbers={numbers} />
        </ul>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Añadamos también key al ejemplo de mapeo de paises.

```js
import React from "react";
import ReactDOM from "react-dom";

const countries = [
  { name: "Finlandia", city: "Helsinki" },
  { name: "Suiza", city: "Estocolmo" },
  { name: "Dinamarca", city: "Copenague" },
  { name: "Noruega", city: "Oslo" },
  { name: "Islandia", city: "Reykjavík" },
];

// Componente country
const Country = ({ country: { name, city } }) => {
  return (
    <div>
      <h1>{name}</h1>
      <small>{city}</small>
    </div>
  );
};

// Componente countries
const Countries = ({ countries }) => {
  const countryList = countries.map((country) => <Country key={country.name} country={country} />);
  return <div>{countryList}</div>;
};
const App = () => (
  <div className="container">
    <div>
      <h1>Lista de paises</h1>
      <Countries countries={countries} />
    </div>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

# Ejercicios

## Ejercicios: Nivel 1

1. ¿Porqué necesitas mapear un array?
2. ¿Porqué necesitas keys durante el mapeo de arrays?
3. ¿Cuál es al importancia de desestructurar tu código?
4. ¿Desestructurar tu código lo hace más límpio y fácil de leer?

## Ejercicios: Nivel 2

1. En el siguiente diseño, los pares son verdes, los impares son amarillos y los números primos son rojos. Construye los siguientes colores usando un componente de React

![Number Generator](/images/day_6_number_generater_exercise.png)

2. Crea los siguientes colores hexadecimales usando un componente de React.

![Number Generator](/images/day_6_hexadecimal_colors_exercise.png)

## Ejercicios: Nivel 3

1.Crea el siguiente grupo de barras usando los datos proporcionados. [data](../Dia_06_Map_List_Keys/06_map_list_keys_boilerplate/src/data/ten_most_highest_populations.js)

![Ten most highest populations](/images/day_6_ten_highest_populations_exercise.png)

🎉 FELICIDADES ! 🎉

[<< Día 5](../Dia_05_Props/05_props.md) | [Day 7 >>](../07_Day_Class_Components/07_class_components.md)
