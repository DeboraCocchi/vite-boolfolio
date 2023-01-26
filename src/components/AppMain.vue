<script>
import {store} from '../data/store'
import ProjectCard from './ProjectCard.vue'

export default {
  name:'AppMain',
  components:{
    ProjectCard
  },
  data(){
    return{
    store
    }
  },
 
}
</script>
<template>
  <h2 class="mt-4 pt-5 text-primary">I tuoi progetti</h2>
  <div class="container-fluid">
    <div class="row">
    <ProjectCard v-for="project in store.projects" :project="project" :key="project.id"></ProjectCard>
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