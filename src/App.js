import React, { useRef, useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import './bootstrap.css';
import { useTodo } from './Views/Context';
import {BrowserRouter, Switch, Route, useHistory} from 'react-router-dom';
import { useEffect } from 'react';
import { Hello } from './Views/Hello';





const App = () => {
  let { t, bible, books } = useTodo();
  const [bibId, setbibId] = useState(0);
  const [verseId, setverseId] = useState(0)
  let ref=useRef();
  let history=useHistory(); 
  

  const oute=()=> {
   console.log(history);
  // history.push('/hello')
  }
  function handleBook(params){
    console.log(params.target.value);
    for (let i = 0; i < books.length; i++) {
      if (books[i]==params.target.value) {
         console.log(i);
         setbibId(i);
      }
      
    }
  }
  function handleChapter(params){
    console.log(params);
    for (let i = 0; i < bible[bibId].chapter.length; i++) {
      if (bible[bibId].chapter[i].chap==params.target.value) {
         console.log(i);
         setverseId(ref.current.value-1);
         console.log(ref.current.value);
      }
      
    }
  }
  console.log(books)
  return (
    <main className="row">
      <main className="col-sm">
    <BrowserRouter>
    <Switch>
    <Route exact path="/hello" component={Hello} />
    </Switch>
    </BrowserRouter>
    <div className="header bg-danger d-flex align-items-center justify-content-between">
    <select className="book"  onChange={handleBook}>
     {
       books.map((max,i)=>{
         return <option  value={max} key={i}>{max}</option>
       })
     }
    </select>

    <select className='verse' ref={ref} onChange={handleChapter}>
    {
       bible[bibId].chapter.map((max,i)=>{
         return <option value={max.chap} key={i}>{max.chap}</option>
       })
     }
    </select>
    <div className="holdit">
    <input type="text" placeholder="SEARCH BIBLE BOOK" className="form-group search" />
    <button className="btn btn-warning" onClick={oute}>SEARCH</button>
    </div>
    </div>
    <div className="body">
    {
       bible[bibId].chapter[verseId].verse.map((max,i)=>{
         return <div className="bible"  value={max.chap} key={i}>{verseId+1}:{i+1} {max}</div>
       })

     } 
    </div>
    </main>
   </main>
  )
}

export default App
