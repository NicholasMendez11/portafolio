import React from 'react';
import './App.css';
import Check from './components/Check'
import Footer from './components/Footer';
import picture1 from './budgeting.png'
import picture2 from './quotes.png'
import picture3 from './cryptomonedas.png'


function App() {
const cards = [
  {id:1,
   logo: picture1,
   title:'Weekly Budget',
   description:`This is a Weekly budget made to practice some basic React skills`,
   url:`https://elastic-wilson-87ca61.netlify.app/`
  },
  {id:1,
   logo: picture2,
   title:'ithink',
   description:`I Think is a web app, It gives you a philosophical phrase every time you press the get next button. Increase your perspective and open your mind to new horizons`,
   url:`https://lucid-mcclintock-26f153.netlify.app/`
  },
  {id:1,
   logo: picture3,
   title:'Crypto Checker',
   description:`App that quotes the cost of the most important cryptocurrencies to different international currencies.`,
   url:`https://cocky-wescoff-4f7f29.netlify.app/`
  },
]

  return (
    <>
    
    <div className="App">
      
      {cards.map(card=>(
        <Check title={card.title} logo={card.logo} description={card.description} url={card.url} />
         ))}
    
    </div>
    <div className='Footer'>
        {['bottom'].map((placement, idx) => (
        <Footer key={idx} placement={placement} name={placement} />
      ))}
      </div>
    </>
       
       
  );
}

export default App;
