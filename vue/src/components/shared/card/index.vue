<template>
  <div class="card">
    <p class="card__title text text-xxs text-bold">{{ title }}:</p>
    <bordered-component>
      <slot></slot>
    </bordered-component>
  </div>
</template>

<script src="./index.js">
</script>

<style lang="scss" src="./index.scss">
</style>
