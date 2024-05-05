<template>
    <header>
        <img 
            @click="refreshPage"
            src="@/assets/cashflow-icon.svg" 
            alt="Logo"
        />
        <h1><Span>Neskz</Span> CashFlow</h1>
        <Span></Span>
    </header>
</template>
<script>
export default{
    methods:{
        refreshPage(){
            location.reload();
        }
    }
}
</script>
<style scoped>
.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
}
img{
  width: 40px;
  margin-left: 70px;
}
span {
  width: 48px;
}
h1 {
  font-size: 1.4rem;
  color: var(--brand-blue);
}
h1 span {
  color: var(--brand-green);
}
</style>