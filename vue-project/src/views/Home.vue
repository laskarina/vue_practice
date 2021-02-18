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
    <div>
    <template>
      <v-container class="grey lighten-5">
        <v-row no-gutters>
          <v-col
            cols="6"
            sm="3"
            md="4"
          >
            <h3>検索条件</h3>
          </v-col>
        </v-row>  
        <v-row no-gutters>
          <v-col
            cols="6"
            sm="3"
            md="4"
          >
            <v-text-field
              label="First Name"
              solo
            ></v-text-field>
          </v-col>
          <v-col
            cols="6"
            md="4"
          >
            <v-btn bottom="true" large v-on:click="button">Search</v-btn>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col
            cols="6"
            sm="3"
            md="4"
          >
            <h3>検索条件</h3>
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
                  </tr>
                </thead>
                  <tbody>
                    <tr v-for="user in users" :key="user.id">
                      <td><router-link v-bind:to="{ name : 'Detail', params : { id: user.id }}">{{ user.id }}</router-link></td>
                      <td>{{ user.name }}</td>
                    </tr>
                  </tbody>
              </template>
            </v-simple-table>
          </v-col>
        </v-row>  
      </v-container>
    </template>
    </div>
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
