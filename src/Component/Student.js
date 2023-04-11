import React, { useContext } from 'react'
import Nav from './Nav'
import ContextData from './ContextAPI'
import {Link,useNavigate} from 'react-router-dom'

const Student = () => {
    const dataContext=useContext(ContextData);
    console.log(dataContext)
    const navi= useNavigate()
      return (
    <>
      <Nav/>
      <h1 className='stu'>Student</h1>
      <button onClick={()=>{navi('/newstudent')}} className='Add'>Add New Student</button>
      <table className='table'>
        <tr>
            <th>Name</th>
            <th>Month</th>
            <th>Year</th>
            <th>Update</th>
        </tr>
      {dataContext.entries.map((item,index)=>{
        return(
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.month}</td>
                <td>{item.year}</td>
                <td><Link to="/updatestudent">Edit</Link></td>
            </tr>
        )
      })}
      </table>
    </>
  )
}

export default Student
