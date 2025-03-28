<template>
    <div class="hero-section">
      <div class="hero-content">
        <h4 class="subtitle">TO-DO STATISTICS</h4>
        <h1 class="title">Reduce your working time<br>and boost efficiency</h1>
        <p class="description">
          Our to-do statistics app helps you track, analyze and optimize your workflow. 
          Gain insights into your productivity patterns and achieve more in less time.
        </p> 
        <button class="cta-button">Get started</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  }
  </script>
  
  <style scoped>
  .hero-section {
    background-color: #0B192E;
    color: #FFFFFF;
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 0 5%;
    position: relative;
    overflow: hidden;
  }
  
  .hero-section::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 200%;
    background: radial-gradient(circle, rgba(11, 217, 182, 0.15) 0%, rgba(11, 25, 46, 0) 70%);
    z-index: 0;
  }
  
  .hero-content {
    max-width: 600px;
    position: relative;
    z-index: 1;
  }
  
  .subtitle {
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #0BD9B6;
    margin-bottom: 1.5rem;
  }
  
  .title {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    background: linear-gradient(90deg, #FFFFFF 0%, #E0E0E0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .description {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #B8C2CC;
    margin-bottom: 2.5rem;
    max-width: 500px;
  }
  
  .cta-button {
    background: linear-gradient(135deg, #0BD9B6 0%, #00A3FF 100%);
    color: #0B192E;
    border: none;
    padding: 15px 40px;
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(11, 217, 182, 0.3);
  }
  
  .cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 7px 20px rgba(11, 217, 182, 0.4);
  }
  
  </style>