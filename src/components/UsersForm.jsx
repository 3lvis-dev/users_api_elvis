import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const defaultValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  birthday: ''
}

const UsersForm = ({getAllUsers, updateInfo, setUpdateInfo}) => {
  const {register, reset, handleSubmit} = useForm()

  // UPDATE Method (PATCH)
  useEffect(() => {  
    if (updateInfo) {
      reset(updateInfo)
    }
  }, [updateInfo])

  // CREATE Method (POST)
  const createUser = (data) => {
    const URL = `https://users-crud1.herokuapp.com/users/`

    axios.post(URL, data)
      .then(res => {
        console.log(res.data);
        getAllUsers()
      })
      .catch(err => console.log(err))
    reset(defaultValues)
  }

  // UPDATE User (PATCH)
  const updateUser = (data) => {
    const URL = `https://users-crud1.herokuapp.com/users/${updateInfo.id}/`

    axios.patch(URL, data)
      .then(res => {
        console.log(res.data);
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const submit = (data) => { 
    if (updateInfo) {
      // UPDATE User (PATCH)
      updateUser(data)
      setUpdateInfo()
    } else {
      // CREATE User (POST)
      createUser(data)
    }
    reset(defaultValues)
  }

  return (
    <form onSubmit={handleSubmit(submit)}>

      <div className='form'>
        <h2 className='form__title'> 
          {updateInfo ? 'Update User' : 'New User' }
        </h2>

        <div className='form__grupo'>
          <i className='bx bxs-user'></i>
          <input {...register("first_name")} type="text" id='name' required /><span className='barra'></span>
          <label htmlFor="name">first name</label>
        </div>
          
        <div className='form__grupo'>
          <i className='bx bxs-user'></i>
          <input {...register("last_name")} type="text" id='lastname' required /><span className='barra'></span>
          <label htmlFor="lastname">last name</label>
        </div>

        <div className='form__grupo'>
          <i className='bx bxs-envelope'></i>
          <input {...register("email")} type="email" id='mail' required /><span className='barra'></span>
          <label htmlFor="mail">email</label>
        </div>

        <div className='form__grupo'>
          <i className='bx bxs-lock-alt'></i>
          <input {...register("password")} type="password" id='pass' required /><span className='barra'></span>
          <label htmlFor="pass">password</label>
        </div>

        <div className='form__grupo'>
          <i className='bx bxs-cake'></i>
          <input {...register("birthday")} type="date" id='birth' required /><span className='barra'></span>
          <label htmlFor="birth"></label>
        </div>

        <button>
          {updateInfo ? 'Update' : 'Create' }
        </button>
      </div>

    </form>
  )
}

export default UsersForm