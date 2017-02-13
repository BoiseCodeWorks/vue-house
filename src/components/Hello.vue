<template>
  <div class="house">
      <room v-for="r in house.rooms" :room="r"></room>
  </div>
</template>

<script>
import Room from './Room'

export default {
  name: 'hello',
  data () {
    return {
      house: {
        rooms: [{
          name: 'Living Room',
          dimensions:{
            height: 10,
            width: 20
          }
        },{
          name: 'Master',
          dimensions:{
            height: 10,
            width: 10
          }
        }]
      }
    }
  },
  components: {
    Room
  }
}
</script>


<style lang="stylus">
.house
  width: 100%
  min-height: 800px
  border: 1px solid black

.room
  width: 200px
  height: 200px
  border: 1px dashed black
  display: inline-block

</style>