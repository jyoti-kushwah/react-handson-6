import React,{useContext} from 'react'
import ContextData from './ContextAPI'

const AddStudent = () => {
    const data=useContext(ContextData)
    const newStu={
        name:'',
        month:'',
        year:''
    }

    const handleChange=(e)=>{
        newStu[e.target.name]=e.target.value
    }

  
  return (
    <div>
      <button onClick={handleChange}>Cllick</button>
    </div>
  )
}

export default AddStudent
