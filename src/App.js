import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Student from './Component/Student'
import Contact from './Component/Contact';
import { useState } from 'react';
import ContextData from './Component/ContextAPI';
import AddStudent from './Component/AddStudent'
import UpdateStudents from './Component/UpdateStudents'


function App() {
  const [data, setData] = useState([
    {name: "Anamika", month: "Jan", Age:'23',Course:'Mern', year: 2023},
    {name: "Jyoti", month: "Feb", Age:'23',Course:'Mern',year: 2023},
    {name: "Ashish", month: "Dec", Age:'20',Course:'Mern', year: 2022},
    {name: "Harshit", month: "Mar", Age:'24',Course:'Mern', year: 2023},
  ])
  return (
    
    <div className='App'>
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/student' element={
            <ContextData.Provider value={{entries: data, updateData: setData}}>
              <Student />
            </ContextData.Provider>
          }/>
          <Route path='/newstudent' element={
            <ContextData.Provider value={{entries: data, updateData: setData}}>
            <AddStudent />
          </ContextData.Provider>
          }/>
          <Route path='/updatetudents' element={
            <ContextData.Provider value={{entries: data, updateData: setData}}>
            <UpdateStudents />
          </ContextData.Provider>
          }/>
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
