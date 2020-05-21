<template lang="html">
  <div class="user">
    <main>
      <nav>
        <ul id="nav-list">
          <li class="active">Umowa</li>
          <li class="nav-list-open">Karnety siłowni
            <ul>
              <li>Karnet dzienny</li>
              <li>Karnet open</li>
              <li>Karnet 99</li>
              <li>Half-open student</li>
              <li>Open student</li>
              <li>Karnet senior</li>
            </ul>
          </li>
          <li>Menu restauracji</li>
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
          <div class="title-container">
            <h2>Dane umowy</h2>
          </div>
          <div class="client-container">
            <i class="far fa-address-card" aria-hidden="true"></i>
            <h3>Name Surname</h3>
            <div class="client-data-container">
              <div class="client-photo">
                <i class="fas fa-user" aria-hidden="true"></i>
              </div>
              <ul class="client-data">
                <li class="active"><span>Status:</span> active</li>
                <li><span>Karnet:</span> open</li>
                <li><span>Telefon:</span> 123 456 789</li>
                <li><span>Email:</span><a href="">address@mail.com</a></li>
                <li><span>Ważna od:</span> dd:mm:yyyy</li>
                <li><span>Termin:</span> 12 miesięcy</li>
                <li><span>Płatność:</span>Karta Visa</li>
                <li>1234 **** **** 5678</li>
              </ul>
            </div>
            <div class="client-textfield">
              <span class="header">Uwagi specjalne:</span>
              <textarea id="client_special_marks" placeholder="Brak notatek"></textarea>
            </div>
          </div>
          <div class="history-container">
            <i class="fas fa-history"></i>
            <h3>Historia wizytów</h3>
            <ul>
              <li><span> 1 |</span> <span> dd:mm:yyyy </span> <span> hh:mm </span></li>
              <li><span> 2 |</span> <span> dd:mm:yyyy </span> <span> hh:mm </span></li>
              <li><span> 3 |</span> <span> dd:mm:yyyy </span> <span> hh:mm </span></li>
              <li><span> 4 |</span> <span> dd:mm:yyyy </span> <span> hh:mm </span></li>
              <li><span> 5 |</span> <span> dd:mm:yyyy </span> <span> hh:mm </span></li>
              <li><span> 6 |</span> <span> dd:mm:yyyy </span> <span> hh:mm </span></li>
              <li><span> 7 |</span> <span> dd:mm:yyyy </span> <span> hh:mm </span></li>
              <li><span> 8 |</span> <span> dd:mm:yyyy </span> <span> hh:mm </span></li>
              <li><span> 9 |</span> <span> dd:mm:yyyy </span> <span> hh:mm </span></li>
              <li><span> 10 |</span> <span> dd:mm:yyyy </span> <span> hh:mm </span></li>
              <li><span> 11 |</span> <span> dd:mm:yyyy </span> <span> hh:mm </span></li>
              <li><span> 12 |</span> <span> dd:mm:yyyy </span> <span> hh:mm </span></li>
              <li><span> 13 |</span> <span> dd:mm:yyyy </span> <span> hh:mm </span></li>
              <li><span> 14 |</span> <span> dd:mm:yyyy </span> <span> hh:mm </span></li>
              <li><span> 15 |</span> <span> dd:mm:yyyy </span> <span> hh:mm </span></li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.user {
  background-image: linear-gradient(120deg, #89e1aa 0%, #8ff4dc 100%);
}

nav #logo span {
  text-shadow: #8deecc 2px 2px 0px, #444 4px 4px 0px;
}

.title-container {
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid #bbb;
  height: 30px;
  display: flex;
  justify-content: center;
}

.title-container h2 {
  display: inline-block;
  text-align: center;
  font-size: 16px;
  line-height: 30px;
  text-transform: uppercase;
  border-radius: 5px;
  background-color: #b8eed3;
  padding: 0 15px;
  font-weight: 400;
}

#content-container .client-container {
  width: 70%;
  box-sizing: border-box;
  position: relative;
  padding-left: 0px;
  border-right: 1px solid #bbb;
  margin-top: 15px;
  padding-top: 0px;
  padding-right: 15px;
}

#content-container .client-container i.fa-address-card {
  position: absolute;
  top: 6px;
  left: -9px;
}

.client-container h3 {
  box-sizing: border-box;
  text-align: center;
  background: #eee;
  font-weight: 400;
  border-radius: 5px;
  line-height: 32px;
  height: 32px;
  font-size: 16px;
  margin-left: 30px;
}

.client-container .client-data-container {
  height: 130px;
}

.client-container .client-data-container ul.client-data {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.client-container .client-data-container ul.client-data li {
  width: 50%;
  box-sizing: border-box;
}

.client-container .client-data-container ul.client-data li:nth-child(1),
.client-container .client-data-container ul.client-data li:nth-child(2),
.client-container .client-data-container ul.client-data li:nth-child(3),
.client-container .client-data-container ul.client-data li:nth-child(4) {
  border-right: 1px solid #bbb;
}

.client-container .client-data-container ul.client-data li:last-child {
  padding-left: 110px;
}

.client-container .client-data-container ul.client-data li:nth-child(5) span,
.client-container .client-data-container ul.client-data li:nth-child(6) span,
.client-container .client-data-container ul.client-data li:nth-child(7) span,
.client-container .client-data-container ul.client-data li:nth-child(8) span {
  width: 100px !important;
}

#content-container .client-container .client-data-container ul.client-data {
  width: calc(100% - 115px);
}

.history-container {
  width: 30%;
  margin-top: 15px;
  padding-left: 15px;
  box-sizing: border-box;
  position: relative;
}

.history-container i{
  position: absolute;
  top: 8px;
  right: 6px;
  font-size: 16px;
}

.history-container h3 {
  margin-right: 30px;
  box-sizing: border-box;
  text-align: center;
  background: #eee;
  font-weight: 400;
  border-radius: 5px;
  line-height: 32px;
  height: 32px;
  font-size: 16px;
}

.history-container ul {
  list-style: none;
  border: 1px solid #bbb;
  box-sizing: border-box;
  margin-top: 15px;
  height: 350px;
  overflow-y: scroll;
  scrollbar-width: thin;
  scroll-color: #bbb #fff;
}

.history-container ul li {
  border-bottom: 1px solid #bbb;
  box-sizing: border-box;
  line-height: 35px;
  height: 35px;
  padding: 0 20px;
  width: 100%;
  white-space: nowrap;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
}

.history-container ul li:hover {
  background: #eee;
}

.history-container ul li span:nth-child(1) {
  width: 30px;
  text-align: right;
  color: #bbb;
}
</style>
