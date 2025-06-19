 <template>
  <nav class="nav">
    <div class="logo">
      <h3>Here is Logo</h3>
    </div>

    <ul class="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/sign-up">Signup</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
      <li><router-link to="/showdata">Show Users</router-link></li>
    </ul>

    <div class="icon">
      <h4>Icon Here</h4>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HeaderPage',
}
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
}

.logo h3 {
  margin: 0;
  font-size: 20px;
  color: #333;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 0;
}

.nav-links li {
  font-weight: 500;
}

.nav-links li a {
  text-decoration: none;
  color: #555;
  transition: color 0.3s ease;
}

.nav-links li a.router-link-active {
  font-weight: bold;
  color: #000;
}

.nav-links li a:hover {
  color: #000;
}

.icon h4 {
  margin: 0;
  font-size: 18px;
  color: #333;
}
</style>
