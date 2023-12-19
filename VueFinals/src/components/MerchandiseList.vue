<template>
  <div>
    <h1>Merchandise List</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Brand</th>
          <th>Description</th>
          <th>Retail Price</th>
          <th>Whole Sale Price</th>
          <th>Wole Sale Qty</th>
          <th>Qty Stock</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="merchandise in merchandises" :key="merchandise.id">
          <td>{{ merchandise.id }}</td>
          <td>{{ merchandise.brand }}</td>
          <td>{{ merchandise.description }}</td>
          <td>{{ merchandise.retail_price }}</td>
          <td>{{ merchandise.whole_sale_price }}</td>
          <td>{{ merchandise.whole_sale_qty }}</td>
          <td>{{ merchandise.qty_stock }}</td>
          <td>
            <button @click="toggleDetails(merchandise.id)">Show Details</button>
            <div v-if="merchandise.showDetails">
              <p>Id: {{ merchandise.id }}</p>
              <p>Brand: {{ merchandise.brand }}</p>
              <p>Description: {{ merchandise.description }}</p>
              <p>Retail price: {{ merchandise.retail_price }}</p>
              <p>Whole Sale Price: {{ merchandise.whole_sale_price }}</p>
              <p>Whole Sale Quality: {{ merchandise.whole_sale_qty }}</p>
              <p>Qty Stock: {{ merchandise.qty_stock }}</p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const merchandises = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/merchandises');
    merchandises.value = response.data.map((merchandise) => ({
      ...merchandise,
      showDetails: false,
    }));
  } catch (error) {
    console.error('Error fetching merchandises:', error);
  }
});

const toggleDetails = (id) => {
  const merchandise = merchandises.value.find((m) => m.id === id);
  if (merchandise) {
    merchandise.showDetails = !merchandise.showDetails;
  }
};
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
button {
  padding: 10px;
  margin: 5px;
  background-color: #007BFF;
  color: #fff;
  border: 2px solid #007BFF;
  border-radius: 8px;
  transition: background-color 0.3s, color 0.3s, transform 0.3s, border-color 0.3s;
}

button:hover {
  background-color: #0056b3;
  color: #fff;
  transform: scale(1.05);
  border-color: #0056b3;
}
</style>
