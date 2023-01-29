<script>
import axios from 'axios'
import {apiUrl} from '../data/data'
import ProjectCard from './ProjectCard.vue'

export default {
  name:'AppMain',
  components:{
    ProjectCard
  },
  data(){
    return{
      apiUrl,
      projects_collection:[]
    }
  },
  methods:{
        getProjects(){
            axios.get(apiUrl)

        .then(result =>{
            console.log(result);
            this.projects_collection= result.data.projects.data;
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
  <h2 class="mt-4 pt-5 text-primary">I tuoi progetti</h2>
  <div class="container-fluid">
    <div class="row">
    <ProjectCard v-for="project in this.projects_collection" :project="project" :key="project.id"></ProjectCard>
  </div>


  

  </div>
  
</template>
<style scoped lang="scss">
  .row{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>