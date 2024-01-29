import logo from './logo.svg';
import './App.css';
import data from './data.js';
import { useState } from 'react';
import Tours from './components/Tours.js';

function App() {

  const [tours,setTours] = useState(data);
  console.log("This is tours inside app component");
  console.log(tours);

  function removeTour(id){
    const  newTours = tours.filter(tour => tour.id !== id); // if id is not matched then we add it to new object otherwise it will not be added.
    setTours(newTours);  
  }

  if(tours.length === 0){
    return(
      <div className='refresh'>
        <h2>No Tours Left</h2>
        <button className='btn-white' onClick={()=>setTours(data)}> Refresh</button>
      </div>
    );
  }

  return (
    <div className='App'>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
