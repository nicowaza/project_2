<template>
  <v-toolbar color="green" dark fixed>
      <v-toolbar-title class="mr-4">SUPER HEROES</v-toolbar-title>
        <v-toolbar-items>
          <v-btn flat to="/adressForm" v-if="isAuthenticated()"><v-icon>playlist_add_check</v-icon>
          Super Heroes Adress
          </v-btn>
        </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/register" v-if="!isAuthenticated()">
        <v-icon class="mr-2">account_box</v-icon>
        Register
        </v-btn>
      <v-btn flat to="/login" v-if="!isAuthenticated()">
        <v-icon class="mr-2">fingerprint</v-icon>
        Login
        </v-btn>
      <v-btn flat to="/login" v-if="isAuthenticated()" @click="logout()">
        <v-icon class="mr-2">exit_to_app</v-icon>
        Logout
        </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import Auth from '@/helpers/Auth';

export default {
  name: 'Toolbar',
  methods: {
    isAuthenticated() {
      return Auth.isAuthenticated();
    },
    logout() {
      localStorage.removeItem('token');
      window.location.reload();
      // this.$router.push('/login');
    },
  },
};
</script>
