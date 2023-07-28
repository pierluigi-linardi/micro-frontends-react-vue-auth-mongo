import Component1 from "@/components/Component1/index.vue";
import Component2 from "@/components/Component2/index.vue";
import jwtDecode from 'jwt-decode'

export default {
  components: {
    Component1,
    Component2,
  },

  data() {
    let decode = null;
    let token = localStorage.getItem('token');
    if (token) {
      decode = jwtDecode(token);
    }
    return {
      user: decode ? decode.email : null,
      token: token
    }
  }
}
