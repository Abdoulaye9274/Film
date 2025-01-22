<template>
  <div class="login-container">
    <h2>LOGIN</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="username">Username or email address *</label>
        <input
          id="username"
          v-model="username"
          type="text"
          placeholder="Enter your username or email"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Password *</label>
        <div class="password-container">
          <input
            id="password"
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Enter your password"
            required
          />
          <button
            type="button"
            class="toggle-password"
            @click="togglePasswordVisibility"
          >
            👁
          </button>
        </div>
      </div>
      <div class="form-actions">
        <label>
          <input type="checkbox" v-model="rememberMe" /> Remember me
        </label>
        <a href="#" class="lost-password">Lost your password?</a>
      </div>
      <button type="submit" class="login-button">Log In</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: "",
      rememberMe: false,
      showPassword: false,
    };
  },
  methods: {
    handleLogin() {
      // Exemple de logique de connexion
      console.log("Username:", this.username);
      console.log("Password:", this.password);
      console.log("Remember me:", this.rememberMe);
      alert("Login successful!");
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background: #f9f9f9;
  text-align: center;
}

h2 {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

.password-container {
  display: flex;
  align-items: center;
}

.password-container input {
  flex: 1;
}

.toggle-password {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  margin-left: 5px;
}

.form-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.lost-password {
  font-size: 14px;
  text-decoration: none;
  color: #007bff;
}

.lost-password:hover {
  text-decoration: underline;
}

.login-button {
  width: 100%;
  padding: 10px;
  background-color: #5bc0de;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #31b0d5;
}
</style>
