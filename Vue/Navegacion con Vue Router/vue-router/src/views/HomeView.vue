<script >
export default {
  data(){
    return {
      username: ""
    }
  }
}
</script>

<template>
  <main>
    <h3>Introduce tu nombre de usuario</h3>
    <input placeholder="Username" v-model="username">
    <h3>Introduce la contraseña</h3>
    <input placeholder="Password" v-model="username">
  </main>
</template>
