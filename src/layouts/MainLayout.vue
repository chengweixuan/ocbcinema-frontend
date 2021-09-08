<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="text-white" style="background: rgba(227,41,41,0.98);">
      <div class="column justify-center items-center q-gutter-lg q-pa-md">
        <div class="col-3">
        </div>

        <div class="col text-h3" style="color: #EDF2F4;">
          OCBCinema
        </div>

        <div class="col">
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
        </div>

        <div class="col text-h7" style="color: #EDF2F4;">
          Book your seats now at the one and only OCBCinema!
        </div>
      </div>
    </q-header>

    <q-page-container>
      <router-view/>
    </q-page-container>

  </q-layout>
</template>

<script>

import {defineComponent, ref} from 'vue'

export default defineComponent({
  name: 'MainLayout'

})
</script>
