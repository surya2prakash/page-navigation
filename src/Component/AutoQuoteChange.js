import React, {  useEffect, useState } from 'react';
import "./RandomQ.css";

import { useNavigate } from 'react-router-dom';

export default function AutoQuoteChange({ quotes }) {
  const [currentQuote, setCurrentQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

    
        
  useEffect(()=>{

          let getQuote = ()=>{
        if(!quotes || quotes.length === 0){
            setIsLoading(true);
        
        }
           let random =quotes[Math.floor(Math.random()*quotes.length)];
        return random;
      }
           setCurrentQuote(getQuote());
           setIsLoading(false);

            setInterval(()=>{
                
                setCurrentQuote(getQuote());
            },5000)
       },[quotes])
  return (
    <div className="main">
        <div className='btngroup'>
            <button onClick={() => navigate('/multipleQuotes')} className='multibtn'>Multiple Quotes</button>
    <button onClick={() => navigate('/randomQuote')} className='rdbtn'>Random Quote</button>
    
  </div>
      <div className="quote_container">
        {isLoading ? (
          <div className="loading">Loading quotes...</div>
        ) : currentQuote ? (
          <>
            <div className="quote">"{currentQuote.quote}"</div>
            <div className="author">by: {currentQuote.author}</div>
          </>
        ) : (
          <div className="loading">No quotes available</div>
        )}
      </div>
    </div>
  );
}