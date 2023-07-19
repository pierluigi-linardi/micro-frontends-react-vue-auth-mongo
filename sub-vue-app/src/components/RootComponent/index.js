import Component1 from "@/components/Component1/index.vue";
import Component2 from "@/components/Component2/index.vue";
import jwtDecode from 'jwt-decode'

export default {
  components: {
    Component1,
    Component2,
  },
  props: ['token'],
  data() {
    let decode = null;
    if (this.token) {
      decode = jwtDecode(this.token);
    }
    return {
      user: decode ? decode.email : null,

    }
  }
}
