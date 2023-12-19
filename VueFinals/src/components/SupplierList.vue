<template>
  <div>
    <h1>Supplier List</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Company Name</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Contact Person</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="supplier in suppliers" :key="supplier.id">
          <td>{{ supplier.id }}</td>
          <td>{{ supplier.company_name }}</td>
          <td>{{ supplier.address }}</td>
          <td>{{ supplier.phone }}</td>
          <td>{{ supplier.contact_person }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const suppliers = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/suppliers');
    suppliers.value = response.data;
  } catch (error) {
    console.error('Error fetching suppliers:', error);
  }
});
</script>

<style scoped>
.supplier-list {
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
  background-color: rgb(121, 149, 160);
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
  transition: background-color 0.3s, transform 0.3s;
}

th:hover {
  background-color: rgb(164, 212, 134);
  transform: scale(1.1);
}
</style>
