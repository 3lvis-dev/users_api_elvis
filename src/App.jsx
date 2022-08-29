import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardUsers from './components/CardUsers'
import UsersForm from './components/UsersForm'

function App() {
  const [users, setUsers] = useState()
  const [updateInfo, setUpdateInfo] = useState()

  // READ Method (GET)
  const getAllUsers = () => {
    const URL = `https://users-crud1.herokuapp.com/users/`

    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err.response.data))
  }

  useEffect(() => {
    getAllUsers()
  }, [])
  
  return (
    <div className="App">
      <div className='form__container'>
        <UsersForm 
          getAllUsers={getAllUsers} 
          updateInfo={updateInfo}
          setUpdateInfo={setUpdateInfo}
        /> 
      </div>
      <div className='container'>
        {
          users?.map((user) => (
            <CardUsers 
              key={user.id}
              user={user}
              getAllUsers={getAllUsers}
              setUpdateInfo={setUpdateInfo}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
