import { Axios } from "axios";
import { validateEmail, validatePassword } from "../validation/validator.js";
import { defineStore } from "pinia";

export const userAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    errors: {
      name: null,
      email: null,
      password: null,
      password_confirmation: null,
    },
    token: localStorage.getItem("token") || null,
    isLoading: false,
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
    getUser: (state) => state.user,
    getErrors: (state) => state.errors,
  },

  actions: {
    async login(email, password) {
      this.errors.email = null;
      this.errors.password = null;

      if (!email) {
        this.errors.email = "Email is required";
        return;
      }
      if (!password) {
        this.errors.password = "Password is required";
        return;
      }

      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/login`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          }
        );
        const data = await response.json();

        if (data.token) {
          localStorage.setItem("token", data.token);
          this.token = data.token;
          this.user = data.user;
        } else if (data.status === 404) {
          this.errors.email = "Email not found";
        } else if (data.status === 401) {
          this.errors.password = "Invalid password";
        } else {
          console.error("Unexpected error:", data);
        }
      } catch (e) {
        console.error("Login failed:", e);
      }
    },

    async register(data) {
      this.errors.name = null;
      this.errors.email = null;
      this.errors.password = null;
      this.errors.password_confirmation = null;
      // Implementation here
      //  console.log(data);
      const { name, email, password, password_confirmation } = data;
      // Validate name
      if (name === "" || name.length <= 0) {
        this.errors.name = "Name is required";
        return;
      }

      // Validate email
      if (email === "" || email.length <= 0) {
        this.errors.email = "Email is required";
        return;
      }

      if (!validateEmail(email)) {
        this.errors.email = "Email is invalid";
        return;
      }

      // Validate password
      if (password === "" || password.length <= 0) {
        this.errors.password = "Password is required";
        return;
      }

      // if (!validatePassword(password)) {
      //   this.errors.password = "Password must be at least 8 characters long, contain an uppercase letter, a number, and a special character";
      //   return;
      // }

      // Validate password confirmation
      if (password !== password_confirmation) {
        this.errors.password_confirmation = "Password does not match";
        return;
      }

      //  -------------------------------
      try {
        const response = await Axios.post(
          "http://127.0.0.1:8000/api/users/signup",
          data
        );

        console.log("Response data:", response.data);
      } catch (error) {
        if (error.response) {
          // Server responded with a status code outside the 2xx range
          console.error(
            "Server error:",
            error.response.status,
            error.response.data
          );
        } else if (error.request) {
          // Request was made but no response was received
          console.error("No response from server:", error.request);
        } else {
          // Something else caused the error
          console.error("Error:", error.message);
        }
      }

      // ---------------------------------
    },

    logout() {
      localStorage.removeItem("token");
      this.token = null;
      this.user = null;
    },

    // async getUser() {
    //   try {
    //     const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/user`, {
    //       headers: {
    //         Authorization: `Bearer ${this.token}`,
    //       },
    //     });
    //     if (response.status === 401) {
    //       console.error("Session expired");
    //       this.logout();
    //     } else {
    //       const data = await response.json();
    //       this.user = data.user;
    //     }
    //   } catch (e) {
    //     console.error("Failed to fetch user:", e);
    //   }
    // },

    // Validate
  },
});
