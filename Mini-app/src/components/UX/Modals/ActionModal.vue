<template>
    <div class="actionModal">
      <TextBlock
        title="New project"
        subTitle="Add new project for working..."
      />
      
      <div class="form-container">
        <div class="form-row">
          <div class="form-group">
            <label for="projectName">Project Name</label>
            <input 
              type="text" 
              id="projectName" 
              placeholder="Enter project name"
              class="form-input"
            >
          </div>
          
          <div class="form-group">
            <label for="client">Client</label>
            <input 
              type="text" 
              id="client" 
              placeholder="Select client"
              class="form-input"
            >
          </div>
        </div>
        
        <div class="form-row">
          <div class="form-group">
            <label for="status">Status</label>
            <select id="status" class="form-input">
              <option value="">Select status</option>
              <option value="not-started">Not Started</option>
              <option value="in-progress">In Progress</option>
              <option value="on-hold">On Hold</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          
          <div class="form-group">
            <label for="dueDate">Due Date</label>
            <input 
              type="date" 
              id="dueDate" 
              class="form-input"
            >
          </div>
        </div>
        
        <div class="form-group">
          <label for="progress">Progress <span class="progress-value">0%</span></label>
          <input 
            type="range" 
            id="progress" 
            min="0" 
            max="100" 
            value="0"
            class="progress-slider"
          >
        </div>
        
        <div class="action-buttons">
          <button class="cancel-btn">Cancel</button>
          <button class="submit-btn">Create Project</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import TextBlock from '../TextBlock.vue';
  
  export default {
    components: {
      TextBlock
    }
  }
  </script>
  
  <style scoped>
  .actionModal {
    background: white;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    padding: 24px;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .form-container {
    margin-top: 20px;
  }
  
  .form-row {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
  }
  
  .form-group {
    flex: 1;
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: #333;
    font-size: 14px;
  }
  
  .form-input {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 14px;
    transition: border-color 0.3s;
  }
  
  .form-input:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
  }
  
  select.form-input {
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 16px;
  }
  
  .progress-slider {
    width: 100%;
    height: 6px;
    border-radius: 3px;
    background: #e9ecef;
    -webkit-appearance: none;
    margin-top: 10px;
  }
  
  .progress-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #4a90e2;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .progress-value {
    float: right;
    color: #666;
    font-weight: normal;
  }
  
  .action-buttons {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    margin-top: 30px;
  }
  
  .cancel-btn {
    padding: 10px 20px;
    background: white;
    border: 1px solid #ddd;
    border-radius: 6px;
    color: #666;
    cursor: pointer;
    transition: all 0.3s;
  }
  
  .cancel-btn:hover {
    background: #f8f9fa;
  }
  
  .submit-btn {
    padding: 10px 20px;
    background: #4a90e2;
    border: none;
    border-radius: 6px;
    color: white;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .submit-btn:hover {
    background: #3a7bc8;
  }
  </style>