<template>
  <div class="main-container">
    <div class="form-container">
      <AuthSideBar />
      <AuthFormInputWrapper>
        <template #header>
          <span class="current-action">Page {{ currentStep }}/3</span>
          <TextBlock
            :title="steps[currentStep - 1].title"
            :subTitle="steps[currentStep - 1].subtitle"
          />
        </template>

        <template #content>
          <AuthFormInput
            :fields="steps[currentStep - 1].fields"
            :submitText="currentStep === 3 ? 'Complete' : 'Next step'"
            @submit="handleFormSubmit"
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
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "••••••••",
    value: "",
  },
];

const steps = [
  {
    title: "Basic info",
    subtitle: "Tell us a bit about yourself...",
    fields: [
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
    ],
  },
  {
    title: "Contact details",
    subtitle: "How can we reach you?",
    fields: [
      {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "Enter your email",
        value: "",
      },
      {
        name: "phone",
        label: "Phone Number",
        type: "tel",
        placeholder: "Enter your phone number",
        value: "",
      },
    ],
  },
  {
    title: "Final step",
    subtitle: "Almost there!",
    fields: [
      {
        name: "username",
        label: "Username",
        type: "text",
        placeholder: "Choose a username",
        value: "",
      },
      {
        name: "terms",
        label: "I agree to terms and conditions",
        type: "checkbox",
        value: false,
      },
    ],
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
