// src/LoginPage.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import MenuIcon from '@mui/icons-material/Menu'; // Add this import
import { Toolbar, Typography, IconButton } from '@mui/material';


const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle login logic (e.g., API call)
  };

  return (
    <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          
          </IconButton>
          <ChildCareIcon sx={{ color: '#FFFFFF', fontSize: 40, mr: 1 }} />
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ flexGrow: 1, color: '#FFFFFF', fontWeight: 'bold',width:40 }}
          >
            BusyBees
          </Typography>
        </Toolbar>
      </div>

      {/* Login Form */}
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
