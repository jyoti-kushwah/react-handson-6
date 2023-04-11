import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ContextData from './ContextAPI'
import Nav from './Nav'

const UpdateStudents = () => {
    const dataContext =useContext(ContextData)
    const index=useLocation().state.data;
    const navi=useNavigate()
    console.log(index)
    console.log(dataContext)

    const updateData={
        name:dataContext.entries[index].name,
        month:dataContext.entries[index].month,
        year:dataContext.entries[index].year,
    }

    const handleChange=(e)=>{
      updateData[e.target.name]=e.target.value
    }

    const handleSubmit=()=>{
      dataContext.entries[index]=updateData;
      //navigate(-1)
      navi('./student')
      console.log(dataContext)
    }
  return (
    <div> 
      <Nav/>
      <div className='flex'>
        <fieldset>
        <legend>Name</legend>
        <input placeholder={dataContext
        .entries[index].name} name='name' onChange={handleChange}/>
        </fieldset>
        <fieldset>
        <legend>Month</legend>
        <input placeholder={dataContext
        .entries[index].month} name='month' onChange={handleChange}/>
        </fieldset>
        <fieldset>
        <legend>Year</legend>
        <input placeholder={dataContext
        .entries[index].year} name='year' onChange={handleChange}/>
        </fieldset>
      </div>
      <div className='flex2'>
        <div>
          <button className='btn1'>Cancel</button>
          <div>
            <button className='btn1' onClick={handleSubmit}>Upadate</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateStudents
