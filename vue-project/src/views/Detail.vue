<template>
  <body>
    <h3>検索結果</h3>
    <table border="1">
      <thead>
        <tr>
          <td>User Id</td>
          <td>User Name</td>
          <td>Detail</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.detail }}</td>
        </tr>
      </tbody>
    </table>
  </body>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})



export default class Detail extends Vue {
  // jsでのdataプロパティ以下は
  // tsでのクラスのフィールドに対応します。
  user = [] 
  

  created () {
    // パス
    console.log(this.$route.path)
    // パラメータ
    console.log(this.$route.params.id)

    console.log('http://localhost:3000/users' + '/' + this.$route.params.id)

    const axios = require('axios').default;
    axios.get('http://localhost:3000/users' + '/' + this.$route.params.id)
    .then(response => (this.user = response.data))
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }

  
}
</script>
