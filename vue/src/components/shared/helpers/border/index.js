export default {
  props: {
    rounded: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: "",
    },
  },
  computed: {
    className() {
      let classNameActual = "border-default";
      if (this.$props.rounded) {
        classNameActual = classNameActual.concat(" border-rounded");
      }
      if (this.$props.position) {
        classNameActual = classNameActual.concat(` border-${this.$props.position}`);
      }

      return classNameActual;
    },
  },
};