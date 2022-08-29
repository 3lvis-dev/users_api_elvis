import axios from 'axios';
import React from 'react'

const CardUsers = ({user, getAllUsers, setUpdateInfo}) => {

  // DELETE Method (DELETE)
  const deleteUser = () => {
    const URL = `https://users-crud1.herokuapp.com/users/${user.id}/`

    axios.delete(URL)
      .then(res => {
        console.log(res.data);
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const handleUpdate = () => {
    setUpdateInfo(user)
  }

  return (
    <article className='card'>
      <div className='card__container'>
        <h2 className='card__title'>{user["first_name"]} {user["last_name"]}</h2>
        <ul className='card__list'>
          <li className='card__item'>{user.email}</li>
          <li className='card__item'><i className='bx bx-gift'> {user.birthday}</i></li>
        </ul>
      </div>

      <div className='card__btn'>
        <button onClick={deleteUser} className='card__btn card__btn-delete'><i className='bx bxs-trash-alt' ></i></button>
        <button onClick={handleUpdate} className='card__btn card__btn-update'><i className='bx bxs-pencil'></i></button>
      </div>
    </article>
  )
}

export default CardUsers