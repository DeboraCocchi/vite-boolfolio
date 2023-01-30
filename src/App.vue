<script>
import axios from 'axios'
import {apiUrl} from './data/data'
import AppHeader from '../src/components/AppHeader.vue';


export default {
  name:'App',
  data(){
    return{
      apiUrl,
      project:[]

  }},
  components:{
    AppHeader,
 
  },
  // methods:{
  //   getProjects(){
  //     axios.get(apiUrl)
  //     .then(result =>{
  //       // console.log(result.data.projects.data);
  //       console.log(result.data.projects);
  //       this.projects= result.data.projects;
  //     })
  //     .catch( err=>{
  //       console.log('Si è verificato un errore');
  //     })
  //   },
    
  // },
  // mounted(){
  //   this.getProjects();
  // }
}
</script>

<template>
<AppHeader></AppHeader>
  <main>
    <router-view></router-view>
  </main>
  
</template>

<style scoped>
  main{
    position:relative;
    top:60px;
  }
</style>
