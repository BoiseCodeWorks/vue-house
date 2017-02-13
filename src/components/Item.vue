<template>
<div class="room-item" draggable="true" v-on:dragstart.capture="moving">
  <img :src="item.icon" alt="" @click="getDets" v-on:dragend="removeItem">
</div>
</template>

<script>
export default {
  props: ['item', 'items'],
  methods:{
    getDets(){
      console.log(this.item.description)
    },
    moving(event){
      console.log(event)
      event.dataTransfer.setData('text/javascript', JSON.stringify(this.item))
      console.log('We are moving')
    },
    removeItem(){
      let i = this.items.indexOf(this.item)
      this.items.splice(i, 1)
    }
  }
}
</script>


<style lang="stylus">
img
  height: 20px
</style>