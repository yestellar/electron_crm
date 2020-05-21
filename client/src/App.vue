<template>
  <div id="app">
    <!-- <header v-if="$route.props && !$route.props.childWindow"> -->
    <header v-if="$route.path != '/addClient'">
      <div id="header_buttons">
        <select v-model='currentTab' @change="goto(currentTab)">
          <option v-for="link in links">{{ link.name }}</option>
        </select>
      </div>
      <div id="title">{{ tabValue }}</div>
      <div id="duty">Name Surname</div>
    </header>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
        return {
          currentTab: 'Siłownia',
          links: [
            {name: 'Siłownia'},
            {name: 'Restauracja'},
            {name: 'Użytkownik'}
          ]
        }
    },
    methods: {
      goto (router) {
        if (router === 'Siłownia') router = '/'
        else if (router === 'Restauracja') router = '/restaurant'
        else if (router === 'Użytkownik') router = '/user'
        this.$router.push({path: router})
      }
    },
    computed: {
      tabValue: function() {
        if (this.currentTab === 'Siłownia') return 'Baza Klientów'
        else if (this.currentTab === 'Restauracja') return 'Harmonogram'
        else if (this.currentTab === 'Użytkownik') return 'Panel użytkownika'
      }
    }
  }
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  color: #444;
}

button:focus {
  outline: none;
}

body {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

header {
  height: 60px;
  display: flex;
  background: #fff;
}

#header_buttons {
  width: 25%;
}

#header_buttons select {
  display: block;
  text-decoration: none;
  height: 60px;
  width: 100%;
  background: none;
  border: none;
  font-size: 17px;
  text-transform: uppercase;
  line-height: 60px;
  text-align: center;
  transition: background .1s linear;
  padding-left: 50px;
}

#header_buttons select:focus {
  outline: none;
}

#header_buttons a:hover {
  background: #eee;
}

#title {
  height: 60px;
  text-align: center;
  line-height: 60px;
  width: calc(75% - 200px);
  text-transform: uppercase;
}

#duty {
  height: 60px;
  text-align: center;
  line-height: 60px;
  width: 200px;
  border-left: 1px solid #bbb;
  box-sizing: border-box;
  text-transform: uppercase;
}

main {
  display: flex;
}

nav {
  width: 25%;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

nav ul#nav-list {
  border-top: 1px solid #bbb;
}

nav ul#nav-list li {
  border-bottom: 1px solid #bbb;
  font-size: 17px;
  height: 60px;
  line-height: 60px;
  padding-left: 50px;
  list-style: none;
  box-sizing: border-box;
  background: #fff;
  transition: background .1s linear;
  position: relative;
  text-transform: uppercase;
  cursor: pointer;
}

nav ul#nav-list li:hover,
nav ul#nav-list li.active {
  background-color: #eee;
}

nav ul#nav-list li:active {
  background-color: #fff;
  transition: .1s;
}

nav ul#nav-list li.nav-list-open::after {
  content: '';
  display: block;
  width: 10px;
  height: 10px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%) rotate(-45deg);
  right: 50px;
  border-bottom: 1px solid #444;
  border-right: 1px solid #444;
}

nav ul#nav-list li > ul {
  display: none;
  position: absolute;
  top: 0;
  left: 100%;
  width: 50%;
  box-shadow: 2px 2px 10px -6px rgba(0,0,0,0.75);
  z-index: 2;
}

nav ul#nav-list li > ul li {
  padding-left: 20px;
}

nav ul#nav-list li:hover > ul {
  display: block;
}

nav ul#nav-list li:last-child {
  border: none;
}

nav #logo {
  color: #fff;
  text-align: center;
  font-size: 70px;
  text-shadow: 4px 3px 0 #D2D2D2;
}

nav #logo span {
  font-weight: bold;
  text-shadow: #a1c4fd 2px 2px 0px, #444 4px 4px 0px;
}

nav ul#info-list {
  padding: 20px 0 20px 20px;
  display: flex;
  justify-content: center;
  background: #fff;
}

nav ul#info-list li {
  font-size: 17px;
  width: 100%;
  list-style: none;
  text-align: center;
  color: #444;
}

#content {
  width: 75%;
  height: calc(100vh - 60px);
  box-shadow: inset 0px 0px 10px -6px rgba(0,0,0,0.75);
  display: flex;
  justify-content: center;
  align-items: center;
}

#content-container {
  width: 80%;
  background: #fff;
  padding: 20px 20px;
  box-shadow: 0px 0px 10px -6px rgba(0,0,0,0.75);
  border: 1px solid #eee;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
}

#content-container .switcher-container {
  height: 30px;
  text-align: center;
  border-bottom: 1px solid #bbb;
  padding-bottom: 10px;
  width: 100%;
  position: relative;
}

#content-container .switcher-container a {
  display: inline-block;
  height: 100%;
  text-decoration: none;
  font-size: 16px;
  line-height: 30px;
  text-transform: uppercase;
  margin: 0 15px;
  padding: 0 15px;
  position: relative;
  border-radius: 5px;
  transition: background .1s linear;
}

