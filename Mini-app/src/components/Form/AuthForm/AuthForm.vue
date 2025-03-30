<template>
    <div class="main-container">
    <div class="form-container">
     <AuthSideBar/>
      <form class="user-form">
        <span class="current-action">Step 1/3</span>
        <h2 class="form-title">User Details</h2>
        <div class="name-group">
          <div class="form-group name-input">
            <label for="firstname">First Name</label>
            <input 
              type="text" 
              id="firstname" 
              class="form-input" 
              placeholder=" Enter your name"
            >
          </div>
          
          <div class="form-group name-input">
            <label for="lastname">Last Name</label>
            <input 
              type="text" 
              id="lastname" 
              class="form-input" 
              placeholder=" Enter your last name"
            >
          </div>
        </div>
        
        <div class="form-group">
          <label for="password">Password</label>
          <div class="password-wrapper">
            <input 
              type="password" 
              id="password" 
              class="form-input" 
              placeholder=" ••••••••"
            >
          </div>
        </div>
        
        <div class="form-group">
          <label for="phone">Phone</label>
          <input 
            type="tel" 
            id="phone" 
            class="form-input" 
            placeholder=" +123 456 7890"
          >
        </div>

        <button type="submit" class="submit-btn">Next step</button>
      </form>
    </div>
    </div>
</template>

<script setup>
import AuthSideBar from '../AuthSideBar/AuthSideBar.vue'
</script>

<style scoped>
.main-container{
  width: 100%;
  height: 100vh;
  background-color: #0B192E;
  display: flex;
  align-items: center;
}
.form-container {
    margin:0 auto;
    margin-top: 10rem;
    margin-bottom: 6rem;
    max-width: 900px;
    display: grid;
    grid-template-columns: 280px 1fr;
    font-family: 'Inter', 'Segoe UI', sans-serif;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
    background: white;
    height: 550px;
    /* min-height: 600px; */
    /* min-height: 400px;
    max-height:800px; */
}

.user-form {
    padding:  1.4rem 6rem;
    display: flex;
    flex-direction: column;
}

.form-title {
    font-size: 1.75rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 2rem;
    position: relative;
}

.form-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 3px;
    background: #4a6bff;
    border-radius: 3px;
}

.name-group {
    display: flex;
    gap: 1rem;
}

.name-input {
    flex: 1;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    font-size: 0.9rem;
    font-weight: 500;
    color: #4a5568;
    margin-bottom: 0.5rem;
}

.form-input {
    width: 100%;
    padding: 0.75rem 0rem;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    background-color: #f8fafc;
}

.form-input:focus {
    outline: none;
    border-color: #4a6bff;
    box-shadow: 0 0 0 3px rgba(74, 107, 255, 0.2);
    background-color: white;
}

.form-input::placeholder {
    color: #a0aec0;
}

.password-wrapper {
    position: relative;
}

.submit-btn {
    margin-top: 1rem;
    background: #4a6bff;
    color: white;
    border: none;
    padding: 0.85rem 1.5rem;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    align-self: flex-start;
}

.submit-btn:hover {
    background: #3a5bef;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(74, 107, 255, 0.3);
}

.submit-btn:active {
    transform: translateY(0);
}
.current-action{
    text-align: left;
    margin-bottom: 4px;
}
.current-action{
    color: grey;
}
</style>