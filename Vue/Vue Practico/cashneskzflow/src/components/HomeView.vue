<template>
    <Layout>
        <template #header>
            <Header></Header>
        </template>
        <template #resume>
            <Resume :totalLabel="'Ahorro Total'" :label="label" :amount="amount" :total-Amount="totalAmount" >
                <template #graphic>
                    <Graphic :amounts="amounts" @select="select" />
                </template>
                <template #action>
                    <Action @create="create"/>
                </template>
            </Resume>
        </template>
        <template #movements>
            <Movements :movements="movements" @remove="remove"/>
        </template>
    </Layout>
</template>

<script>
import Layout from "./Layout.vue";
import Header from "./Header.vue";
import Resume from "./Resume/index.vue"
import Movements from "./Movements/index.vue"
import Action from "./Action.vue"
import Graphic from "./Resume/Graphic.vue"
export default{
    data(){
        return{
            amount:null,
            label: null,
            movements: []
        }
    },
    computed:{
        amounts(){
            const listLastDays =this.movements.filter(m=>{
                const today = new Date()
                const oldDate = today.setDate(today.getDate()-30)
                return m.time > oldDate;
                }).map(m=> m.amountEnter)
            return listLastDays.map((m,i)=>{
                const lastMovements = listLastDays.slice(0,i+1);
                return lastMovements.reduce((suma,movement) =>{
                    return suma + movement
                },0);
            })
        },
        totalAmount() {
            return this.movements.reduce((suma, m) => {
                 return suma + m.amountEnter;
            }, 0);
        }
    },
    mounted(){
        const movements = JSON.parse(localStorage.getItem("movements"));
        if(Array.isArray(movements)){
        this.movements = movements.map(m => {
            return{...m, time: new Date(m.time)}

        });
        }
    },
    methods:{
        create(movement){
            this.movements.push(movement);
            this.save();
        },
        remove(id){
            const index = this.movements.findIndex(m=>m.id===id);
            this.movements.splice(index,1);
            this.save()
        },
        save(){
            localStorage.setItem("movements",JSON.stringify(this.movements));
        },
        select(el){
            this.amount = el
        }
    },
    components:{
        Layout,
        Header,
        Resume,
        Movements,
        Action,
        Graphic
    }
}
</script>