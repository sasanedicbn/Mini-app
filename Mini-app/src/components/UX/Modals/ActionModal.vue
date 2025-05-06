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
            <div class="select-wrapper">
              <select id="client" class="form-input">
                <option value="">Select client</option>
                <option value="client1">Client A</option>
                <option value="client2">Client B</option>
                <option value="client3">Client C</option>
              </select>
            </div>
          </div>
        </div>
        
        <div class="form-row">
          <div class="form-group">
            <label for="status">Status</label>
            <div class="select-wrapper">
              <select id="status" class="form-input">
                <option value="">Select status</option>
                <option value="not-started">Not Started</option>
                <option value="in-progress">In Progress</option>
                <option value="on-hold">On Hold</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
          
          <div class="form-group">
            <label for="dueDate">Due Date</label>
            <div class="date-input-wrapper">
              <input 
                type="date" 
                id="dueDate" 
                class="form-input"
              >
            </div>
          </div>
        </div>
        
        <div class="form-group progress-group">
          <label>Progress <span class="progress-value">0%</span></label>
          <div class="slider-container">
            <input 
              type="range" 
              id="progress" 
              min="0" 
              max="100" 
              value="0"
              class="progress-slider"
            >
            <div class="slider-track"></div>
          </div>
        </div>
        
        <div class="action-buttons">
          <button class="cancel-btn">Cancel</button>
          <button class="submit-btn">
            <span>Create Project</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
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
    border-radius: 16px;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
    padding: 32px;
    max-width: 640px;
    margin: 0 auto;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  }
  
  .form-container {
    margin-top: 24px;
  }
  
  .form-row {
    display: flex;
    gap: 24px;
    margin-bottom: 24px;
  }
  
  .form-group {
    flex: 1;
    margin-bottom: 20px;
    position: relative;
  }
  
  label {
    display: block;
    margin-bottom: 10px;
    font-weight: 500;
    color: #1a1a1a;
    font-size: 15px;
    letter-spacing: -0.01em;
  }
  
  .form-input {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    font-size: 15px;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    background: #fcfcfc;
    color: #333;
    height: 48px;
    box-sizing: border-box;
  }
  
  .form-input::placeholder {
    color: #999;
    opacity: 1;
  }
  
  .form-input:focus {
    outline: none;
    border-color: #3a7bc8;
    background: white;
    box-shadow: 0 0 0 3px rgba(58, 123, 200, 0.12);
  }
  
  /* Improved select dropdown */
  .select-wrapper {
    position: relative;
  }
  
  .select-wrapper::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23666666' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    pointer-events: none;
  }
  
  /* Custom date input */
  .date-input-wrapper::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }
  
  .date-input-wrapper::-webkit-calendar-picker-indicator {
    opacity: 0;
    position: absolute;
    right: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  
  /* Progress slider */
  .progress-group {
    margin-top: 32px;
  }
  
  .progress-value {
    float: right;
    color: #666;
    font-weight: 500;
    font-feature-settings: 'tnum';
    font-variant-numeric: tabular-nums;
  }
  
  .slider-container {
    position: relative;
    height: 24px;
    display: flex;
    align-items: center;
  }
  
  .slider-track {
    position: absolute;
    height: 4px;
    width: 100%;
    background: #e0e0e0;
    border-radius: 2px;
    z-index: 1;
  }
  
  .progress-slider {
    position: relative;
    width: 100%;
    height: 0;
    -webkit-appearance: none;
    background: transparent;
    z-index: 2;
  }
  
  .progress-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: white;
    border: 5px solid #3a7bc8;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  
  .progress-slider::-webkit-slider-thumb:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  .progress-slider::-webkit-slider-runnable-track {
    height: 4px;
    background: transparent;
  }
  
  /* Action buttons */
  .action-buttons {
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    margin-top: 40px;
  }
  
  .cancel-btn {
    padding: 12px 24px;
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    color: #666;
    font-weight: 500;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .cancel-btn:hover {
    background: #f5f5f5;
    border-color: #ccc;
  }
  
  .submit-btn {
    padding: 12px 24px;
    background: linear-gradient(135deg, #3a7bc8 0%, #4a90e2 100%);
    border: none;
    border-radius: 10px;
    color: white;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 2px 6px rgba(58, 123, 200, 0.2);
  }
  
  .submit-btn:hover {
    background: linear-gradient(135deg, #336eb3 0%, #4281cc 100%);
    box-shadow: 0 4px 12px rgba(58, 123, 200, 0.3);
    transform: translateY(-1px);
  }
  
  .submit-btn:active {
    transform: translateY(0);
  }
  
  .submit-btn svg {
    transition: transform 0.3s ease;
  }
  
  .submit-btn:hover svg {
    transform: translateX(2px);
  }
  </style>