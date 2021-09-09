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
        <q-btn v-if="checkEmpty(2)" round color="green" icon="event_seat" @click="openBookingWindow(2)"/>
        <q-btn v-if="!checkEmpty(2)" round color="red" icon="event_seat" @click="showBookedSeat(2)"/>
        <q-btn v-if="checkEmpty(3)" round color="green" icon="event_seat" @click="openBookingWindow(3)"/>
        <q-btn v-if="!checkEmpty(3)" round color="red" icon="event_seat" @click="showBookedSeat(3)"/>
        <q-btn v-if="checkEmpty(4)" round color="green" icon="event_seat" @click="openBookingWindow(4)"/>
        <q-btn v-if="!checkEmpty(4)" round color="red" icon="event_seat" @click="showBookedSeat(4)"/>
        <q-btn v-if="checkEmpty(5)" round color="green" icon="event_seat" @click="openBookingWindow(5)"/>
        <q-btn v-if="!checkEmpty(5)" round color="red" icon="event_seat" @click="showBookedSeat(5)"/>
        <div class="row-xl" />
        <div class="row-xl" />
        <div class="row-xl" />
        <q-btn v-if="checkEmpty(6)" round color="green" icon="event_seat" @click="openBookingWindow(6)"/>
        <q-btn v-if="!checkEmpty(6)" round color="red" icon="event_seat" @click="showBookedSeat(6)"/>
        <q-btn v-if="checkEmpty(7)" round color="green" icon="event_seat" @click="openBookingWindow(7)"/>
        <q-btn v-if="!checkEmpty(7)" round color="red" icon="event_seat" @click="showBookedSeat(7)"/>
        <q-btn v-if="checkEmpty(8)" round color="green" icon="event_seat" @click="openBookingWindow(8)"/>
        <q-btn v-if="!checkEmpty(8)" round color="red" icon="event_seat" @click="showBookedSeat(8)"/>
        <q-btn v-if="checkEmpty(9)" round color="green" icon="event_seat" @click="openBookingWindow(9)"/>
        <q-btn v-if="!checkEmpty(9)" round color="red" icon="event_seat" @click="showBookedSeat(9)"/>
        <q-btn v-if="checkEmpty(10)" round color="green" icon="event_seat" @click="openBookingWindow(10)"/>
        <q-btn v-if="!checkEmpty(10)" round color="red" icon="event_seat" @click="showBookedSeat(10)"/>
      </div>

      <div v-if="isSeatsLoaded" class="row q-gutter-sm">
        <q-btn v-if="checkEmpty(11)" round color="green" icon="event_seat" @click="openBookingWindow(11)"/>
        <q-btn v-if="!checkEmpty(11)" round color="red" icon="event_seat" @click="showBookedSeat(11)" />
        <q-btn v-if="checkEmpty(12)" round color="green" icon="event_seat" @click="openBookingWindow(12)"/>
        <q-btn v-if="!checkEmpty(12)" round color="red" icon="event_seat" @click="showBookedSeat(12)"/>
        <q-btn v-if="checkEmpty(13)" round color="green" icon="event_seat" @click="openBookingWindow(13)"/>
        <q-btn v-if="!checkEmpty(13)" round color="red" icon="event_seat" @click="showBookedSeat(13)"/>
        <q-btn v-if="checkEmpty(14)" round color="green" icon="event_seat" @click="openBookingWindow(14)"/>
        <q-btn v-if="!checkEmpty(14)" round color="red" icon="event_seat" @click="showBookedSeat(14)"/>
        <q-btn v-if="checkEmpty(15)" round color="green" icon="event_seat" @click="openBookingWindow(15)"/>
        <q-btn v-if="!checkEmpty(15)" round color="red" icon="event_seat" @click="showBookedSeat(15)"/>
        <div class="row-xl" />
        <div class="row-xl" />
        <div class="row-xl" />
        <q-btn v-if="checkEmpty(16)" round color="green" icon="event_seat" @click="openBookingWindow(16)"/>
        <q-btn v-if="!checkEmpty(16)" round color="red" icon="event_seat" @click="showBookedSeat(16)"/>
        <q-btn v-if="checkEmpty(17)" round color="green" icon="event_seat" @click="openBookingWindow(17)"/>
        <q-btn v-if="!checkEmpty(17)" round color="red" icon="event_seat" @click="showBookedSeat(17)"/>
        <q-btn v-if="checkEmpty(18)" round color="green" icon="event_seat" @click="openBookingWindow(18)"/>
        <q-btn v-if="!checkEmpty(18)" round color="red" icon="event_seat" @click="showBookedSeat(18)"/>
        <q-btn v-if="checkEmpty(19)" round color="green" icon="event_seat" @click="openBookingWindow(19)"/>
        <q-btn v-if="!checkEmpty(19)" round color="red" icon="event_seat" @click="showBookedSeat(19)"/>
        <q-btn v-if="checkEmpty(20)" round color="green" icon="event_seat" @click="openBookingWindow(20)"/>
        <q-btn v-if="!checkEmpty(20)" round color="red" icon="event_seat" @click="showBookedSeat(20)"/>
      </div>

      <div v-if="isSeatsLoaded" class="row q-gutter-sm">
        <q-btn v-if="checkEmpty(21)" round color="green" icon="event_seat" @click="openBookingWindow(21)"/>
        <q-btn v-if="!checkEmpty(21)" round color="red" icon="event_seat" @click="showBookedSeat(21)" />
        <q-btn v-if="checkEmpty(22)" round color="green" icon="event_seat" @click="openBookingWindow(22)"/>
        <q-btn v-if="!checkEmpty(22)" round color="red" icon="event_seat" @click="showBookedSeat(22)"/>
        <q-btn v-if="checkEmpty(23)" round color="green" icon="event_seat" @click="openBookingWindow(23)"/>
        <q-btn v-if="!checkEmpty(23)" round color="red" icon="event_seat" @click="showBookedSeat(23)"/>
        <q-btn v-if="checkEmpty(24)" round color="green" icon="event_seat" @click="openBookingWindow(24)"/>
        <q-btn v-if="!checkEmpty(24)" round color="red" icon="event_seat" @click="showBookedSeat(24)"/>
        <q-btn v-if="checkEmpty(25)" round color="green" icon="event_seat" @click="openBookingWindow(25)"/>
        <q-btn v-if="!checkEmpty(25)" round color="red" icon="event_seat" @click="showBookedSeat(25)"/>
        <div class="row-xl" />
        <div class="row-xl" />
        <div class="row-xl" />
        <q-btn v-if="checkEmpty(26)" round color="green" icon="event_seat" @click="openBookingWindow(26)"/>
        <q-btn v-if="!checkEmpty(26)" round color="red" icon="event_seat" @click="showBookedSeat(26)"/>
        <q-btn v-if="checkEmpty(27)" round color="green" icon="event_seat" @click="openBookingWindow(27)"/>
        <q-btn v-if="!checkEmpty(27)" round color="red" icon="event_seat" @click="showBookedSeat(27)"/>
        <q-btn v-if="checkEmpty(28)" round color="green" icon="event_seat" @click="openBookingWindow(28)"/>
        <q-btn v-if="!checkEmpty(28)" round color="red" icon="event_seat" @click="showBookedSeat(28)"/>
        <q-btn v-if="checkEmpty(29)" round color="green" icon="event_seat" @click="openBookingWindow(29)"/>
        <q-btn v-if="!checkEmpty(29)" round color="red" icon="event_seat" @click="showBookedSeat(29)"/>
        <q-btn v-if="checkEmpty(30)" round color="green" icon="event_seat" @click="openBookingWindow(30)"/>
        <q-btn v-if="!checkEmpty(30)" round color="red" icon="event_seat" @click="showBookedSeat(30)"/>
      </div>

      <br />

      <q-btn push label="Reset Seats" color="red-6" @click="resetSeats()" />

      <div class="column items-center">
        <div class="col text-h7" >
          Made by Cheng Weixuan
        </div>

        <a class="col text-h7" href="https://github.com/chengweixuan">
          GitHub: chengweixuan
        </a>
      </div>
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

    <q-dialog v-model="invalid">
      <q-card>
        <q-card-section class="bg-red">
          <div class="text-h6">Invalid Email</div>
        </q-card-section>

        <q-card-section class="">
          Please enter a valid email address
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
          <q-btn flat push label="Cancel" color="grey-10" v-close-popup />
          <q-btn flat push label="Book Seat" color="red-6" @click="bookSeat()" :loading="booking">
            <template v-slot:loading>
              <q-spinner-ios />
            </template>
          </q-btn>
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

