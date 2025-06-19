<template>
  <h1>Home page</h1>
</template>

<script>
export default {
  name: 'HomePage',

  mounted() {
    let user = localStorage.getItem('user');
    if (!user) {
      this.$router.push({ name: "SignUp" }); // ✅ fixed typo here
    }
  },
}
</script>

<style scoped>
</style>
