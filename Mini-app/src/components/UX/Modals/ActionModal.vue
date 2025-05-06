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
  
  </style>