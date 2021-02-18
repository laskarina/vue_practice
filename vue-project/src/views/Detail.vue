<template>
  <body>
      <v-container class="grey lighten-5">
        <v-row no-gutters>
          <v-col
            cols="6"
            sm="3"
            md="4"
          >
            <h3>検索結果</h3>
          </v-col>
        </v-row>  
        <v-row no-gutters>
          <v-col
            cols="6"
            sm="3"
            md="4"
          >
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">
                      User ID
                    </th>
                    <th class="text-left">
                      User Name
                    </th>
                    <th class="text-left">
                      Detail
                    </th>
                  </tr>
                </thead>
                  <tbody>
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.detail }}</td>
                  </tbody>
              </template>
            </v-simple-table>
          </v-col>
        </v-row>  
      </v-container>
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
