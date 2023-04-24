import { useEffect,useState } from "react";



function Name() { 
  const encodedParams = new URLSearchParams();
    encodedParams.append("q", "Привет");
    encodedParams.append("target", "en");
    encodedParams.append("source", "ru");
    
    const options = { 
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Key': 'abd65306e4mshb75b13f05a3c296p1cf786jsn14b19d1653ac',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
      },
      body: encodedParams
    };
    
    fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  
 
  useEffect(()=>{

   })
    return (
      <>
       </>  
  
      
    )
  }
  export default Name;