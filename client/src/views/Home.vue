<template>
  <div>
    <h1>Super Heroes Adresses</h1>

    <div v-for="adress in adresses" :key="adress.id">
      <h2>{{ adress.name }}</h2>
      <h3>{{ adress.adress }}</h3>
      <h3>city : {{ adress.city }}</h3>
      <h3>country : {{ adress.country }}</h3>
      <h3>post code : {{ adress.postalCode }}</h3>
      <hr>
    </div>

  </div>

</template>

<script>
import axios from 'axios';

export default {
  name: 'home',
  data() {
    return {
      adresses: []
    }
  },
  created() {
    const token = localStorage.getItem('token')
    axios.get('http://localhost:5454/adress', { headers: {"token": token} }).then((res) => {
      if(res.status === 200) {
        this.adresses = res.data.content;
        console.log('this.adresses', this.adresses)
      }
    })
  }
 }
</script>
