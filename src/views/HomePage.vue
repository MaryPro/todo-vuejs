<script setup lang="ts"></script>

<template>
  <div class="container">
    <h1>Welcome to Task Manager App!</h1>
    <button class="btn-tasks" @click="$router.push('/tasks')">
      See tasks list
    </button>
  </div>
</template>

<style scoped>
.container {
  background-color: #dbdfea;
  margin: 20px;
  width: 800px;
  min-height: 500px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  margin: 50px;
}

.btn-tasks {
  width: 200px;
  height: 50px;
  font-size: 20px;
  border-radius: 5px;
  background-color: #acb1d6;
  cursor: pointer;
  margin: 30px;
}
</style>
