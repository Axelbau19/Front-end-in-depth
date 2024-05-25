<script >
export default {
  data(){
    return {
      username: ""
    }
  },
  methods:{
    iniciarSesion(){
      //insertar un objeto JSON
      this.$router.push({
        path: '/chats',
        //mandar variables
        query:{
          var1 : 2
        },
        //evita generar nuevos puntos
        replace: true
      })
      //Numero de pasos de navegacion 
      this.$router.go(1)
    }
  }
}
</script>

<template>
  <main>
    <h3>Introduce tu nombre de usuario</h3>
    <input placeholder="Username" v-model="username">
    <button @click="iniciarSesion">Iniciar sesion</button>
  </main>
</template>
