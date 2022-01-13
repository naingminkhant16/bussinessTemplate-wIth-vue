<template>
<!-- content one  -->
  <div class=" contentOne">
        <h2>The best place to tell people why they are here</h2>
        <p>The difference between involvement and commitment is like an eggs-and-ham breakfast:.</p>
        <p> the chicken was involved; the pig was committed</p>
    </div>
    <!-- reasons  -->
    <div class="reasons">
        <h2>Reasons To use this Template</h2>

        <div class="container">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                <div class="col">
                    <div class="card ">
                        <!-- <div class="img-container"> -->
                        <img src="../assets/img/lakerain-snake-b-8CyzvGWM4-unsplash.jpg" class="card-img-top" alt="...">
                        <!-- </div> -->
                        <div class="card-title">
                            <h4>Project 1</h4>
                        </div>
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="../assets/img/johannes-plenio-RAJONCCrXh8-unsplash.jpg" class="card-img-top" alt="...">
                        <div class="card-title">
                            <h4>Project 1</h4>
                        </div>
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="../assets/img/lenstravelier-obsBswnv7FI-unsplash.jpg" class="card-img-top" alt="...">
                        <div class="card-title">
                            <h4>Project 1</h4>
                        </div>
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="../assets/img/ivana-cajina-dQejX2ucPBs-unsplash.jpg" class="card-img-top" alt="...">
                        <div class="card-title">
                            <h4>Project 1</h4>
                        </div>
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style>
.contentOne{
    text-align: center;
    background-color: white;
    height: 200px;
    width: 100%;
    /* border: 1px solid red; */
    margin: 60px 0px;
   display: flex;
   align-items: center;
   justify-content: space-evenly;
   flex-direction: column;
}
.contentOne p{
    color: grey;
}
/* reasons  */
.reasons{
    text-align: center;
    padding: 80px 0px;
    background-color: #eee;
}

.reasons .container{
    margin-top: 80px;
   
}
/* .reasons .image-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
} */
.reasons .container .card{
    transition: 0.7s ease-in-out;
    /* overflow: hidden; */
}
.reasons .container .card:hover{
    transform: scale(1.1);
}
</style>