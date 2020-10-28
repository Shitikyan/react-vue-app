import AuthorityCore from "./core/index.vue";
import AuthorityPublish from "./publish/index.vue";
import api from "../../../utils/api";

export default {
  data: () => ({
    coreData: null,
    isLoading: true,
  }),
  components: {
    AuthorityCore,
    AuthorityPublish,
  },
  mounted() {
    api
      .get("/api/authority/core")
      .then((res) => {
        this.coreData = res;
        
        this.coreData.common_names = res.CommonNames['@set'];
        this.coreData.authors = res.Authors['@set'];
        this.coreData.editors = res.Editors['@set'];
        this.coreData.publish_info = res.ADIdentifiers['@set'][0];

        this.isLoading = false;
      })
      .catch(() => {
        this.isLoading = false;
      });
  },
  computed: {
    commonNames() {
      return this.coreData.common_names.map((q) => q.name);
    },
  },
};
