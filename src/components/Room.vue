<template>
  <div class="room" :style="{
    height: room.dimensions.height * 10 + 'px', 
    width: room.dimensions.width * 10 + 'px'
    }" droppable="true" v-on:drop.capture="addItem" ondragover="event.preventDefault()">
      <div class="room-details">
        <h4 class="name">{{room.name}}</h4>

        <div class="room-controls">
          <input type="text" v-model="room.dimensions.height">
          <span class="by">X</span>
          <input type="text" v-model="room.dimensions.width">
        </div>

        <div class="room-items">
          <item v-for="currentItem in room.items" :item="currentItem" :items="room.items"></item>
        </div>
      </div>
  </div>

</template>

<script>
import Item from './Item'

export default {
  name: 'room',
  props: ['room'],
  data(){
    return {
      
    }
  },
  components: {
    Item
  },
  methods: {
    addItem(event){
      var item = JSON.parse(event.dataTransfer.getData('text/javascript'))
      this.room.items.push(item)
    }
  }
}

</script>

<style lang="stylus">
.room
  position: relative
  border: 1px dashed
  padding: 1px
  min-width: 50px
  min-height: 50px
  display: inline-block
  .room-details
    display: flex
    flex-flow: row wrap
    width: 100%
    height: 100%
    .name
      position: absolute
      bottom: 15px
      right: 10px
      color: rgba(25, 25, 25, .3)
      user-select: none
      z-index: -9999
    .room-controls
      flex: 1 100%
      input
        background: transparent
        border: none
        width: 20px
      .by
        font-size: larger
        font-weight: bold
        margin: 0 3px
    .room-items
      display: flex
      flex-wrap: wrap
      width: 100%
      height: 100%
      justify-content: space-around
</style>