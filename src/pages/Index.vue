<template>
  <q-page class="page-bg" padding>
    <div class="column items-center q-gutter-lg">
      <br />
      <br />
      <div class="text-h5" style="color: #911717;">
        Now Showing: The Shawshank Redemption
      </div>

      <div class="text-h6" style="color: #911717;">
        Available Seats
      </div>

      <q-spinner-ios v-if="!isSeatsLoaded" color="red" size="6em"/>
      <div v-if="isSeatsLoaded" class="row q-gutter-sm">

        <q-btn v-if="checkEmpty(1)" round color="green" icon="event_seat" />
        <q-btn v-if="!checkEmpty(1)" round color="red" icon="event_seat" />
        <q-btn v-if="checkEmpty(2)" round color="green" icon="event_seat" />
        <q-btn v-if="!checkEmpty(2)" round color="red" icon="event_seat" />
        <q-btn v-if="checkEmpty(3)" round color="green" icon="event_seat" />
        <q-btn v-if="!checkEmpty(3)" round color="red" icon="event_seat" />
        <q-btn v-if="checkEmpty(4)" round color="green" icon="event_seat" />
        <q-btn v-if="!checkEmpty(4)" round color="red" icon="event_seat" />
        <q-btn v-if="checkEmpty(5)" round color="green" icon="event_seat" />
        <q-btn v-if="!checkEmpty(5)" round color="red" icon="event_seat" />
        <div class="row-xl" />
        <div class="row-xl" />
        <div class="row-xl" />
        <q-btn v-if="checkEmpty(6)" round color="green" icon="event_seat" />
        <q-btn v-if="!checkEmpty(6)" round color="red" icon="event_seat" />
        <q-btn v-if="checkEmpty(7)" round color="green" icon="event_seat" />
        <q-btn v-if="!checkEmpty(7)" round color="red" icon="event_seat" />
        <q-btn v-if="checkEmpty(8)" round color="green" icon="event_seat" />
        <q-btn v-if="!checkEmpty(8)" round color="red" icon="event_seat" />
        <q-btn v-if="checkEmpty(9)" round color="green" icon="event_seat" />
        <q-btn v-if="!checkEmpty(9)" round color="red" icon="event_seat" />
        <q-btn v-if="checkEmpty(10)" round color="green" icon="event_seat" />
        <q-btn v-if="!checkEmpty(10)" round color="red" icon="event_seat" />
      </div>
      <dev class="text-h7" >
        {{seats[1]}}
      </dev>

      <br />
    </div>
  </q-page>
</template>

<script>
import axios from 'axios'

const localhost = 'http://localhost:8080/'
const cloud = 'https://smollink-heroku.herokuapp.com'
// API endpoint(s)
const BACKEND_URL = localhost

const backendInstance = axios.create({
  baseURL: BACKEND_URL,
  proxy: false,
  timeout: 0
});

export default {
  name: 'home',
  data: function () {
    return{
      seats: [],
      test: '',
      isSeatsLoaded: false
    }
  },
  methods: {
    getTest: function () {
      return backendInstance.get('/testString')
    },
    getSeats: function () {
      return backendInstance.get('/getSeats')
    },
    checkEmpty: function (seat) {
      if (this.isSeatsLoaded) {
        return this.seats[seat].booked === false;
      }
      return false
    }
  },
  created: function () {
    const that = this
    this.getTest()
    .then(response => {
      this.test = response.data
      console.log(this.test)
    })

    this.getSeats()
    .then(response => {
      this.seats = response.data
      this.isSeatsLoaded = true
    })
  }
}
</script>

<style>
.page-bg {
  background-color: #fdfdfd;
}
</style>
