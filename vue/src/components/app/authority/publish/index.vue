<template>
  <titled-bordered-component title="Published Version">
    <container-component size="sm" class="published-version">
      <grid-component class="published-version__header" cols="3">
        <div>
          <span class="text text-xxs text-bold text-right">Type:&nbsp;</span>
          <span class="text text-lg">{{ type | checkValue }}</span>
        </div>
        <div>
          <span class="text text-xxs text-bold text-right"
            >Availability:&nbsp;</span
          >
          <span class="text text-lg">{{ availability | checkValue }}</span>
        </div>
        <div>
          <span class="text text-xxs text-bold text-right"
            >Language:&nbsp;</span
          >
          <span class="text text-lg">{{ language | checkValue }}</span>
        </div>
      </grid-component>
      <container-component size="sm" class="published-version__body">
        <div class="titles-container">
          <div class="titles">
            <p class="text text-xxs text-bold text-right">
              Website Publisher or Periodical Title:&nbsp;
            </p>
            <p class="text text-xxs text-bold text-right">
              Volume or Issue:&nbsp;
            </p>
            <p class="text text-xxs text-bold text-right">
              Published Date:&nbsp;
            </p>
          </div>
          <div class="title-values">
            <p class="text text-lg">
              {{ (websitePublisher || periodicalTitle) | checkValue }}
            </p>
            <p class="text text-lg">{{ volumeIssue | checkValue}}</p>
            <p class="text text-lg">
              {{ publishedDate | dateStr }}
            </p>
          </div>
        </div>
        <titled-bordered-component title="Locator Information">
          <container-component size="sm" class="locator-header">
            <div>
              <span class="text text-xxs text-bold text-right"
                >ISBN:&nbsp;</span
              >
              <span class="text text-lg">{{ isbn | checkValue }}</span>
            </div>
            <div class="titles-container">
              <div class="titles">
                <p class="text text-xxs text-bold text-right">UUID:&nbsp;</p>
                <p class="text text-xxs text-bold text-right">
                  Search Info:&nbsp;
                </p>
              </div>
              <div class="title-values">
                <p class="text text-lg">{{ uuid | checkValue }}</p>
                <p class="text text-lg">{{ searchInfo | checkValue }}</p>
              </div>
            </div>
          </container-component>
          <container-component size="lg" class="uuid-container">
            <div class="titles">
              <p class="text text-xxs text-bold text-right">URL:&nbsp;</p>
              <p class="text text-xxs text-bold text-right">DOI:&nbsp;</p>
            </div>
            <div class="title-values">
              <p class="text text-lg">{{ url | checkValue }}</p>
              <p class="text text-lg">{{ doi | checkValue }}</p>
            </div>
          </container-component>
        </titled-bordered-component>
      </container-component>
    </container-component>
  </titled-bordered-component>
</template>

<script src="./index.js">
</script>

<style lang="scss" src="./index.scss">
</style>
