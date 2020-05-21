<template lang="html">
  <div class="restaurant">
    <main>
      <nav>
        <ul id="nav-list">
          <li>Kasa</li>
          <li class="nav-list-open">Klient
            <ul>
              <li>Klient</li>
              <li>Gość</li>
            </ul>
          </li>
          <li>Pracownik</li>
          <li>Faktura</li>
          <li>Menu</li>
          <li class="active">Harmonogram</li>
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
            <a href="#" class="active">Prac</a>
          </div>

          <div v-if="ready" class="table-container">
            <div class="date-title">
              <div class="prev-month-button" @click="nextMonth"></div>
              {{ currentMonth.name }}, 2020
              <div class="next-month-button" @click="prevMonth"></div>
            </div>
            <table class="calendar-container">
              <tr class="staff-list row">
                <th class="cell th"></th>
                <th class="cell th" v-for="(month, index) in months[monthIndex].length" :key="">
                  {{ index + 1}}
                </th>
              </tr>
              <tr class="staff-list row" v-for="(person, index) in staff">
                <td class="cell name">
                  {{ person.name }}
                </td>
                <td class="cell value" v-for="(day, index2) in person.months[monthIndex]" @click="setCurrentDay(person, index2)">
                  {{ person.months[monthIndex][index2] }}
                </td>
              </tr>
            </table>
          </div>

          <div class="edit-container">
            <div class="edit-title">Name Surname, 2 listopad 2019</div>
            <div class="status-container">
              <div class="status-title">Status</div>
              <select>
                <option>W pracy</option>
                <option>Wolny</option>
              </select>
            </div>
            <div class="time-container">
              <div class="time-title">Godziny pracy</div>
              <input v-model="currentDay" ref="clocks">
            </div>
          </div>
          <div class="download-container">
            <div class="download-title">Pobierz harmonogram</div>
            <div class="download"><i class="fas fa-file-download"></i> Pobierz</div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Staff from '../Staff'

export default {
  name: 'Restaurant',
  data() {
    return {
      months: [
        {name: 'Styczeń', length: 31},
        {name: 'Luty', length: 29}
      ],
      monthIndex: 0,
      staff: [
        new Staff('Szymon Wiatrek'),
        new Staff('Leo Drobny'),
        new Staff('Justyn Kulczyk'),
        new Staff('Jaromir Radzinski'),
        new Staff('Adrian Kulpa'),
        new Staff('Witold Kubera'),
      ],
      currentDay: undefined,
      currentPerson: undefined,
      dayIndex: undefined,
      ready: false,
    }
  },
  methods: {
    setCurrentDay(person, dayIndex) {
      this.currentDay = person.months[this.monthIndex][dayIndex]
      this.currentPerson = person
      this.dayIndex = dayIndex

      this.$refs.clocks.focus()
    },
    test: function(a, b){
      console.log(a, b);
    },
    changeDay(){
    },
    nextMonth() {
      if(this.monthIndex >= this.months.length - 1)
        this.monthIndex = 0
      else
        this.monthIndex++
    },
    prevMonth() {
      if(this.monthIndex == 0)
        this.monthIndex = this.months.length - 1
      else
        this.monthIndex--
    },
    getCurrentDay() {
      console.log(this.currentDay)
    },
    inputHandler(event) {
      // this.currentDay = event.value
      console.log(event);
    }
  },
  computed: {
    currentMonth: function() {
      return this.months[this.monthIndex]
    }
  },
  mounted() {

    for (let i = 0; i < this.months.length; i++) {
      for (let j = 0; j < this.staff.length; j++) {
        this.staff[j].months[i] = new Array(this.months[i].length)
      }
    }

    this.ready = true

  },
  watch: {
    currentDay: function() {
      this.currentPerson.months[this.monthIndex][this.dayIndex] = this.currentDay
    }
  }
}
</script>

<style lang="css" scoped>
.restaurant {
  background-image: linear-gradient(45deg, #fbb7ba 0%, #fad0c4 99%, #fad0c4 100%);
}

nav #logo span {
    text-shadow: #f4c6c5 2px 2px 0px, #444 4px 4px 0px;
}

#content-container .switcher-container a:last-child::before {
  content: '';
}

#content-container .switcher-container a.active, #content-container .switcher-container a:hover {
    background: #facfc4;
}

#content-container .switcher-container {
  margin-bottom: 15px;
}

#content-container .table-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #bbb;
  padding-bottom: 15px;
}

