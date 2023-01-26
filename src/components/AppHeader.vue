<script>
export default {
  name:'AppHeader'
}
</script>
<template>
  <header class="">
    <nav>
    <img src="/src/assets/logo-annidato-bn.png" alt="" class="logo">
      <ul class="p-0 m-0">
        <li>
          <a href="#">I miei progetti</a>
        </li>
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
      }
    }
  }
</style>