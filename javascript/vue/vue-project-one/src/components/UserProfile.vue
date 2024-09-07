<template>
  <div>
    <h1>User Profile</h1>
    <p v-if="loading">Loading...</p>
    <p v-else-if="error">Error: {{ error }}</p>
    <div v-else>
      <p>Name: {{ user.name }}</p>
      <p>Email: {{ user.email }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: null,
      loading: false,
      error: null,
    };
  },
  methods: {
    async fetchUser() {
      this.loading = true;
      this.error = null;
      try {
        // 環境変数からAPIのURLを取得
        const apiUrl = process.env.VUE_APP_API_URL || '/api/user';
        const response = await axios.get(apiUrl);
        this.user = response.data;
      } catch (err) {
        this.error = 'Failed to fetch user data';
      } finally {
        this.loading = false;
      }
    },
  },
  created() {
    this.fetchUser();
  },
};
</script>
