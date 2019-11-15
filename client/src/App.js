import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateForm from "./components/Pages/UpdateForm"

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
      />
      <Route 
      path="/update-movie/:id"
      render={props => {
      return <UpdateForm {...props} />;
    }} 
    />

     
     
    </>
  );
};

export default App;

//the last route is creating a route||path AND a Movie component for each individual object on props


////////////////////////////////////

//no link is yet established for UpdateForm but a route is (try not to use a link)

