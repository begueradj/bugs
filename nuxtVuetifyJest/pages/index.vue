<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div class="text-xs-center">
        <book-example />
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import BookExample from '~/components/BookExample.vue'

export default {
  components: {
    BookExample
  }
}
</script>
