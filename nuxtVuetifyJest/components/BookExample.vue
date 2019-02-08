<template>
  <v-container
    grid-list-md
    text-xs-center
    fill-height
  >
    <v-layout
      row
      wrap
      align-center
    >
      <v-flex
        xs12
      >
        <h4> {{ title }}</h4>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'BookExample',
  data() {
    return {
      title: 'Mastering Metasploit'
    }
  }
}
</script>
