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

        <q-btn v-if="checkEmpty(1)" round color="green" icon="event_seat" @click="openBookingWindow(1)"/>
        <q-btn v-if="!checkEmpty(1)" round color="red" icon="event_seat" @click="showBookedSeat(1)" />
        <q-btn v-if="checkEmpty(2)" round color="green" icon="event_seat" />
        <q-btn v-if="!checkEmpty(2)" round color="red" icon="event_seat" @click="showBookedSeat(2)"/>
        <q-btn v-if="checkEmpty(3)" round color="green" icon="event_seat" />
        <q-btn v-if="!checkEmpty(3)" round color="red" icon="event_seat" @click="showBookedSeat(3)"/>
        <q-btn v-if="checkEmpty(4)" round color="green" icon="event_seat" />
        <q-btn v-if="!checkEmpty(4)" round color="red" icon="event_seat" @click="showBookedSeat(4)"/>
        <q-btn v-if="checkEmpty(5)" round color="green" icon="event_seat" />
        <q-btn v-if="!checkEmpty(5)" round color="red" icon="event_seat" @click="showBookedSeat(5)"/>
        <div class="row-xl" />
        <div class="row-xl" />
        <div class="row-xl" />
        <q-btn v-if="checkEmpty(6)" round color="green" icon="event_seat" />
        <q-btn v-if="!checkEmpty(6)" round color="red" icon="event_seat" @click="showBookedSeat(6)"/>
        <q-btn v-if="checkEmpty(7)" round color="green" icon="event_seat" />
        <q-btn v-if="!checkEmpty(7)" round color="red" icon="event_seat" @click="showBookedSeat(7)"/>
        <q-btn v-if="checkEmpty(8)" round color="green" icon="event_seat" />
        <q-btn v-if="!checkEmpty(8)" round color="red" icon="event_seat" @click="showBookedSeat(8)"/>
        <q-btn v-if="checkEmpty(9)" round color="green" icon="event_seat" />
        <q-btn v-if="!checkEmpty(9)" round color="red" icon="event_seat" @click="showBookedSeat(9)"/>
        <q-btn v-if="checkEmpty(10)" round color="green" icon="event_seat" />
        <q-btn v-if="!checkEmpty(10)" round color="red" icon="event_seat" @click="showBookedSeat(10)"/>
      </div>
      <div class="text-h7" >
        {{seats[1]}}
      </div>

      <br />
    </div>

    <q-dialog v-model="isSeatBooked">
      <q-card>
        <q-card-section class="bg-red">
          <div class="text-h6">Booking Unavailable</div>
        </q-card-section>

        <q-card-section class="">
          Seat is already booked!
        </q-card-section>

        <q-card-actions class="popup-bg" align="right">
          <q-btn flat label="OK" color="red-6" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog persistent v-model="isBookingWindow" class="q-pa-xl">
      <q-card>
        <q-card-section class="bg-red" style="min-width: 300px">
          <div class="text-h6">Booking Seat at OCBCinema</div>
        </q-card-section>

        <q-card-section class="">
          <div class="text-h6">Booking for seat {{bookedSeat}}</div>
          <q-input v-model="name" label="Enter your name" />
          <q-input v-model="email" label="Enter your email" />
        </q-card-section>

        <q-card-actions class="popup-bg row" align="right">
          <q-btn flat label="Cancel" color="grey-10" v-close-popup />
          <q-btn flat label="Book Seat" color="red-6" @click="bookSeat()" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="empty">
      <q-card>
        <q-card-section class="bg-red">
          <div class="text-h6">Empty Fields</div>
        </q-card-section>

        <q-card-section>
          Please fill your name and email to book your seat
        </q-card-section>

        <q-card-actions class="popup-bg" align="right">
          <q-btn flat label="OK" color="red-6" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
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
      isSeatsLoaded: false,
      isSeatBooked: false,
      bookedSeat: 0,
      isBookingWindow: true,
      name: '',
      email: '',
      empty: false
    }
  },
  methods: {
    getTest: function () {
      return backendInstance.get('/testString')
    },
    getSeats: function () {
      return backendInstance.get('/getSeats')
    },
    bookSeatRequest: function (seatNo, name, email) {
      const formData = new FormData()
      formData.append('seatNo', seatNo)
      formData.append('seatNo', seatNo)
      formData.append('seatNo', seatNo)
      return backendInstance.post('/getCustomURL', formData)
    }
    checkEmpty: function (seat) {
      if (this.isSeatsLoaded) {
        return this.seats[seat].booked === false;
      }
      return false
    },
    showBookedSeat: function (seat) {
      this.isSeatBooked = true
      this.bookedSeat = seat
    },
    openBookingWindow: function (seat) {
      this.isBookingWindow = true
    },
    bookSeat: function () {
      const seat = this.bookedSeat
      const name = this.name
      const email = this.email

      if (email === '' || name === '') {
        this.empty = true
      } else {

      }
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
