<template>
    <div>
        <button @click="showButtonModal=true">Agregar movimiento</button>
        <teleport to="#app">
            <FormMovement v-show="showButtonModal" @closeForm="showButtonModal = false">
                <form @submit.prevent="submit" >
                    <div class="field">
                        <label >Titulo del moviemiento</label>
                        <input type="text" v-model="title">
                    </div>
                    <div class="field">
                        <label >Monto</label>
                        <input type="number" v-model="amount">
                    </div>
                    <div class="field">
                        <label >Descripcion</label>
                        <textarea  row="4" v-model="description"></textarea>
                    </div>
                    <div class="field">
                        <label >Tipo de movimiento</label>
                        <label  class="radio-label">
                            <input type="radio" v-model="movementType" value="Ingreso">
                            <span>Ingreso</span>
                            <input type="radio" v-model="movementType" value="Gasto">
                            <span>Gasto</span>
                        </label>
                    </div>
                    <div class="action">
                        <button>Agregar Movimiento</button>
                    </div>
                </form>
            </FormMovement>
        </teleport>
    </div>
</template>

<script setup>
import { ref,defineEmits, define} from "vue"
import FormMovement from "./FormMovement.vue"
import { v4 as uuidv4 } from 'uuid';
const  showButtonModal= ref(false);
const title = ref("");
const amount = ref(0);
const description = ref("");
const movementType = ref("Ingreso");
const emit = defineEmits(['create']);
const submit = () => {
    showButtonModal.value = !showButtonModal.value;
    emit("create",{
      id: uniqueId(),
      title: title.value,
      description: description.value,
      amountEnter: movementType.value === "Ingreso" ? amount.value: -amount.value,
      time: new Date(),
    });
  title.value="";
  description.value="";
  amount.value=0;
  movementType.value="Ingreso"
};
function uniqueId (){
  return uuidv4();
}
</script>


<style scoped>
button {
  color: white;
  font-size: 1.25rem;
  background-color: var(--brand-blue);
  border: none;
  width: 100%;
  padding: 24px 60px;
  border-radius: 60px;
  box-sizing: border-box;
}

form {
  font-size: 1.24rem;
  width: 100%;
}

form .action {
  padding: 0 24px;
}

.field {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 16px 24px;
}

label {
  margin-bottom: 8px;
}

input,
textarea {
  font-size: 1.24rem;
  border: 2px solid var(--brand-blue);
  border-radius: 8px;
  padding: 8px;
}

input[type="number"] {
  text-align: right;
}

.radio-label {
  display: flex;
  align-items: center;
  margin-top: 8px;
}

.radio-label span {
  margin-top: 4px;
  margin-left: 8px;
}

input[type="radio"] {
  appearance: none;
  width: 1.24rem;
  height: 1.24rem;
  color: var(--brand-blue);
  border: 2px solid var(--brand-blue);
  border-radius: 50%;
}

input[type="radio"]:checked {
  background-color: var(--brand-blue);
}
</style>
