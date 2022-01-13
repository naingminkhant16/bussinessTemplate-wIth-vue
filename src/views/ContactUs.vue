<template>
  <div class="container my-5">
    <div class="row">
      <!-- left box  -->
      <div class="col-sm-12 col-md-8 g-5">
        <h1>Contact Us</h1>
        <hr />
        <p>
          We love to hear from you. Interested in working together? Fill out the
          form below with some info about your project and I will get back to
          you as soon as I can. Please allow a couple days for me to respond.
        </p>
        <form class="row g-3">
          <div class="col-md-4">
            <input type="text" class="form-control" placeholder="Name" />
          </div>
          <div class="col-md-4">
            <input type="Email" class="form-control" placeholder="Email" />
          </div>
          <div class="col-md-4">
            <input type="text" class="form-control" placeholder="Phone" />
          </div>
          <div class="col">
            <textarea
              class="form-control"
              cols="30"
              rows="10"
              placeholder="Type Your Message Here..."
            ></textarea>
          </div>
          <div class="col-12">
            <button type="submit" class="btn">Sign in</button>
          </div>
        </form>
      </div>
      <!-- right box  -->
      <div class="col-md-4 g-5">
        <h5>Address</h5>
        <p>1234 Momo.St , Sana Township , Yangon,<br />834 Mina , Japan</p>
        <hr />
        <h5>Phone:</h5>
        <p>01-234-456-78</p>
      </div>
    </div>
  </div>
  <!-- map  -->
  <div class="mapouter">
    <div class="gmap_canvas">
      <iframe
        width="100%"
        height="500"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>


.btn {
  float: right;
  background-color: orange;
  color: honeydew;
  transition: 0.7s ease-in-out;
}
.btn:hover {
  transform: scale(1.1);
  /* color: black; */
}
/* map  */
.mapouter {
  position: relative;
  /* text-align: center; */
  height: 500px;
  width: 100%;

}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 500px;
  width:100%;
}
</style>