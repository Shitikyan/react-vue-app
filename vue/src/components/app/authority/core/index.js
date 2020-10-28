export default {
  props: {
    series: {
      type: String,
      required: true,
    },
    catalog_id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    version: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
    subsection: {
      type: String,
      required: true,
    },
    chapter: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    pages: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    commonNames: {
      type: Array,
      required: true,
    },
  },
};
