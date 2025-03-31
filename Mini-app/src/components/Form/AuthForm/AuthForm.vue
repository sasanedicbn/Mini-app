<template>
  <div class="main-container">
    <div class="form-container">
      <AuthSideBar />
      <!-- <span class="current-action">Step 1/3</span> -->
      <AuthFormInput
        :fields="fields"
        submitText="Next step"
        :onSubmit="handleFormSubmit"
      />
    </div>
  </div>
</template>
<script setup>
import AuthSideBar from "../AuthSideBar/AuthSideBar.vue";
import AuthFormInput from "./AuthFormInput.vue";
const fields = [
  {
    name: "firstname",
    label: "First Name",
    type: "text",
    placeholder: "Enter your name",
    value: "",
    halfWidth: true,
  },
  {
    name: "lastname",
    label: "Last Name",
    type: "text",
    placeholder: "Enter your last name",
    value: "",
    halfWidth: true,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "••••••••",
    value: "",
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel",
    placeholder: "+123 456 7890",
    value: "",
  },
];
</script>

<style scoped>
.main-container {
  width: 100%;
  height: 100vh;
  background-color: #0b192e;
  display: flex;
  align-items: center;
}
.form-container {
  margin: 0 auto;
  margin-top: 10rem;
  margin-bottom: 6rem;
  max-width: 900px;
  display: grid;
  grid-template-columns: 280px 1fr;
  font-family: "Inter", "Segoe UI", sans-serif;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
  background: white;
  height: 550px;
  /* min-height: 600px; */
  /* min-height: 400px;
    max-height:800px; */
}

.current-action {
  color: grey;
}
</style>