#content-container .table-container .date-title {
  width: 100%;
  height: 32px;
  background: #eee;
  line-height: 32px;
  text-align: center;
  border-radius: 5px;
  position: relative;
}

#content-container .table-container .prev-month-button {
  content: '';
  display: block;
  width: 10px;
  height: 10px;
  position: absolute;
  border-left: 1px solid #444;
  border-bottom: 1px solid #444;
  top: 50%;
  left: 50px;
  transform: translateY(-50%) rotate(45deg);
  cursor: pointer;
}

#content-container .table-container .next-month-button {
  content: '';
  display: block;
  width: 10px;
  height: 10px;
  position: absolute;
  border-right: 1px solid #444;
  border-top: 1px solid #444;
  top: 50%;
  right: 50px;
  transform: translateY(-50%) rotate(45deg);
  cursor: pointer;
}

#content-container .table-container .staff-list {
  list-style: none;
  margin-top: 0px;
}

/* #content-container .table-container .staff-list li {
  height: 40px;
  line-height: 40px;
  text-align: center;
  border: 1px solid #bbb;
  width: 170px;
  box-sizing: border-box;
} */

#content-container .table-container .staff-list li:not(:last-child) {
  border-bottom: none;
}

#content-container .table-container .calendar-container {
  margin-top: 15px;
  width: 100%;
  border: 1px solid #bbb;
  box-sizing: border-box;
  overflow-x: scroll;
  overflow-y: hidden;
  display: inline-block;
  scrollbar-width: thin;
  scrollbar-color: #bbb #fff;
}

#content-container .table-container .calendar-container .row {
  display: inline-block;
  white-space: nowrap;
  height: 40px;
}

#content-container .table-container .calendar-container .row .cell {
  width: 150px;
  height: 40px;
  line-height: 40px;
  border-right: 1px solid #bbb;
  border-bottom: 1px solid #bbb;
  display: inline-block;
  box-sizing: border-box;
  transition: background .1s linear;
}

#content-container .table-container .calendar-container .row .cell.value{
  text-align: center;
}

#content-container .table-container .calendar-container .row .cell:last-child{
  border-right: none;
}

#content-container .table-container .calendar-container .row .cell:hover {
  background: #eee;
  cursor: pointer;
}

#content-container .table-container .calendar-container .row .cell.th {
  background: #eee;
  text-align: center;
}

#content-container .table-container .calendar-container .row .cell.active {
  background: #eee;
}

#content-container .edit-container {
  width: 70%;
  border: 1px solid #eee;
  height: 100px;
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
}

#content-container .edit-container .edit-title {
  background: #eee;
  height: 32px;
  line-height: 32px;
  text-align: center;
  width: 100%;
}

#content-container .edit-container .status-container {
  width: 50%;
  border-right: 1px solid #bbb;
  height: calc(100% - 32px);
  box-sizing: border-box;
}

#content-container .edit-container .status-container .status-title {
  background: #eee;
  border-top: 1px solid #bbb;
  box-sizing: border-box;
  height: 25px;
  width: 100%;
  line-height: 25px;
  text-align: center;
}

#content-container .edit-container .status-container select {
  width: 100%;
  box-sizing: border-box;
  height: calc(100% - 25px);
  border: none;
  border-radius: 0px;
  font-size: 16px;
  text-align: center;
}

#content-container .edit-container .time-container {
  width: 50%;
}

#content-container .edit-container .time-container .time-title {
  background: #eee;
  border-top: 1px solid #bbb;
  box-sizing: border-box;
  height: 25px;
  width: 100%;
  line-height: 25px;
  text-align: center;
}

#content-container .edit-container .time-container input {
  width: 100%;
  box-sizing: border-box;
  height: calc(100% - 25px);
  border: none;
  border-radius: 0px;
  font-size: 16px;
  text-align: center;
}

#content-container .download-container {
  width: 30%;
  height: 100px;
  border: 1px solid #eee;
  border-left: 1px solid #bbb;
  box-sizing: border-box;
  margin-top: 15px;
}

#content-container .download-container .download-title {
  height: 32px;
  line-height: 32px;
  text-align: center;
  background: #eee;
  width: 100%;
}

#content-container .download-container .download {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 32px);
  font-size: 20px;
  transition: background .1s linear;
}

#content-container .download-container .download i {
  margin-right: 5px;
}

#content-container .download-container .download:hover {
  cursor: pointer;
  background: #eee;
}
</style>
