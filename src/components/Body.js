import React, { useState, useEffect } from 'react';

function Body() {

    const [hasError, setErrors] = useState(false);
    const [quote, setQuote] = useState({})

    async function fetchData() {
        const res = await fetch('https://api.kanye.rest');
        res
            .json()
            .then(res => setQuote(res.quote))
            .catch(err => setErrors(err));
    }

    useEffect( () => {
        fetchData();
    }, [])

    function refreshPage() {
        window.location.reload(false);
      }

    

    return (
        <body >
            
            <div className = "container h-screen flex flex-col mx-auto px-10 text-center justify-center">
                <div className= " title-font font-extrabold  ml-3 text-2xl ">
                    {JSON.stringify(quote)} <br/>
                    <button onClick = {refreshPage} className="bg-white text-black text-center  mt-10 rounded-md py-2 px-4">
                         YE!
                    </button>
                </div>
            
            
                
            </div>
            
        
            
      
        
      
    </body>
    )
};

export default Body;