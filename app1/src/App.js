import React from 'react';
import Navbar from "./components/navbar";
import {getGenres} from './services/fakeGenreService';
import {getMovies} from './services/fakeMovieService';


function App() {
    /*const values = [
        {id:1, isActive:false},
        {id:2, isActive:false},
        {id:3, isActive:true},
        {id:4, isActive:true},
    ];

    //const filtered = values.filter(v=>v.isActive);

    const test  =  {
        testMe(){
            setTimeout(()=>console.log('Use of this in Arrow', this));
        }
    }
    test.testMe();

    const combinedValues = [...values,{st:'nowhere',pinCode:388001}];
    //console.log('CombinedValues',combinedValues);

    const spreadObject = {...test, ...{time:new Date()} };
    console.log('Spread object:', spreadObject);
    */
  return (
    <React.Fragment>
        <Navbar/>
    </React.Fragment>
 
  );
}

export default App;
