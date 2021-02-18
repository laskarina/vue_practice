<template>

  <!DOCTYPE html>
  <html lang="ja">

  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>vue-project</title>
  </head>

  <body>
    <h3>検索条件</h3>
    <div>
      <label>User Name</label><input v-model="name"  type="text" />
      <button v-on:click="button">Search</button>
    </div>
    <h3>検索結果</h3>
    <table border="1">
      <thead>
        <tr>
          <td>User Id</td>
          <td>User Name</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td><router-link v-bind:to="{ name : 'Detail', params : { id: user.id }}">{{ user.id }}</router-link></td>
          <td>{{ user.name }}</td>
        </tr>
      </tbody>
    </table>
  </body>


  </html>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})

export default class Home extends Vue {
  // jsでのdataプロパティ以下は
  // tsでのクラスのフィールドに対応します。
  users = [] 

  name = "Vue.js";
  button(){

    const axios = require('axios').default;
    axios.get('http://localhost:3000/users')
    .then(response => (this.users = response.data))
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
