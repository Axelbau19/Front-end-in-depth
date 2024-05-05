<template>
  <div>
    {{ text }}
    <br>
    <button @click="show = !show">Menu</button>
    <transition name="fade">
      <Menu v-show="show" />
    </transition>
    <Modal/>
    {{ algo }}
    <user-repository-vue :user="Axel"/>
    <Home/>
    <ReactiveRef/>
    <Watcher/>
    <computed/>
    <use-props first-name="Alexis" last-name="Rosales"/>
    <Context first-name="Axel" last-name="Bau" otro="Valo1"/>
    <provide-inject firstName="Neskz" lastName="Neskz"/>
    <template-ref/>
    <setup/>
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import Modal from "./components/Modal.vue";
import base from "@/mixins/base"
import UserRepositoryVue from './components/UserRepository.vue';
import Home from './components/Home.vue';
import ReactiveRef from "./components/ReactiveRef.vue";
import Watcher from "./components/Watcher.vue";
import Computed from './components/Computed.vue';
import UseProps from './components/UseProps.vue';
import Context from './components/Context.vue';
import ProvideInject from './components/ProvideInject.vue';
import { provide } from "vue";
import TemplateRef from './components/TemplateRef.vue';
import Setup from './components/Setup.vue';
export default {
  name: "App",
  mixins: [base],
  components: { Menu,Modal, UserRepositoryVue, Home, ReactiveRef, Watcher, Computed, UseProps, Context, ProvideInject, TemplateRef, Setup },
  setup(){
      provide("username","NeskzScott");
  },
  data() {
    return {
      text: "Hola vue",
      show: false,
    };
  },
  //Hooks de ciclo de vida
  beforeCreate(){
    console.log("beforeCreate",this.$data, this.$el);
  },
  created(){
    console.log("created",this.$data, this.$el);
  },
  beforeMount(){
    console.log("beforeMount:",this.$data, this.$el);
  },
  mounted(){
    console.log("mounted",this.$data, this.$el);
  },
  updated(){
    console.log("updated: ",this.$data, this.$el);
  },
  beforeUpdate(){
    console.log("beforeUpdated: ",this.$data, this.$el);
  },
  beforeUnmount(){
    console.log("beforeUnmounted",this.$data, this.$el);
  },
  unmounted(){
    console.log("unmounted",this.$data, this.$el);
  },



};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-leave-to{
  opacity: 0;
}

.fade-leave-active,
.fade-enter-active {
  transition: opacity 0.5s ease;
}
</style>
