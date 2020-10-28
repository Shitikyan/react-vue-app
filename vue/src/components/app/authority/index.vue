<template>
  <loading-component v-if="isLoading || !Boolean(coreData)" />
  <div v-else>
    <bordered-component position="bottom">
      <AuthorityCore
        :series="coreData.series"
        :catalog_id="coreData.catalog_id"
        :title="coreData.title"
        :subtitle="coreData.subtitle"
        :version="coreData.published_version"
        :section="coreData.section"
        :subsection="coreData.subsection"
        :chapter="coreData.chapter"
        :type="coreData.type"
        :pages="coreData.pages"
        :date="coreData.published_date"
        :commonNames="commonNames"
      />
    </bordered-component>

    <bordered-component position="bottom">
      <container-component size="md">
        <grid-component cols="1">
          <grid-component cols="2">
            <card-component title="Authors">
              <container-component size="sm" class="container-m-s">
                <p
                  v-for="(item, index) in coreData.authors"
                  :key="index"
                  class="text text-md"
                >
                  {{ item.prefix }} {{ item.first_name }}
                  {{ item.middle_initial }} {{ item.last_name }}
                  {{ item.suffix }}
                </p>
              </container-component>
            </card-component>
            <card-component title="Editors">
              <container-component size="sm" class="container-m-s">
                <p
                  v-for="(item, index) in coreData.editors"
                  :key="index"
                  class="text text-md"
                >
                  {{ item.first_name }} {{ item.last_name }}
                </p>
              </container-component>
            </card-component>
          </grid-component>

          <bordered-component>
            <container-component size="md">
              <AuthorityPublish
                :type="coreData.publish_info.epub_type"
                :availability="coreData.publish_info.availability"
                :language="coreData.publish_info.language"
                :websitePublisher="coreData.publish_info.website_publisher"
                :periodicalTitle="coreData.publish_info.periodical_title"
                :volumeIssue="coreData.publish_info.volume_issue"
                :publishedDate="coreData.publish_info.published_date"
                :isbn="coreData.publish_info.isbn"
                :uuid="coreData.publish_info.uuid"
                :searchInfo="coreData.publish_info.search_information"
                :url="coreData.publish_info.url"
                :doi="coreData.publish_info.doi"
              />
            </container-component>
          </bordered-component>
        </grid-component>
      </container-component>
    </bordered-component>
  </div>
</template>

<script src="./index.js">
</script>