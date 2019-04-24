<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs6 offset-xs3>
        <h1>Adress</h1>

        <v-text-field v-model="name"
          label="name"
          placeholder="Super Hero Name"
        ></v-text-field>

        <v-text-field v-model="adress"
          label="adress"
          placeholder="Adress"
        ></v-text-field>

        <v-text-field v-model="city"
          label="city"
          placeholder="city"
        ></v-text-field>

        <v-text-field v-model="country"
          label="country"
          placeholder="Country"
        ></v-text-field>

        <v-text-field v-model="postalCode"
          label="postalCode"
          placeholder="Postal Code"
          type="password"
        ></v-text-field>


        <v-btn color="green" dark @click="createAdress()">
          <v-icon class="mr-2">fingerprint</v-icon>
          Send
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'adressForm',
  data() {
    return {
      name: '',
      adress: '',
      city: '',
      country: '',
      postalCode: '',
    };
  },
  methods: {
    createAdress() {
      const body = {
      name: this.name,
      adress: this.adress,
      city: this.city,
      country: this.country,
      postalCode: this.postalCode,
      };


      const token = localStorage.getItem('token')
      console.log(token)
      axios.post('http://localhost:5454/adress', body, { headers: {"token": token} })
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data.content);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      this.$router.push('/');
    },
  },
};
</script>
