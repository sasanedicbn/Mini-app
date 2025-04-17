<template>
  <div class="chart-container" :style="{ gridColumn: 'span 6' }">
    <div class="chart-header">
      <h3>Revenue Overview</h3>
      <div class="chart-actions">
        <select class="time-select">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 90 days</option>
        </select>
        <button class="export-btn">
          <i class="fas fa-download"></i>
          Export
        </button>
      </div>
    </div>
    <div class="chart-wrapper">
      <!-- Chart would be rendered here with a library like Chart.js -->
      <div class="chart-placeholder">
        <i class="fas fa-chart-line"></i>
        <p>Revenue chart will be displayed here</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.chart-container {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.chart-header h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
}

.chart-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.time-select {
  padding: 0.5rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  background-color: #f8fafc;
  font-size: 0.875rem;
  color: #4a5568;
}

.export-btn {
  padding: 0.5rem 1rem;
  background-color: #edf2f7;
  border: none;
  border-radius: 6px;
  font-size: 0.875rem;
  color: #4a5568;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s;
}

.export-btn:hover {
  background-color: #e2e8f0;
}

.chart-wrapper {
  height: 300px;
  position: relative;
}

.chart-placeholder {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8fafc;
  border-radius: 6px;
  color: #a0aec0;
}

.chart-placeholder i {
  font-size: 3rem;
  margin-bottom: 1rem;
}

</style>
