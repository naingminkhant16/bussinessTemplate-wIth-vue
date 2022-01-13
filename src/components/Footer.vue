<template>
   <!-- footer  -->
    <footer>
        <div class="container">
            <div class="row">
                <div class="col text-start">
                    <router-link to="/">Home</router-link> |
                    <router-link to="/about">About</router-link> |
                    <router-link to="/contactUs">Contact</router-link> |
                    <b><router-link to="/signIn">Sign Up</router-link></b>
                </div>
                <div class="col text-end">
                    <small>Copyright <i class="far fa-copyright"></i> 2022 Thar Khant ,Designed by GetTemplate</small>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style>
/* footer  */
footer{
    background-color: black;
    color: rgb(156, 155, 155);
    padding: 10px;
    font-size: smaller;
    width: 100%;
    height: 100%;
   
}
footer a{
    text-decoration: none;
    color: rgb(156, 155, 155);
}
footer a:hover{
    color: white;
}
</style>