<script>
export default {
  name:'AppHeader'
}
</script>
<template>
  <header class="">
    <nav>
    <img src="/src/assets/logo-annidato-bn.png" alt="" class="logo">
      <ul class="p-0 m-0 d-flex">
        <li class="me-4"><router-link :to="{ name: 'home'}">Progetti</router-link></li>
        <li><router-link :to="{ name: 'about'}">Chi siamo</router-link></li>
      </ul>
    </nav>
  </header>
</template>


<style lang="scss" scoped>
  header{
    position:fixed;
    left:0;
    top:0;
    width:100vw;
    height:60px;
    padding:10px 20px;
    background-color: white;
    justify-content:space-between;
    align-items:center;
    border-bottom:1px solid aliceblue;
    nav{
      height:100%;
      padding:0px 30px;
      display:flex;
      justify-content: space-between;
      align-items:center;
      .logo{
        height:50px;
      }
      ul{
        list-style:none;
        display:inline-block;
        a{
            color:#9160f5;
            transition:all .2s ease-in-out;
            &:hover{
            color:#ffc107;
            text-decoration:underline;
    }
        }
      }
    }
  }
</style>