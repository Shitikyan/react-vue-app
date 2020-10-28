<template>
  <container-component size="md" class="authority-core">
    <grid-component cols="1">
      <p>
        <span class="text text-xxs text-bold">Official Name:&nbsp;</span>
        <span class="text text-md"
          >{{ series }} {{ catalog_id }} {{ title }}: {{ subtitle }}
          {{ version }} {{ section }} {{ subsection }} {{ chapter }}</span
        >
      </p>
      <grid-component cols="2">
        <div class="authority-core__flex">
          <span class="text text-xxs text-bold text-right text-no-wrap"
            >Common Names:&nbsp;</span
          >
          <bordered-component>
            <container-component size="sm" class="container-m-s">
              <p
                v-for="(name, index) in commonNames"
                :key="index"
                class="text text-lg"
              >
                {{ name }}
              </p>
            </container-component>
          </bordered-component>
        </div>
        <div class="authority-core--container">
          <div>
            <div class="authority-core__grid">
              <span class="text text-xxs text-bold text-right">Type:&nbsp;</span>
              <span class="text text-lg">{{ type | checkValue}}</span>
            </div>
          </div>
          <div>
            <div class="authority-core__grid">
              <span class="text text-xxs text-bold text-right"
                >Pages:&nbsp;</span
              >
              <span class="text text-lg">{{ pages | checkValue}}</span>
            </div>
          </div>
          <div>
            <div class="authority-core__grid">
              <span class="text text-xxs text-bold text-right"
                >Date:&nbsp;</span
              >
              <span class="text text-lg">{{ date | dateStr }}</span>
            </div>
          </div>
        </div>
      </grid-component>
    </grid-component>
  </container-component>
</template>

<script src="./index.js">
</script>

<style lang="scss" src="./index.scss">
</style>
