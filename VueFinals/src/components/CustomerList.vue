<template>
  <div>
    <h1>Customer List</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.id">
          <td>{{ customer.id }}</td>
          <td>{{ customer.name }}</td>
          <td>{{ customer.address }}</td>
          <td>{{ customer.phone }}</td>
          <td>{{ customer.balance }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const customers = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/customers');
    customers.value = response.data;
  } catch (error) {
    console.error('Error fetching customers:', error);
  }
});
</script>

<style scoped>
.customer-list {
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
  transition: transform 0.3s;
}

th:hover{
  transform: scale(1.1);
}

th {
  background-color: rgb(203, 242, 159);
  text-align: center;
  transition: transform 0.3s;
}

td:hover {
  transform: scale(1.1);
}
</style>

