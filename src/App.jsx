import React, { useState, useEffect } from 'react'
import axios from 'axios';

const App = () => {

    const [quote, setquote] = useState("");
    const [author, setauthor] = useState("");

   const getquotes = async ()=>{

            const api = await axios.get("https://type.fit/api/quotes");
             let reldata = await api.data;
             let randomQoute = Math.floor(Math.random() * 1640);           
             setquote(reldata[randomQoute].text);
             setauthor(reldata[randomQoute].author);          
          }
            
    // useEffects concept
    useEffect(() => {    
       getquotes();
    }, [])


    return (
        <>
        
        <div className="container">

        <div  className="custom-shape-divider-bottom-1636392902">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
       </div>
       
       <div id="quote" className="quotes">{quote}</div>
       
       <div id="author" className="author">{author}</div>
   
       <button id="btn" className="btn" onClick={getquotes}> New Quote</button>
       
       </div>

        </>
    )
}
export default App;
