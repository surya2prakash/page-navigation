import React from 'react'

import { useState } from 'react';

import "./RandomQ.css"
import { useNavigate } from 'react-router-dom';
export default function RandomQuotes(props) {


    const navigate = useNavigate();

     let quotes = props.quotes;

     
      
   const getrandom=()=>{
      return quotes[Math.floor(Math.random()*quotes.length)]
   }

   const[currentQuote,setRandomQuote] = useState(getrandom());

   function clickHandler(e){
    e.preventDefault();

    setRandomQuote(getrandom());

   }
  return (
    <div className='main'>
        <div  className='btngroup' >
    <button onClick={() => navigate('/multipleQuotes')}className='multibtn'>Multiple Quotes</button>
     <button onClick={() => navigate('/')}className='bbtn'>Home</button>
    <button onClick={() => navigate(-1)}className='bbtn'>Go Back</button>
  </div>
         <div className='quote_container'>
               <div className='quote'>
                "{
                   currentQuote.quote
                }"
               </div>
               <div className='author'>by:
                    {
                        currentQuote.author
                    }
               </div>
         </div>
         <button onClick={clickHandler}>Random Click</button>
    </div>
  )
}
