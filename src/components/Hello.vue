<template>

  <div class="house">
      <room class="room" v-for="r in house.rooms" :room="r"></room>
  </div>
</template>

<script>
import Room from './Room'
import house from '../house'

export default {
  name: 'hello',
  data () {
    return {
      house
    }
  },
  components: {
    Room
  }
}
</script>


<style lang="stylus">
.house
  border: 1px solid black
  padding: 1px
</style>