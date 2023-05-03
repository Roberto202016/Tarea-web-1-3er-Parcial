import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { users } from '../resources/Users.ts';
import { Button, TextField } from '@mui/material';

function UsersDetailsScreen() {

  const { id } = useParams();
  const user = users.find(user => user.id.toString() == id ) 

  if(!user){
    return(
        <div className="container">
        <h1>User not found </h1>
        </div>
    )
  }

  const {name,role,address,salary} = user;

  return (
    <div className="userDetails">
      <h1>User Details</h1>
      <div className='userDetails_container'>
        <div className='userDetails_container_name'>
          <h5>Username: {name}</h5>
          <TextField label="Change username" variant="standard" color="secondary" focused />
        </div>
        <div className='userDetails_container_role'>
          <h5>Role: {role}</h5>
          <TextField label="Change role" variant="standard" color="secondary" focused />
        </div>
        <div className='userDetails_container_address'>
          <h5>Address: {address}</h5>
          <TextField label="Change address" variant="standard" color="secondary" focused />
        </div>
        <div className='userDetails_container_salary'>
          <h5>Salary: {salary}</h5>
          <TextField label="Change salary" variant="standard" color="secondary" focused />
        </div>
        <Button variant="contained">Guardar</Button>
        <NavLink to={'/users'} >Cancelar</NavLink>
      </div>
    </div>
  );
}

export default UsersDetailsScreen;