import React from 'react';
import PropTypes from "prop-types";

function Food({name, image, rating}) {
    return <div>
        <h1> 하이 {name}</h1>
        <h2>{image}</h2>
        <h3>{rating}/5.0</h3>
    </div>
}

const foodILke = [
    {
        id:"1",
        name:"aa",
        image:"aa",
    },
    {
        id:"2",
        name:"bb",
        image:"bb",
        rating: 2
    },
    {
        id:"3",
        name:"cc",
        image:"cc",
        rating: 1
    }
];

Food.protTypes ={
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number
};

function App() {
  return (
      <div>
          <h1>hello!</h1>
          {foodILke.map(dish =>
              <Food key={dish.id}
                    name={dish.name}
                    image={dish.image}
                    rating={dish.rating}
              />
          )}
      </div>
  );
}


export default App;
