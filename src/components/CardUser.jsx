import React from 'react'
import './styles/Card.css'

const CardUser = ({user, deleteUser, setEditUser, setIsOpen}) => {

    const handleDelete = () =>{
        deleteUser('/users', user.id )
    }

    const handleEdit = () =>{
        setEditUser(user)
        setIsOpen(true)
    }

  return (
    <article className='container-card-user'>   
        <h1 className='title-name'>{user.first_name} <span></span> {user.last_name}</h1>
        <ul className='list-data'>
            <li className='list-correo'>Correo: <span></span><span>{user.email}</span></li>
            <li className='list-cumple'>Cumpleaños: <span></span><span>{user.birthday}</span></li>
        </ul>
        <button onClick={handleDelete} className='buttom-delete'>Eliminar</button>
        <button onClick={handleEdit} className='buttom-edit'>Editar</button>
    </article>
  )
}

export default CardUser