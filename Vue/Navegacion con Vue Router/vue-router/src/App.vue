<script setup>

</script>

<template>
  <div>
    <!--Sirve el : para que  identificar el atributos un objeto json-->
    <router-link :to="{name : 'home'}">home</router-link>
    <router-link :to="{name: 'about'}">about</router-link>
    <router-link to="/chats">chats</router-link>
    <router-link to="/session">session</router-link>
    <router-view/>
  </div>
</template>

<style scoped>

</style>
