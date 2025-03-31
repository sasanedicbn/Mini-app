<template>
  <div class="text-block">
    <p
      v-if="title"
      class="title"
      :style="{ color: titleColor, fontSize: titleSize }"
    >
      {{ title }}
    </p>
    <p
      v-if="subTitle"
      class="subtitle"
      :style="{ color: subTitleColor, fontSize: subTitleSize }"
    >
      {{ subTitle }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subTitle: String,

  titleColor: {
    type: String,
    default: "#1a202c",
  },
  titleSize: {
    type: String,
    default: "1.25rem",
  },

  subTitleColor: {
    type: String,
    default: "#4a5568",
  },
  subTitleSize: {
    type: String,
    default: "1rem",
  },
});
</script>

<style scoped>
.text-block {
  font-family: sans-serif;
  line-height: 1.5;
}

.title {
  font-weight: 600;
  margin-bottom: 0.5rem;
  margin-top: 0;
}

.subtitle {
  margin-top: 0;
  opacity: 0.9;
}
</style>
