
import { Routes,Route } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';

import MultipleQuotes from './Component/MultipleQuotes';
import RandomQuotes from './Component/RandomQuotes';
import AutoQuoteChange from './Component/AutoQuoteChange';

function App() {

  const [quotes,setQuotes] = useState("");



useEffect(()=>{


  async function getAllQuotes(){

  try{
      const response = await fetch('https://dummyjson.com/quotes',{
    method:"GET",
    headers:{
      "Content-Type":"application/json"
    },

   })

   const result = await response.json();
     
   setQuotes(result.quotes);

  }catch(err)
  {
    console.error(err.message);
  }
  }

  getAllQuotes();
},[])


console.log("App me hun")
  return (
    <div className="App">

       
  
        <Routes>
          <Route path='/' element={ quotes.length === 0 ?(<p>Loading..</p>):(<AutoQuoteChange quotes={quotes}/>)}></Route>
          <Route path='/randomQuote' element={ quotes.length === 0 ?(<p>Loading..</p>):(<RandomQuotes quotes={quotes}/>)}></Route>
          <Route path='/multipleQuotes' element={ quotes.length === 0 ?(<p>Loading..</p>):(<MultipleQuotes quotes={quotes}/>)}></Route>
        </Routes>
    </div>
  );
}

export default App;
