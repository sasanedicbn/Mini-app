<template>
  <div class="main-container">
    <div class="form-container">
      <AuthSideBar />
      <AuthFormInputWrapper>
        <template #header>
          <span class="current-action">Page 1/3</span>
          <TextBlock
            title="Basic info"
            subTitle="Tell us a bit about yourself..."
          />
        </template>

        <template #content>
          <AuthFormInput
            :fields="fields"
            submitText="Next step"
            :onSubmit="handleFormSubmit"
          />
        </template>
      </AuthFormInputWrapper>
    </div>
  </div>
</template>
<script setup>
import AuthSideBar from "../AuthSideBar/AuthSideBar.vue";
import AuthFormInput from "./AuthFormInput.vue";
import TextBlock from "@/components/UX/TextBlock.vue";
import AuthFormInputWrapper from "@/components/Wrappers/Auth/AuthFormInputWrapper.vue";
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
    name: "companyname",
    type: "text",
    label: "Company Name",
    placeholder: "Enter company name",
    value: ""
  },
  {
    name: "companysize",
    type: "radio",
    label: "Company Size",
    value: "",
    props: {  
      options: [
        { value: "small", label: "Small" },
        { value: "medium", label: "Medium" },
        { value: "large", label: "Large" }
      ]
    }
  },
  {
    name: "industry",
    type: "text",
    label: "Industry",
    placeholder: "Enter your industry",
    value: ""
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "••••••••",
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
  width: 55%;
  max-width: 900px;
  display: grid;
  grid-template-columns: 280px 1fr;
  font-family: "Inter", "Segoe UI", sans-serif;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
  background: white;
  margin: 0 auto;
}

.current-action {
  color: grey;
}
</style>
