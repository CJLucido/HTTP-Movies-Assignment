import React , {useState, useEffect} from 'react'
import axios from 'axios'

export default function UpdateForm(props){

    const [userInput, setUserInput] = useState({
        title: '',
        director:'',
        metascore: '',
        stars: []
    })


    const handleChange = e => {
        e.persist();
        let entry = e.target.value;
        if(e.target.name === "stars"){
            entry = (entry).split()
        }
        setUserInput({...userInput, [e.target.name]: entry})
    }

   
    useEffect(() => {

        if(props.movies.length > 0){
        const newMovie = props.movies.find(movie => 
            `${movie.id}` === props.match.params.id
            )

            setUserInput(newMovie)
    }
    }, [props.movies, props.match.params.id])

    const handleSubmit = e => {
        e.preventDefault();

        //put the current item on the endpoint that is associated with the given URL
        axios
            .put(`http://localhost:5000/api/movies/${userInput.id}`, userInput)
            .then(res => console.log("this is response", res.data))
            .catch(err => console.log("this is err", err))

    }


    return (
       
            <div className="save-wrapper" style={{backgroundColor: "crimson"}}>
       
                <form onSubmit={handleSubmit}>
                    <label name='title'>Movie Title</label>
                    <input
                    type="text"
                    name= "title"
                    value= {userInput.title}
                    onChange={handleChange}
                />

                    <label name='title'>Director</label>
                    <input
                    type="text"
                    name= "director"
                    value= {userInput.director}
                    onChange={handleChange}
                />

                    <label name='title'>Metascore</label>
                    <input
                    type="text"
                    name= "metascore"
                    value= {userInput.metascore}
                    onChange={handleChange}
                />

                    <label name='title'>Stars</label>
                    <input
                    type="text"
                    name= "stars"
                    value= {userInput.stars}
                    onChange={handleChange}
                />

            

                <button >Update Movie!</button>
                </form>
            </div>

    )
}


