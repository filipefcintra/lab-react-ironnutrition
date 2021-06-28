import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';
import FoodBox from './Components/FoodBox';

function App() {
  return (
    foodState: foodList,
    filteredFoodState: [],
    form: false,
    searching: false,
  ),

  handlerenderForm = () => {
    const stateCopy = ({ ...this.state});

    stateCopy.form = !this.state.form;
    this.setState(stateCopy);
  },

  handleAddNewFood = (newFoodItem) => {
    const stateCopy = { ...this.state };
    stateCopy.foodState = [...stateCopy.foodState, newFoodItem];
    stateCopy.form = !stateCopy.form;
    this.setState(stateCopy);
  },

  handleFilterFoods = (searchInput) => {
    const stateCopy = { ...this.state };
    const filteredFoodList = stateCopy.foodState.filter((foodItem) =>
      foodItem.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    stateCopy.filteredFoodListState = filteredFoodList;
    stateCopy.searching = true;

    this.setState(stateCopy);
  },

  <div className="App">
        {/* Search Bar */}
        <FoodSearch handleFilterSearch={this.handleFilterFoods} />

        <br />

        {/* Button to toggle our form */}
        <button onClick={this.handleRenderForm}>Add Food</button>

        {/* Toggle the form when this.state.form has the value of "true"*/}
        {this.state.form && (
          <FoodForm handleLiftFoodFormState={this.handleAddNewFood} />
        )}

        {/* Mapping through the state of foods and passing them to the FoodBox component */}
        {this.state.searching
          ? this.state.filteredFoodListState.map((foodItem, index) => (
              <FoodBox key={index} {...foodItem} />
            ))
          : this.state.foodState.map((foodItem, index) => (
              <FoodBox key={index} {...foodItem} />
            ))}
      </div>
    );
  }
}



// /* const App = () => {
//   const [foodState, setFoodState] = useState(foodList);

//   render() {
//     return (

//     )
//   }



