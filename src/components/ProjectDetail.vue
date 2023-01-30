<script>
import axios from 'axios'
import {apiUrl} from '../data/data'



export default {
    name: 'ProjectDetail',
    data(){
        return{
            apiUrl,
            project: {}
        }
    },
  
    methods:{
        getProjects(){
        axios.get(apiUrl+ this.$route.params.slug)
        .then(result =>{
          console.log(result.data);
            this.project= result.data;
          
        })
        .catch( err=>{
          console.log(err);
            console.log('Si è verificato un errore');
        })
        },
            manipulateDate(date){
                date=new Date()
                let y=date.getFullYear()

                let m=(date.getMonth())+1
                if(m<10){
                    m='0'+m
                }
                let d=date.getDate()
                if(d<10){
                    d='0'+d
                }
                return date=d+'/'+m+'/'+y
            }
    },
    mounted(){
        this.getProjects()
    },
    
}

</script>
<template>
<router-view>
    <div class="container-fluid">
      <h1>Pagina di dettaglio: <span class="purple">{{project.name}}</span></h1>
    
        <div class="row d-flex mt-4">
            <div class="col-4">
                <img :src="project.cover_image" :alt="project.name">
            </div>
            <div class="col-8">
                  <h2><span class="purple me-3">Title: </span>{{project.name}}</h2>
                        <span v-if="project.type" class="badge text-bg-warning  d-inline-block mb-3">{{project.type.name}}</span>

                            <h4 class=""><span class="purple me-3">Client: </span>{{project.client_name}}</h4>



                        <p><span class="purple me-3">Created on: </span>{{manipulateDate(project.created)}}</p>

                        <p>
                            <span class="purple me-3">Summary: </span>
                            <span v-html="project.summary"></span>
                        </p>
                        <div class="container technologies d-flex p-0">
                            <span class="purple me-3">Technologies: </span>
                            <ul class=" px-3 list-unstyled" v-if="project.technologies">

                                <li v-for=" technology in project.technologies" :key="technology.id">
                                    {{technology.name}}
                                </li>
                            </ul>
                        </div>
            </div>
        </div>
    </div>
    </router-view>
</template>


<style lang="scss" scoped>
   .col-4{
       img{
           width:100%;
           height:auto;
           max-height:500px;
           object-fit: cover;

       }
   }
    
</style>
