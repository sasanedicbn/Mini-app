<template>
  <div class="text-block">
    <p v-if="title" class="title" :class="titleVariant">
      {{ title }}
    </p>
    <p v-if="subTitle" class="subtitle" :class="subTitleVariant">
      {{ subTitle }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subTitle: String,

  titleVariant: {
    type: String,
    default: "default",
    validator: (value) =>
      ["default", "large", "small", "accent"].includes(value),
  },
  subTitleVariant: {
    type: String,
    default: "default",
    validator: (value) => ["default", "muted", "bold"].includes(value),
  },
});
</script>

<style scoped>
.text-block {
  font-family: sans-serif;
  line-height: 1.2;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(218, 208, 208, 0.7);
  margin-bottom: 1.5rem;
  margin-top: 0.8rem;
}

.title {
  font-weight: 600;
  line-height: 1.2;
  color: rgb(56, 63, 75);
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.subtitle {
  margin: 0;
  color: rgb(70, 66, 66);
  font-size: 1rem;
  opacity: 0.9;
}

.title.large {
  font-size: 1.5rem;
}

.title.small {
  font-size: 1rem;
}

.title.accent {
  color: var(--color-accent);
}

.subtitle.muted {
  opacity: 0.6;
}

.subtitle.bold {
  font-weight: 500;
}
</style>
