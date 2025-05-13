<template>
     <div class="pagination">
        <button class="pagination-btn" disabled>
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="pagination-btn" v-for="paginationBtn of paginationBtns"
         :class="{active: paginationBtn === currentPagination}" 
         @click="currentPagination = paginationBtn"
         >{{ paginationBtn }}</button>
        <button class="pagination-btn">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
</template>

<script setup>

const props = defineProps({
    paginationBtns: Array,
    currentPagination: Number,
})
const {paginationBtns, currentPagination} = props
</script>

<style scoped>
.pagination {
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