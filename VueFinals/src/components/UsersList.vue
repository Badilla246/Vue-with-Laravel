<template>
    <div>
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Email Verified</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.email_verified_at }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const users = ref([]);
  
  onMounted(async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/users');
      users.value = response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  });

  </script>
  
  <style scoped>
  .merchandise-list {
    margin: 20px;
  }
  
  h1 {
    color: #333;
    text-align: center;
    font-family: Georgia, 'Times New Roman', Times, serif;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
    background-color: rgb(121, 149, 160);
    transition: background-color 0.3s, transform 0.3s;
  }
  
  th:hover, td:hover {
    background-color: rgb(92, 129, 142);
    transform: scale(1.1);
  }
  
  th {
    background-color: rgb(203, 242, 159);
    text-align: center;
    transition: background-color 0.3s, transform 0.3s;
  }
  
  th:hover {
    background-color: rgb(164, 212, 134);
    transform: scale(1.1);
  }
  </style>
  