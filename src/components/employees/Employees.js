import NewEmployee from './NewEmployee'
import Employee from './Employee'
import { useState } from 'react'


const initialData =[
  {id:1,name:'Sara ahmed',job:'designer',active:true},
  {id:2,name:'Ali ahmed',job:'developer',active:false},
  {id:3,name:'Salma mohammed',job:'developer',active:false},
  {id:4,name:'Zaineb Ahmed',job:'designer',active:true}
]


const Employees = () =>{
  const [data , setData] = useState(initialData)
 

  const editName = () => {
        const newData = [...data]
        newData[0].name = 'saat'
        setData(newData)
        
  }
    return(
        <div className="employees">
          <NewEmployee/>
          <button className='btn' onClick={editName}>edit</button>
          <div className='employees_list card'>
          <Employee name={data[0].name} job={data[0].job}/>
          <Employee name={data[1].name} job={data[1].job}/>
          <Employee name={data[2].name} job={data[2].job}/>
          <Employee name={data[3].name} job={data[3].job}>
                <i>{data[3].active ? 'Active' : 'Inactive'}</i>
          </Employee>
          
          
          </div>
        </div>
    )
}


export default Employees