/*
 This section is used for configuring connection to back end
 */
const localhost = 'http://localhost:8080/'
const cloud = 'https://ocbcinema-backend.herokuapp.com'
// API endpoint(s)
const BACKEND_URL = cloud

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
      vacancy: [],
      test: '',
      isSeatsLoaded: false,
      isSeatBooked: false,
      bookedSeat: 0,
      isBookingWindow: false,
      name: '',
      email: '',
      empty: false,
      booking: false,
      invalid: false
    }
  },
  methods: {
    /*
    GET request to back end for current state of cinema
     */
    getSeats: function () {
      return backendInstance.get('/getSeats')
    },
    /*
    POST request to back end to book a seat
     */
    bookSeatRequest: function (seatNo, name, email) {
      const formData = new FormData()
      formData.append('seatNo', seatNo)
      formData.append('name', name)
      formData.append('email', email)
      return backendInstance.post('/bookSeat', formData)
    },
    /*
    Called to reset all seats to empty
     */
    resetSeats: function () {
      backendInstance.get('/clear')
      this.isSeatsLoaded = false
      this.getSeats()
        .then(response => {
          this.seats = response.data
          this.isSeatsLoaded = true
        })
    },
    /*
    Called to check the booking status for each seat to display seat status to user
     */
    checkEmpty: function (seat) {
      if (this.isSeatsLoaded) {
        return !this.seats[seat].booked
      }
      return false
    },
    /*
    Calls seat booking window
     */
    showBookedSeat: function (seat) {
      this.isSeatBooked = true
      this.bookedSeat = seat
    },
    openBookingWindow: function (seat) {
      this.isBookingWindow = true
      this.bookedSeat = seat
    },
    /*
    Called when user enters the form to book a seat
    Calls bookSeatRequest to back end
    Handles bad HTTP response status and informs the user accordingly
     */
    bookSeat: function () {
      const seat = this.bookedSeat
      const name = this.name
      const email = this.email
      this.booking = true

      if (email === '' || name === '') {
        this.empty = true
        this.booking = false
      } else {
        const that = this
        this.bookSeatRequest(seat, name, email)
        .then(response => {
          const seatId = response.data.id
          console.log(seatId)
          this.isBookingWindow = false

          this.$router.push({
            name: 'result',
            params: {
              seatNo: seat,
              name: name,
              email: email
            }
          })
        }).catch(error => {
          const status = error.response.status

          if (status === 409) {
            this.isBookingWindow = false
            this.isSeatBooked = true
          } else if (status === 404) {
            console.log("seat not found")
          } else if (status === 500) {
            this.invalid = true
          }
        }).finally(_ => {
          this.booking = false
        })
      }
    }
  },
  /*
  Called upon startup to update seats to user
   */
  created: function () {
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
