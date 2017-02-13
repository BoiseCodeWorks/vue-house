<template>
  <div class="room" :style="{
    height: room.dimensions.height * 10 + 'px', 
    width: room.dimensions.width * 10 + 'px'
    }">
    <input type="text" v-model="room.dimensions.height">
    <span>X</span>
    <input type="text" v-model="room.dimensions.width">
    <h2>{{room.name}}</h2>
  </div>
</template>

<script>
export default {
  name: 'room',
  props: ['room'],
  data(){
    return {
      test: 'Hello this is the room'
    }
  }
}
</script>

<style>
</style>