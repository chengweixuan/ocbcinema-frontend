<template>
  <q-page padding>
    <div class="column items-center q-gutter-lg">
      <br />
      <br />

      <div class="text-h5" style="color: #911717;">
        Congratulations! You have booked a seat at OCBCinema!
      </div>

      <div class="text-h6" style="color: #911717;">
        Your Seat Details Are:
      </div>

      <div class="column">
        <div class="text-h7" style="color: #911717;">
          Seat Number: {{seatNo}}
        </div>
        <div class="text-h7" style="color: #911717;">
          Name: {{name}}
        </div>
      </div>

      <div class="text-h7" style="color: #911717;">
        A confirmation email has been sent to your email at: {{email}}
      </div>

      <q-btn label="Back" color="red-6" @click="goBack()" />

      <div class="column items-center">
        <div class="col text-h7" >
          Made by Cheng Weixuan
        </div>

        <a class="col text-h7" href="https://github.com/chengweixuan">
          GitHub: chengweixuan
        </a>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Result",
  props: {
    seatNo: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  },
  methods: {
    goBack: function (event) {
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>

<style scoped>

</style>
