<template>
  <div class="banner-container">
        <div class="banner-content">
            <h1>Welcome To my Ecommerce site</h1>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perferendis odio, dignissimos
                aspernatur in necessitatibus?</small>
            <button class="btn btn-outline-secondary">MORE INFO</button>
            <button class="btn second-btn" @click="contact">CONTACT ME</button>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        contact(){
            this.$router.push("/contactUs");
        }
    }
}
</script>

<style>
.banner-container{
    height: 60vh;
    width: 100%;
    /* border: 1px solid yellow; */
    background: linear-gradient(rgba(128, 128, 128, 0.26),rgba(128, 128, 128, 0.26)),url("../assets/img/kabita-darlami-YJjm6XD6zF4-unsplash.jpg");
    background-size:cover;
    background-position: center ;
    position: relative;
    color: honeydew;
  
}
.banner-content{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    
}
.banner-content small{
    display: block;
}

.banner-content .second-btn{
    background-color: orange;
    color: honeydew;
    transition: 0.7s ease-in-out;
}
.banner-content .second-btn:hover{
    transform: scale(1.1);
}
</style>