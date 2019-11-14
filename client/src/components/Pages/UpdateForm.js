import React , {useState} from 'react'
import axios from 'axios'

function UpdateForm(props){

    const [userInput, setUserInput] = useState({
        title: '',
        director:'',
        metascore: '',
        stars: []
    })


    const handleChange = e => {

        setUserInput({...userInput, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();



    }

    return (

            <div>
                <form onSubmit={handleSubmit}>
                    <label name='title'>Movie Title</label>
                    <input
                    type="text"
                    name= "title"
                    value= {userInput.title}
                    onChange={handleChange}
                />

                    <label name='title'>Movie Title</label>
                    <input
                    type="text"
                    name= "director"
                    value= {userInput.director}
                    onChange={handleChange}
                />

                    <label name='title'>Movie Title</label>
                    <input
                    type="text"
                    name= "metascore"
                    value= {userInput.metascore}
                    onChange={handleChange}
                />

                    <label name='title'>Movie Title</label>
                    <input
                    type="text"
                    name= "stars"
                    value= {userInput.stars}
                    onChange={handleChange}
                />

            

                <button type="button" >Update Movie!</button>
                </form>
            </div>

    )
}


export default UpdateForm