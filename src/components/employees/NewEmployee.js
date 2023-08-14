import React from 'react'

const NewEmployee = () => {
  return (
    <div className='employee__new card'>
      <h2>Add new Employee</h2>
      <form>
          <div>
            <label htmlFor='name'>
                  Name
            </label>
            <input id='name' placeholder='new employee'/>
            </div>

          <div>
            <label htmlFor='job'>
                  Job
            </label>
            
            <select id='job'>
              <option>Developer</option>
              <option>Designer</option>
            </select>
            </div>
            
            <div>
              <button type='submit' className='btn btn-primary'>Submit</button>
            </div>
      </form>
    </div>
  )
}

export default NewEmployee