<template>
  <div class="data-table-container" :style="{ gridColumn: 'span 12' }">
    <div class="table-header">
      <h3>Recent Projects</h3>
      <div class="table-actions">
        <button class="add-btn">
          <i class="fas fa-plus"></i>
          Add Project
        </button>
        <div class="table-search">
          <i class="fas fa-search"></i>
          <input type="text" placeholder="Search projects..." />
        </div>
      </div>
    </div>
    <div class="table-wrapper">
      <table class="data-table">
        <thead>
          <tr>
            <th v-for="column in columns" :key="column.key">
              <div class="table-header-cell">
                {{ column.label }}
                <i v-if="column.sortable" class="fas fa-sort"></i>
              </div>
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.id">
            <td>
              <div class="project-info">
                <div
                  class="project-color"
                  :style="{ backgroundColor: item.color }"
                ></div>
                {{ item.name }}
              </div>
            </td>
            <td>{{ item.client }}</td>
            <td>
              <span class="status-badge" :class="item.status.toLowerCase()">
                {{ item.status }}
              </span>
            </td>
            <td>{{ item.dueDate }}</td>
            <td>
              <div class="progress-bar">
                <div
                  class="progress-fill"
                  :style="{ width: item.progress + '%' }"
                ></div>
                <span class="progress-text">{{ item.progress }}%</span>
              </div>
            </td>
            <td>
              <div class="table-actions-cell">
                <button class="action-btn">
                  <i class="fas fa-ellipsis-v"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="table-footer">
      <div class="table-pagination">
        <button class="pagination-btn" disabled>
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="pagination-btn active">1</button>
        <button class="pagination-btn">2</button>
        <button class="pagination-btn">3</button>
        <button class="pagination-btn">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const columns = [
  { key: "name", label: "Project Name", sortable: true },
  { key: "client", label: "Client", sortable: true },
  { key: "status", label: "Status", sortable: true },
  { key: "dueDate", label: "Due Date", sortable: true },
  { key: "progress", label: "Progress", sortable: true },
];

const data = [
  {
    id: 1,
    name: "Website Redesign",
    client: "Acme Inc.",
    status: "Active",
    dueDate: "Jun 15, 2023",
    progress: 75,
    color: "#4299e1",
  },
  {
    id: 2,
    name: "Mobile App Development",
    client: "Tech Solutions",
    status: "On Hold",
    dueDate: "Jul 1, 2023",
    progress: 30,
    color: "#9f7aea",
  },
  {
    id: 3,
    name: "Marketing Campaign",
    client: "Global Brands",
    status: "Completed",
    dueDate: "May 20, 2023",
    progress: 100,
    color: "#f56565",
  },
  {
    id: 4,
    name: "E-commerce Platform",
    client: "ShopEasy",
    status: "Active",
    dueDate: "Aug 10, 2023",
    progress: 45,
    color: "#48bb78",
  },
  {
    id: 5,
    name: "CRM System",
    client: "Business Tools",
    status: "Active",
    dueDate: "Jul 25, 2023",
    progress: 60,
    color: "#ed8936",
  },
];
</script>

<style scoped>
.data-table-container {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.table-header h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
}

.table-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.add-btn {
  padding: 0.5rem 1rem;
  background-color: #4299e1;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s;
}

.add-btn:hover {
  background-color: #3182ce;
}

.table-search {
  position: relative;
  display: flex;
  align-items: center;
}

.table-search i {
  position: absolute;
  left: 12px;
  color: #a0aec0;
}

.table-search input {
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  background-color: #f8fafc;
  width: 200px;
  font-size: 0.875rem;
}

.table-search input:focus {
  outline: none;
  border-color: #4299e1;
  background-color: #ffffff;
}

.table-wrapper {
  overflow-x: auto;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th {
  text-align: left;
  padding: 0.75rem 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: #718096;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background-color: #f8fafc;
}

.data-table td {
  padding: 1rem;
  font-size: 0.875rem;
  color: #4a5568;
  border-bottom: 1px solid #edf2f7;
}

.table-header-cell {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.table-header-cell i {
  color: #cbd5e0;
  cursor: pointer;
}

.project-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.project-color {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.status-badge {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

.status-badge.active {
  background-color: #ebf8ff;
  color: #3182ce;
}

.status-badge.completed {
  background-color: #f0fff4;
  color: #38a169;
}

.status-badge.on-hold {
  background-color: #fffaf0;
  color: #dd6b20;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background-color: #edf2f7;
  border-radius: 4px;
  position: relative;
}

.progress-fill {
  height: 100%;
  border-radius: 4px;
  background-color: #4299e1;
}

.progress-text {
  position: absolute;
  right: 0;
  top: -20px;
  font-size: 0.75rem;
  color: #718096;
}

.table-actions-cell {
  display: flex;
  justify-content: flex-end;
}

.action-btn {
  background: none;
  border: none;
  color: #a0aec0;
  cursor: pointer;
  padding: 0.25rem;
}

.action-btn:hover {
  color: #718096;
}

.table-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
}

.table-pagination {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.pagination-btn {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e2e8f0;
  background-color: #ffffff;
  border-radius: 6px;
  color: #4a5568;
  cursor: pointer;
  font-size: 0.875rem;
}

.pagination-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-btn.active {
  background-color: #4299e1;
  border-color: #4299e1;
  color: white;
}

.pagination-btn:hover:not(:disabled, .active) {
  background-color: #f8fafc;
}
</style>
