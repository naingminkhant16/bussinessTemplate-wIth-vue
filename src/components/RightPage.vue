<template>
  <div class="grid-container">
    <div class="right">
      <h1>Lorem ipsum dolor sit ametelit.</h1>
      <hr />
      <div class="paragraph">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab nostrum
          enim est sunt perspiciatis vero quas eos. Beatae dicta tempore commodi
          dolores explicabo magni eius inventore earum? Veritatis quia itaque
          voluptas! Animi veniam minus molestias ullam debitis possimus neque
          beatae quasi? Modi ex error, alias numquam quasi magni ipsa laborum?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
          veritatis, aspernatur tempore laudantium veniam provident ab earum
          nulla aut laboriosam voluptates ut debitis a, repudiandae laborum
          eveniet quaerat dolorum, asperiores in. Illo tempore aspernatur optio
          quos non explicabo. Fugiat quibusdam minus esse aut facilis ipsum
          reiciendis iure harum aliquam voluptate laborum vel culpa sit,
          doloribus eligendi expedita nihil? Reiciendis ut placeat voluptate
          ipsam porro, ex molestias animi architecto? Ad distinctio itaque
          quisquam repellat eius, mollitia sunt deserunt obcaecati reprehenderit
          assumenda!
        </p>
      </div>
      <div class="paragraph">
        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
          doloribus libero et cum molestiae exercitationem, beatae ad laborum
          voluptatum fugiat, voluptates quia hic iusto autem praesentium
          corporis explicabo reiciendis itaque. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Nihil consectetur dicta minus voluptate
          quis neque velit dolorem maiores repellat repudiandae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          voluptatibus in veniam dignissimos suscipit quisquam laboriosam animi
          totam quo perspiciatis. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Aperiam, doloremque. Accusamus, natus officia
          voluptates, voluptas perferendis tenetur in modi itaque obcaecati
          sequi veniam laborum necessitatibus, praesentium nostrum odit labore
          consequuntur?
        </p>

        <div class="box">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          voluptas odit officia sapiente quisquam! Dolorum nam impedit cumque
          harum sint quibusdam omnis ducimus modi pariatur dolorem. Quod,
          distinctio? Odio, facere. Officia quidem ipsa illo facilis voluptatem,
          voluptatum temporibus dolor enim odio. Accusantium asperiores ratione
          ducimus pariatur quis saepe soluta quaerat.
        </div>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          minima cumque vel. Laborum illum, iure dolor quidem quaerat rem odio
          non officiis quis saepe obcaecati culpa sint quasi eum eos.
        </p>
      </div>
      <div class="paragraph">
        <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
          enim iure nihil dicta doloremque minima earum corporis, animi
          accusamus tempore. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Expedita, eligendi delectus quasi deserunt corporis explicabo
          recusandae ut. Enim, temporibus sapiente.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          adipisci, ullam quam laborum ab corporis! Odit dolor adipisci dicta
          exercitationem accusantium similique, nobis porro eos ex! Odio
          perferendis ipsum magni! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Reprehenderit reiciendis mollitia veritatis vero ea.
          Saepe, nisi! Velit distinctio doloribus officiis!
        </p>
      </div>
    </div>
    <div class="left">
      <div class="side-para">
        <h4>Lorem ipsum dolor sit amet.</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
          ipsa quia ducimus illum deserunt quod unde dignissimos voluptatibus
          nisi eos inventore odit quos obcaecati?
        </p>

        <div class="side-post">
          <h4>Lorem ipsum dolor sit.</h4>
          <img
            src="../assets/img/lakerain-snake-b-8CyzvGWM4-unsplash.jpg"
            alt=""
          />
        </div>
        <!-- <br><br> -->
        <div class="side-post">
          <h4>Lorem ipsum dolor sit.</h4>
          <img
            src="../assets/img/ivana-cajina-dQejX2ucPBs-unsplash.jpg"
            alt=""
          />
          <br /><br />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
            temporibus quas delene a! Atque, totam et. Modi, nemo quidem. Nemo
            accusantium laudantium ullam iste in laborum aliquam ratione quia
            eligendi labore? Blanditiis quod cupiditate a repellat!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns:3fr 1fr;
  gap: 20px;
  margin: 80px auto;
  max-width: 1200px;
  font-size: 15px;
  text-align: left;
}
.left img {
  width: 300px;
  height: 200px;
  object-fit: cover;
  /* margin: 10px auto; */
}
.left .side-para {
  padding: 10px;
}
.left .side-post {
  margin: 40px auto;
}
.right h2 {
  padding: 10px;
}
.right .paragraph {
  margin: 20px auto;
  padding: 10px;
}
.right .box {
  font-style: italic;
  font-size: 17px;
  background-color: rgba(248, 243, 243, 0.425);
  color: darkgrey;
  padding: 20px;
  margin: 20px auto;
  border-left: 5px solid lightgray;
}
@media only screen and (max-width: 600px) {
  .grid-container {
    grid-template-columns: auto;
    margin: 10px auto;
    padding: 40px;
  }
}
</style>