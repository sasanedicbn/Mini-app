<template>
    <div class="form-container">
        <AuthSideBar/>
      <form class="user-form">
        <h2 class="form-title">User Details</h2>
        
        <div class="form-group">
          <label for="firstname">First Name</label>
          <input 
            type="text" 
            id="firstname" 
            class="form-input" 
            placeholder="Enter your name"
          >
        </div>
        
        <div class="form-group">
          <label for="lastname">Last Name</label>
          <input 
            type="text" 
            id="lastname" 
            class="form-input" 
            placeholder="Enter your last name"
          >
        </div>
        
        <div class="form-group">
          <label for="password">Password</label>
          <input 
            type="password" 
            id="password" 
            class="form-input" 
            placeholder="••••••••"
          >
        </div>
        
        <div class="form-group">
          <label for="phone">Phone</label>
          <input 
            type="tel" 
            id="phone" 
            class="form-input" 
            placeholder="+123 456 7890"
          >
        </div>
      </form>
    </div>
  </template>
  <script setup>
  import AuthSideBar from './AuthSideBar/AuthSideBar.vue'

 </script>
  
  <style scoped>
  .form-container {
    border: 1px solid black;
    max-width: 800px;
    margin: 2rem auto;
    display: grid;
    grid-template-columns: 1fr 1.75fr;
    /* display: flex; */
    /* padding: 1.5rem; */
    font-family: 'Inter', 'Segoe UI', sans-serif;
  }
  
  .user-form {
    background: orange;
    padding: 2.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(0, 0, 0, 0.05);
  }
  
  .form-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 1.75rem;
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: #555;
  }
  
  .form-input {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    font-size: 0.9375rem;
    transition: all 0.25s ease;
    background-color: #fafafa;
  }
  
  .form-input:hover {
    border-color: #c0c0c0;
    background-color: #f5f5f5;
  }
  
  .form-input:focus {
    outline: none;
    border-color: #7c3aed;
    background-color: white;
    box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);
  }
  
  .form-input::placeholder {
    color: #9ca3af;
    opacity: 0.8;
  }
  </style>