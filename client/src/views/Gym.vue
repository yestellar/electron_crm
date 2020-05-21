<template lang="html">
  <div class="gym">
    <main>
      <nav>
        <ul id="nav-list">
          <li>Kasa</li>
          <li class="nav-list-open active">Klient
            <ul>
              <li>Klient</li>
              <li>Gość</li>
            </ul>
          </li>
          <li>Pracownik</li>
          <li>Faktura</li>
          <li class="nav-list-open">Karnety
            <ul>
              <li>Karnet dzienny</li>
              <li>Karnet open</li>
              <li>Karnet 99</li>
              <li>Half-open student</li>
              <li>Open student</li>
              <li>Karnet senior</li>
            </ul>
          </li>
          <li class="nav-list-open">Harmonogram
            <ul>
              <li>Zajęć</li>
              <li>Prac</li>
            </ul>
          </li>
          <li>Magazyn</li>
        </ul>
        <div id="logo">
          Way<span>Up</span>
        </div>
        <ul id="info-list">
          <li>Środa</li>
          <li>20.11.2019</li>
          <li>16:23</li>
        </ul>
      </nav>
      <section id="content">
        <div id="content-container">
          <div class="switcher-container">
            <a href="#" class="active">Klient</a>|
            <a href="#" class="">Gość</a>
            <button id="add_new_client" @click="createAddWindow">+ Dodaj klienta</button>
          </div>
          <div class="list-container">
            <i class="fas fa-search"></i></i><input type="text" id="search">
            <ul id="client_baze">
              <li v-for="(user, index) in users"
              :item="user"
              :index="index"
              :key="user._id"
              @click="setUserToWindow(user.text, index)"
              :class="{active: index == userWindow.id}">
                <span class="baze-client-id">{{ index }} |</span>
                <span class="baze-client-name">{{ user.text.name }}</span>
                <span class="baze-client-date">{{ user.text.birthdate }}</span>
              </li>
            </ul>
          </div>
          <div class="client-container">
            <label><div class="display-client-title"><span>{{ userWindow.id }} |</span>{{ userWindow.name }}<span>{{ userWindow.birthdate }}</span></div><i class="far fa-address-card"></i></label>
            <div class="client-data-container">
              <div class="client-photo"><i class="fas fa-user"></i></div>
              <ul class="client-data">
                <li class="active"><span>Status:</span> active</li>
                <li><span>Karnet:</span> {{ userWindow.subscription }}</li>
                <li><span>Telefon:</span> {{ userWindow.phone }}</li>
                <li style="font-size: 14px; white-space: nowrap"><span style="font-size: 16px">Email:</span><a href="">{{ userWindow.email }}</a></li>
              </ul>
              <ul class="client-options">
                <li>Historia</li>
                <li>Umowa:</li>
                <li>Przedłużyć</li>
                <li>Zamknąć</li>
              </ul>
            </div>
            <div class="client-textfield">
              <span class="header">Uwagi specjalne:</span>
              <textarea id="client_special_marks" placeholder="Brak notatek"></textarea>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
const electron = require('electron')
const {ipcRenderer} = electron

import PostService from '../PostService'
export default {
  name: 'Gym',
  data () {
    return {
      users: [],
      userWindow: {
        id: '',
        name: '',
        birthdate: '',
        subscription: '',
        phone: '',
        email: ''
      }
    }
  },
  methods: {
    createAddWindow() {
      ipcRenderer.send('client:openAdd')
    },
    setUserToWindow(user, index) {
      console.log(user);
      this.userWindow.id = index
      this.userWindow.name = user.name
      this.userWindow.birthdate = user.birthdate
      this.userWindow.subscription = user.subscription
      this.userWindow.phone = user.phone
      this.userWindow.email = user.email
    }
  },
  async created() {
    try {
      this.users = await PostService.getUsers()
    } catch (err) {
      this.error = err.errorMessage
    }
  }
}
</script>

<style lang="css" scoped>
.gym {
  background-image: linear-gradient(-120deg, #d4e4ff 0%, #b4e7ff 100%);
}

#add_new_client {
  background: #cdf6ff6b;
  border: none;
  position: absolute;
  left: 0;
  font-size: 16px;
  line-height: 30px;
  text-transform: uppercase;
  padding: 0 15px;
  border-radius: 5px;
  transition: background .1s linear;
  cursor: pointer;
}

#add_new_client:hover {
  background: #cde5ff;
}
</style>
