import { defineStore } from "pinia";

export const usetAuthStore = defineStore('auth', {
  state: () => ({
    count:0,
    name:'mark'
  }),
  actions:{
    countUp(){
      this.count++
    }
  }
})

