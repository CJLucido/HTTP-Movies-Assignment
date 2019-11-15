import React , {useState} from 'react'
import axios from 'axios'

export default function UpdateForm(props){

    const [userInput, setUserInput] = useState({
        title: '',
        director:'',
        metascore: '',
        stars: []
    })


    const handleChange = e => {

        setUserInput({...userInput, [e.target.name]: e.target.value})
    }

    // useEffect(() => {

    //     if(props.)
    // })

    const handleSubmit = e => {
        e.preventDefault();

        //put the current item on the endpoint that is associated with the given URL
        // axios
        //     .put(`http://localhost:5000/update-movie/${}`, item)


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

            

                <button type="button" >Update Movie!</button>
                </form>
            </div>

    )
}


