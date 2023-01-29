<script>
import axios from 'axios'
import {apiUrl} from './data/data'
import AppHeader from '../src/components/AppHeader.vue';
import AppMain from '../src/components/AppMain.vue';
export default {
  name:'App',
  data(){
    return{
      apiUrl,
      project:[]

  }},
  components:{
    AppHeader,
    AppMain,
 
  },
  methods:{
    getProjects(){
      axios.get(apiUrl)
      .then(result =>{
        console.log(result.data.projects.data);
        this.projects= result.data.projects.data;
      })
      .catch( err=>{
        console.log('Si è verificato un errore');
      })
    },
    
  },
  mounted(){
    this.getProjects();
  }
}
</script>

<template>
<AppHeader></AppHeader>
  <main>
    <AppMain></AppMain>
  </main>
  
</template>

<style scoped>
  main{
    position:relative;
    top:80px;
  }
</style>
