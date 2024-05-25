<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
 const username = ref()
 const router = useRouter()
 function iniciarSesion(){
  router.push({name:'about'})
 }
</script>


<template>
  <main>
    <h3>Introduce tu nombre de usuario</h3>
    <input placeholder="Username" v-model="username">
    <button @click="iniciarSesion">Iniciar sesion</button>
  </main>
</template>
