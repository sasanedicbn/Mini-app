<template>
    <div class="actionModal">
      <TextBlock
        title="New project"
        subTitle="Add new project for working..."
      />
      
      <div class="form-container">
        <div class="form-row">
          <div class="form-group">
            <BaseInput
              id="projectName"
              label="Project Name"
              placeholder="Enter project name"
              v-model="form.name"
              :error="error.name"
            />
          </div>
  
          <div class="form-group">
            <BaseSelect
              id="client"
              label="Client"
              placeholder="Select client"
              v-model="form.client"
              :options="clients"
              :error="error.client"
            />
          </div>
        </div>
  
        <div class="form-row">
          <div class="form-group">
            <BaseSelect
              id="status"
              label="Status"
              placeholder="Select status"
              v-model="form.status"
              :options="statuses"
              :error="error.status"
            />
          </div>
  
          <div class="form-group">
            <BaseDatePicker
              id="dueDate"
              label="Due Date"
              v-model="form.dueDate"
              :error="error.dueDate"
            />
          </div>
        </div>
  
        <div class="form-group progress-group">
          <label>Progress <span class="progress-value">{{ form.progress }}%</span></label>
          <div class="slider-container">
            <input 
              type="range" 
              id="progress" 
              min="0" 
              max="100" 
              v-model="form.progress"
              class="progress-slider"
            >
            <div class="slider-track"></div>
          </div>
        </div>
  
        <div class="action-buttons">
          <button class="cancel-btn">Cancel</button>
          <button class="submit-btn" v-on:click="submitModal">
            <span>Create Project</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import TextBlock from '../TextBlock.vue';
  import BaseInput from '@/components/UX/Reusable/BaseInput.vue';
  import BaseSelect from '@/components/UX/Reusable/BaseSelect.vue';
  import BaseDatePicker from '@/components/UX/Reusable/BaseDatePicker.vue';
  import {statuses} from '@/data/dashboard/dashboardData'
  import {clients} from '@/data/dashboard/dashboardData'
import { useDashboardStore } from '@/store/DashboardStore';
  
const validationRules = {
  name: {
    message: 'Project name is required',
    validate: (val) => val.trim() !== ''
  },
  client: {
    message: 'Client is required',
    validate: (val) => val.trim() !== ''
  },
  status: {
    message: 'Status is required',
    validate: (val) => val.trim() !== ''
  },
  dueDate: {
    message: 'Date is required',
    validate: (val) => val.trim() !== ''
  }
};

const validateInputs = () => {
  let isValid = true;

  for (const key in validationRules) {
    const rule = validationRules[key];
    const value = form.value[key];

    if (!rule.validate(value)) {
      error.value[key] = rule.message;
      isValid = false;
    } else {
      error.value[key] = '';
    }
  }

  return isValid;
};


// const validateInputs = () => {
//     let isValid = true;
   
//     if(!form.value.name.trim()){
//      error.value.name = "Project name is required"
//      isValid = false
//     } else {
//         error.value.name = ''
//     }
//     if(!form.value.client.trim()){
//      error.value.client = "Client is required"
//      isValid = false
//     } else {
//         error.value.client = ''
//     }
//     if(!form.value.status.trim()){
//      error.value.status = "Status is required"
//      isValid = false
//     } else {
//         error.value.status = ''
//     }
//     if(!form.value.dueDate.trim()){
//      error.value.dueDate = "Date is required"
//      isValid = false
//     } else {
//         error.value.dueDate = ''
//     }

// return isValid;
// }
  const store = useDashboardStore()
  const form = ref({
    name: '',
    client: '',
    status: '',
    dueDate: '',
    progress: 0
  });

  const error = ref({
    name: '',
    client: '',
    status: '',
    dueDate: '',
  })

  const submitModal = () => {
    if(!validateInputs()) return 
    store.addNewProject(form.value)
    console.log('Svi projekti:', store.recentProjects);
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 24px;
}

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