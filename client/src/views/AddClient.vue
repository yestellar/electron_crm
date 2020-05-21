<template lang="html">
  <div class="addClient">
    <form>
      <div class="header">
        <h1>Dodaj członka</h1>
        <input type="text" v-model="form.name" placeholder="Imię Nazwisko" required>
      </div>

      <div class="photo-container">
        <label for="file">
          <input
          id="file"
          type="file"
          accept="image/png, image/jpeg"
          @change="imageUpload()"
          ref="image">
          <img :src="photo" alt="">
        </label>

      </div>

      <div class="data-container">
        <input type="text" v-model="form.birthdate" placeholder="Data urodzenia dd:mm:yyyy" required>
        <select v-model="form.subscription">
          <option selected disabled>Karnet</option>
          <option v-for="subscription in subscriptions" :key="subscription">{{ subscription }}</option>
        </select>
        <input type="text" v-model="form.phone" placeholder="Telefon">
        <input type="text" v-model="form.email" placeholder="E-mail">
      </div>

      <textarea v-model="form.marks" placeholder="Uwagi specjalne"></textarea>

      <div class="button-container">
        <button @click.prevent="createClient">Wydruk</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import PostService from '../PostService'
const {getCurrentWindow, globalShortcut} = require('electron').remote
const {ipcRenderer} = require('electron');

export default {
  name: 'AddClient',
  data() {
    return {
      form: {
        status: 'active',
        file: undefined,
        subscription: 'Karnet'
      },
      photo: undefined,
      subscriptions: ['Dzienny', 'Open', '99', 'Half-Open', 'Student', 'Senior']
    }
  },
  methods: {
    imageUpload () {
      console.log(this.$refs.image);
      this.form.file = this.$refs.image.files[0]
      this.photo = URL.createObjectURL(this.form.file)
    },
    async createClient() {
      await PostService.insertUser(this.form)
      getCurrentWindow().close()
      ipcRenderer.send('client:newClient')
    }
  }
}
</script>

<style lang="css" scoped>
form {
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
  margin-top: 10px;
}
.header {
  width: 100%;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 5px;
}
.header h1 {
  font-size: 25px;
}
.photo-container {
  width: 120px;
  padding-right: 10px;
  padding-bottom: 10px;
  box-sizing: border-box;
}
.photo-container input {
  display: none;
}

.photo-container label {
  width: 100%;
  height: 100%;
  background-color: #eee;
  display: block;
  transition: .2s linear;
  overflow: hidden;
  height: 142px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.photo-container label img{
  background-position: center;
  max-height: 100%;
}
.photo-container label:hover {
  cursor: pointer;
  background: #bbb;
}
.data-container {
  width: calc(100% - 120px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
}
.data-container input,
.header input,
.data-container select {
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 1.8em;
  border: none;
  background-color: #eee;
  padding-left: 10px;
}
textarea {
  width: 100%;
  padding-top: 5px;
  border: none;
  background-color: #eee;
  resize: none;
  height: 50px;
  padding-left: 10px;
}
.button-container {
  width: 100%;
  border-top: 1px solid #ccc;
  margin-top: 10px;
}
button {
  width: 30%;
  margin-top: 10px;
}
</style>
