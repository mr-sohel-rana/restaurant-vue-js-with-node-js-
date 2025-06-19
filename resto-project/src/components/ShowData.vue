 <template>
  <div>
    <h2>User List</h2>

    <div v-for="user in users" :key="user.id" class="user-item">
      <strong>{{ user.name }}</strong> — {{ user.email }}
      <button @click="deleteUser(user.id)">Delete</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ShowData',
  data() {
    return {
      users: []
    }
  },

  mounted() {
    this.fetchUsers();
  },

  methods: {
    fetchUsers() {
      axios.get('http://localhost:3000/posts')
        .then(response => {
          this.users = response.data;
        })
        .catch(error => {
          console.error("Error fetching users:", error);
        });
    },

    deleteUser(id) {
      axios.delete(`http://localhost:3000/posts/${id}`)
        .then(() => {
          this.users = this.users.filter(user => user.id !== id);
        })
        .catch(error => {
          console.error("Error deleting user:", error);
        });
    }
  }
}
</script>

<style scoped>
h2 {
  font-size: 20px;
  margin-bottom: 10px;
}

.user-item {
  margin-bottom: 10px;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 400px;
  border-bottom: 1px solid #ddd;
  padding: 8px 0;
}

button {
  padding: 4px 10px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #c0392b;
}
</style>
