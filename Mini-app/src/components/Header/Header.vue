<template>
    <nav class="navbar">
      <span class="logo">TO-DO STATISTICS</span>
      <ul class="nav-links">
        <li class="nav-item">
          <a href="#">Home</a>
        </li>
        <li class="nav-item">
          <a href="#">Log in</a>
        </li>
        <li class="nav-item">
          <a href="#">Register</a>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
  }
  </script>
  
  <style scoped>
  .navbar {
    position: absolute;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    z-index: 10;
    color: rgba(255, 255, 255, 0.973);
  }
  
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 1px;
  }
  
  .nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .nav-item a {
    color: #ffffff;
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: all 0.3s ease;
    position: relative;
  }
  
  .nav-item a:hover {
    background-color: #34495e;
    color: #fff;
  }
  
  .nav-item a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #3498db;
    transition: width 0.3s ease;
  }
  
  .nav-item a:hover::after {
    width: 100%;
  }
  
 
  </style>