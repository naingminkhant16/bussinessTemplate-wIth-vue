<template>
  <div class="container">
    <div class="row g-5">
      <!--row col here  -->
      <div class="col-sm-12 col-md-8">
        <!--inner row col here  -->
        <h1>About Us</h1>
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-8">
              <div class="card-body">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Sint a necessitatibus ullam aperiam numquam aliquid
                  officia animi, eaque aspernatur, eos fugit nulla at porro
                  quaerat, officiis natus deleniti veniam.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <!-- second inner row col  -->
            <div class="col-md-4 py-5 px-3">
              <img
                src="../assets/img/kabita-darlami-YJjm6XD6zF4-unsplash.jpg"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <!-- paragraph one  -->
            <div class="row">
              <div class="col">
                <h4>Hello World</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dignissimos quaerat nulla dolorem, magni labore recusandae
                  officia repellat tempore eos, fugit quis quisquam assumenda
                  blanditiis nam minus porro, ut aliquam vitae!
                </p>
              </div>
            </div>
            <!-- paragraph 2  -->
            <div class="row">
              <div class="col">
                <h4>Education</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  voluptatibus cupiditate possimus quasi, sit adipisci cumque
                  unde accusamus ea dignissimos porro natus et, dolor magnam
                  culpa asperiores magni vitae? Sunt, maiores magni nihil
                  deleniti dolorem fugit voluptatem itaque ratione facilis!
                </p>
              </div>
            </div>
            <!-- paragraph 3  -->
            <div class="row">
              <div class="col">
                <h4>Career</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Delectus tenetur, ducimus possimus quod magnam, sint molestiae
                  vel veniam et asperiores omnis sit expedita neque praesentium
                  accusamus eveniet error, velit repellendus voluptas aspernatur
                  laudantium. Nemo, cupiditate?
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eaque quod illo numquam consequuntur totam perspiciatis ea,
                  aut nihil. Neque asperiores iusto culpa, ex, delectus aliquam
                  fugit laborum nostrum praesentium ab harum non minima, saepe
                  nesciunt dolores cupiditate dignissimos at molestias voluptate
                  in quisquam voluptas?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- first col end here  -->
      <div class="col-6 col-md-4">
        <h5>Vacancies</h5>
        <h6>Lorem ispum</h6>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Necessiveniam corrupti id eligendi quam.
        </p>
         <h6>Lorem ispum</h6>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Necessitatibus labore eligendi quam.
        </p>
         <h6>Lorem ispum</h6>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Necessitatibus laborepti id eligendi quam.
        </p>
      </div>
    </div>
  </div>
 
</template>

<script>
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Navbar from "../components/Navbar";
export default {
  components: {
    Contact,
    Footer, Navbar },
};
</script>

<style>
.container {
  margin-top: 80px;
}
h6{
    color:orange
}
</style>