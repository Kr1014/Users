import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form'
import { IoCloseCircleOutline } from "react-icons/io5";
import './styles/Form.css'


const FormUser = ({addUser, editUser, setEditUser, updateUser, isOpen, setisOpen}) => {

    const {handleSubmit, register, reset } = useForm()

    useEffect(() => {
     
        reset(editUser)

    }, [editUser])
    

    const submit = (data) =>{
        if(editUser){
            updateUser('/users', editUser.id, data)
            setEditUser()
        }
        else{
            addUser('/users', data)
        }
        reset({
                email: '',
                password: '',
                first_name: '',
                last_name: '',
                birthday: ''
             }
            )
            setisOpen(false)
        }

        const handleClose = () =>{
            setisOpen(!isOpen)
        }

  return (
 
        <article className={`form-background ${isOpen&&'able'}`}>
                <form action="" onSubmit={handleSubmit(submit)} className='form-container'>
                    <div className='close' onClick={handleClose}><IoCloseCircleOutline/></div>
                    <h2 className='user-new'>Nuevo Usuario</h2>
                        <div className='container-input'>
                            <label htmlFor="email">Email</label><br />
                            <input {...register('email')} id='email' type="email" />
                        </div>
                        <div className='container-input'>
                            <label htmlFor="password">Password</label><br />
                            <input {...register('password')} id='password' type="password" />
                        </div>
                        <div className='container-input'>
                            <label htmlFor="first_name">First name</label><br />
                            <input {...register('first_name')} id='first_name' type="text" />
                        </div>
                        <div className='container-input'>
                            <label htmlFor="last_name">Last name</label><br />
                            <input {...register('last_name')} id='last_name' type="text" />
                        </div>
                        <div className='container-input '>
                            <label htmlFor="birthday">Birthday</label> <br />
                            <input {...register('birthday')} id='birthday' type="date" className='cumple'/>
                        </div>
                        <button className='add/edit-user'>Submit</button>
                </form>
        </article>

  )
}

export default FormUser