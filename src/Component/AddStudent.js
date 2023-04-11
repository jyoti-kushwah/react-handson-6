import React,{useContext} from 'react'
import ContextData from './ContextAPI'
import { Navigate, useNavigate } from 'react-router-dom'
import Nav from './Nav'

const AddStudent = () => {
    const data=useContext(ContextData)
    const nav=useNavigate()
    const newStu={
        name:'',
        month:'',
        year:'',
        Batch:'',
    }

    const handleChange=(e)=>{
        newStu[e.target.name]=e.target.value
    }
   
    const handleSubmit=()=>{
      data.entries.push(newStu);
      nav('/student')
      console.log(data)
    }
  
  return (
    <div>
    <Nav/>
    <div className='flex1'>
      <fieldset>
        <legend>Name</legend>
        <input placeholder='Enter Name' className='name' name='name' onChange={handleChange}/>
      </fieldset>
      <fieldset>
        <legend>Month</legend>
        <input placeholder='Enter month' name='month' onChange={handleChange}/>
      </fieldset>
      <fieldset>
        <legend>Year</legend>
        <input placeholder='Enter year' name='year' onChange={handleChange}/>
      </fieldset>
      <fieldset>
        <legend>Batch</legend>
        <input placeholder='Enter Batch' name='batch' onChange={handleChange}/>
      </fieldset>

    </div>
    <div className='flex2'>
      <div>
        <button className='btn1'>Cancel</button>
      </div>
      <div>
        <button className='btn' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
    </div>
  )
}

export default AddStudent
