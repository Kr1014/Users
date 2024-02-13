import { useEffect, useState } from 'react'
import './App.css'
import useCrud from './hooks/useCrud'
import FormUser from './components/FormUser'
import CardUser from './components/CardUser'
const urlBase = 'https://users-crud.academlo.tech/'


function App() {

  const [isOpen, setIsOpen] = useState(false)
  const [editUser, setEditUser] = useState()
  const [users, getUsers, addUser, deleteUser, updateUser] = useCrud(urlBase)

  useEffect(() => {
    getUsers('/users')
  }, [])

  const handleOpen = () =>{
    setIsOpen(true)
  }
  
  

  return (
    <>
        <h1 className='user-title'>Users</h1>
        <button onClick={handleOpen} className='buttom-user'>+ New user</button>
        <FormUser
          addUser= {addUser}
          updateUser = {updateUser}
          editUser = {editUser}
          setEditUser={setEditUser}
          isOpen = {isOpen}
          setisOpen = {setIsOpen}
        />
        <div className='container-all-users'>
          {
            users?.map(user => (
              <CardUser
                user = {user}
                key = {user.id}
                deleteUser={deleteUser}
                setEditUser={setEditUser}
                setIsOpen = {setIsOpen}
              />
            ))
          }
        </div>
    </>
  )
}

export default App
