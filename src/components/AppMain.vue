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
          console.log(result.data);
            this.projects_collection= result.data
        })
        .catch( err=>{
            console.log('Si è verificato un errore');
        })
        },
  },
    mounted(){
      console.log('montato');
        this.getProjects();
    }
 
}
</script>
<template>
  <h1 class="purple">I tuoi progetti</h1>
  <div class="row justify-content-between">
            <ProjectCard v-for="project in this.projects_collection" :project="project" :key="project.id"></ProjectCard>
      </div>


  

  
</template>
<style scoped lang="scss">
  .row{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>