import React, { useState } from 'react';
import axios from 'axios';
import './API.css';


function API() {
    const [value, setValue] = useState('');
    // pB4h-ouv3eWFB8KVIFQ0DIfQymRUYJ0k3Q-_SUDxGXM
const fetchImage = () => {
    fetch(`https://api.unsplash.com/search/photos?client_id=pB4h-ouv3eWFB8KVIFQ0DIfQymRUYJ0k3Q-_SUDxGXM&query${value}`)
.then(res=> res.json())
.then(data=> {
    console.log(data)
})

}




    return (
        <div className='API'>
            <div className='myDiv'>
                <span>Search</span>
                <input style={{width:"60%"}}
                type="text"
                value={value}
                onChange={(e)=> setValue(e.target.value)}
                />
                <button onClick={() =>fetchImage}>Search</button>
            </div>
            
        </div>
    )
}

export default API;