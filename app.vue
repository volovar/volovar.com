<template lang="pug">
  .container
    div
      NuxtLink(to="/") Home
      NuxtLink(to="/resume") Resume
    NuxtPage
</template>

<style lang="postcss">
.container {
  background: #eee;
}
</style>
