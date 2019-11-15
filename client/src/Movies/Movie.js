import React from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { NavLink, Route, Link } from "react-router-dom";
import UpdateForm from "../components/Pages/UpdateForm"


export default class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    this.fetchMovie(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchMovie(newProps.match.params.id);
    }
  }

  fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => this.setState({ movie: res.data }))
      .catch(err => console.log(err.response));
  };

  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.movie);
  };

  deleteMovie = e => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/api/movies/${this.state.movie.id}`)
      .then(res => this.props.history.push('/'))
      .catch(err => console.log("this is delete", err))
  }

  render() {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }

    return (
      <div className="save-wrapper">
        <MovieCard movie={this.state.movie} />
        <div className="save-button" onClick={this.saveMovie}>
          Save
        </div>
          
            <MovieChange movie={this.state.movie}/>
          <div onClick={this.deleteMovie}>
            D-LEET
          </div>
       

      
      </div>
    );
  }
}

function MovieChange({movie}) {

  // console.log(this.state.movie.id)

 return (
 
   <Link to={`/update-movie/${movie.id}`}>
     <h2>Update this Movie!</h2>
     
   </Link>
 );
}


//this creates an individual page for the movie information in the api associated with the passed in id. This is why it is managing it's own state, separate from the state of the rest of the app. It is managing its own state by using the API state
// the save function is passed down from app. there it sets the state used by the savedList component



// <button type="button" onClick={()=>this.MovieChange()}>Update This Movie!</button>