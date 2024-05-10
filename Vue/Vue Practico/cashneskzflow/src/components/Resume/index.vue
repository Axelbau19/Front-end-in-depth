<template>
    <main>
        <p >{{labelVisual}}</p>
        <h1 :class="{'red':negativeAmount, 'green':positiveAmount }">{{amountDivisa}}</h1>
        <div class="graphic">
            <slot name="graphic"></slot>
        </div>
        <div class="action">
            <slot name="action"></slot>
        </div>
    </main>
</template>

<script>
const divisa = new Intl.NumberFormat("es-MX",{
    style:"currency",
    currency:"MXN",
});
export default{
    props:{
        totalLabel:{
            type: String
        },
        label:{
            type: String,
            default: null
        },
        totalAmount:{
            type: Number
        },
        amount:{
            type: Number,
            default: null
        },
        date:{
            type: String,
            default: null
        }
    },
    //Aqui es el cambio de color
    computed:{
        amountVisual(){
            return this.amount != null ? this.amount: this.totalAmount;
        },
        labelVisual(){
            return this.label != null ? this.label: this.totalLabel;
        },
        amountDivisa(){
            return divisa.format(this.amountVisual)
        },
        negativeAmount(){
            return this.amount <0 || this.totalAmount<0;
        },
        positiveAmount(){
            return this.amount >0 || this.totalAmount>0;
        }
    }
}
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
h1,
p {
  margin: 0;
  text-align: center;
}
h1 {
  margin-top: 14px;
  color: var(--brand-green);
}
.graphic {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 48px 24px;
  box-sizing: border-box;
}
.red {
    color: red;
}
.green {
    color: green;
}
</style>