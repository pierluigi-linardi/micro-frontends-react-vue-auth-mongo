import Component1 from "@/components/Component1/index.vue";
import Component2 from "@/components/Component2/index.vue";
import jwtDecode from 'jwt-decode'

export default {
  components: {
    Component1,
    Component2,
  },

  data() {
    const dafneUserData = JSON.parse(localStorage.getItem('dafne-user-data') ?? '{}');

    let user = '';
    let token = '';
    if (dafneUserData) {
      user = dafneUserData.userName;
      token = dafneUserData.token;
    }
    return {
      user: user,
      token: token
    }
  }
}