#content-container .switcher-container a:last-child::before {
  content: '|';
  color: #bbb;
  position: absolute;
  left: -20px;
}

#content-container .switcher-container a.active,
#content-container .switcher-container a:hover {
  background: #cde5ff;
}

#content-container .list-container {
  width: 50%;
  border-right: 1px solid #bbb;
  margin-top: 15px;
  box-sizing: border-box;
}

#content-container .list-container i {
  padding: 0 10px;
}

#content-container .list-container input {
  width: calc(100% - 51px);
  box-sizing: border-box;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  padding: 2px 10px;
  background: #eee;
  height: 32px;
  line-height: 32px;
  transition: box-shadow .1s linear;
}

#content-container .list-container input:focus,
#content-container .list-container input:hover {
  box-shadow: inset 0px 0px 10px -6px rgba(0,0,0,0.75);
}

#content-container .list-container #client_baze {
  list-style: none;
  border: 1px solid #bbb;
  box-sizing: border-box;
  margin-right: 15px;
  margin-top: 15px;
  height: 350px;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: #bbb #fff;
}

#content-container .list-container #client_baze li {
  border-bottom: 1px solid #bbb;
  height: 35px;
  line-height: 35px;
  padding: 0 20px;
  background: #fff;
  box-sizing: border-box;
  width: 100%;
  white-space: nowrap;
}

#content-container .list-container #client_baze li:hover,
#content-container .list-container #client_baze li.active {
  background: #eee;
}

#content-container .list-container #client_baze li .baze-client-id {
  width: 20px;
  display: inline-block;
  text-align: right;
  color: #bbb;
  box-sizing: border-box;
}

#content-container .list-container #client_baze li .baze-client-name {
  padding-left: 5px;
}

#content-container .list-container #client_baze li .baze-client-date {
  float: right;
  color: #bbb;
}

#content-container .client-container {
  padding-top: 15px;
  width: 50%;
  padding-left: 16px;
  box-sizing: border-box;
}

#content-container .client-container label {
  display: flex;
  align-items: center;
}

#content-container .client-container .display-client-title {
  line-height: 32px;
  font-size: 16px;
  padding: 0px 20px;
  height: 32px;
  width: calc(100% - 43px);
  background: #eee;
  position: relative;
  border-radius: 5px;
}

#content-container .client-container .display-client-title span:first-child {
  padding-right: 5px;
}

#content-container .client-container .display-client-title span:last-child {
  position: absolute;
  right: 15px;
}

#content-container .client-container i {
  padding: 0 10px;
  font-size: 20px;
}

#content-container .client-container .client-data-container {
  width: 100%;
  margin-top: 15px;
  display: flex;
}

#content-container .client-container .client-data-container .client-photo {
  background: #eee;
  width: 100px;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#content-container .client-container .client-data-container .client-photo i {
  font-size: 50px;
}

#content-container .client-container .client-data-container ul.client-data {
  list-style: none;
  width: calc(100% - 200px);
  height: 130px;
  padding-left: 15px;
  box-sizing: border-box;
}

#content-container .client-container .client-data-container ul.client-data li {
  line-height: 2em;
}

#content-container .client-container .client-data-container ul.client-data li.active {
  color: rgb(38, 215, 119);
}

#content-container .client-container .client-data-container ul.client-data li span{
  display: inline-block;
  width: 60px;
  text-align: right;
  padding-right: 10px;
}


#content-container .client-container .client-data-container ul.client-data li a {
  display: inline-block;
  text-decoration: none;
  box-sizing: border-box;
  padding: 0px 5px;
}


#content-container .client-container .client-data-container ul.client-data li a:hover {
  text-decoration: underline;
}

#content-container .client-container .client-data-container ul.client-options {
 list-style: none;
 line-height: 1.7em;
 width: 100px;
 border-top: 1px solid #eee;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
}

#content-container .client-container .client-data-container ul.client-options li {
  border-bottom: 1px solid #eee;
  border-top: 1px solid #eee;
  box-sizing: border-box;
  transition: background .1s linear;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
  border-radius: 5px;
}

#content-container .client-container .client-data-container ul.client-options li:nth-child(2) {
  background: #eee;
  cursor: auto;
}

#content-container .client-container .client-data-container ul.client-options li:hover {
  background: #eee;
}

#content-container .client-container .client-textfield {
  border: 1px solid #eee;
  margin-top: 15px;
  height: calc(100% - 192px);
}

#content-container .client-container .client-textfield .header {
  display: inline-block;
  width: 100%;
  text-align: center;
  background: #eee;
  font-size: 16px;
  height: 25px;
  line-height: 25px;
}

#content-container .client-container .client-textfield textarea {
  height: calc(100% - 25px);
  width: 100%;
  resize: none;
  border: none;
  background: #f9f9f9;
  padding: 10px 15px;
  box-sizing: border-box;
}
</style>
