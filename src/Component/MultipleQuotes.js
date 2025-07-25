import React from 'react'

import "./MultiQ.css"

import { useNavigate } from 'react-router-dom';

export default function MultipleQuotes(props) {

    const navigate = useNavigate();

    let quotes = props.quotes;
  return (
     <div className='main_body'>
         
           <div  style={{ marginBottom: '20px' } }>
    <button onClick={() => navigate('/randomQuote')} >Random Quote</button>
     <button onClick={() => navigate('/')}>Home</button>
    <button onClick={() => navigate(-1)} className='bbtn'>Go Back</button>
  </div>
        <div className='container_card'>
            {
                quotes.map((card)=>
                (
                 <div key={card.id} className='quotes_container_card'>
                    <div className='quote_card'>"{card.quote}"</div>
                    <div className='quote_Author_card'> by:{card.author}</div>
                    </div>
                ))
            }
        </div>

        
    </div>
  )
}
