<template>
  <div class="container my-5">
    <h1>Sing In / Out</h1>
    <hr />
    <div class="form-container">
      <h3>Sign In With Your Email</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
        corporis. Quidem vel quibusdam enim deserunt. Quibusdam ipsum iste natus
        inventore?
      </p>
      <form>
        <div class="mb-3">
          <label class="form-label">Name</label>
          <input type="text" class="form-control" />
        </div>
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input type="email" class="form-control" />
        </div>
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input type="password" class="form-control" />
        </div>
        <div class="mb-3">
          <button type="submit" class="btn">Submit</button>
        </div>
      </form>
      <a style="color: blue; text-decoration:none;" href="#">Forget Password?</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.form-container {
  max-width: 500px;
  margin:80px auto;
  border: 1px solid rgba(121, 117, 117, 0.644);
  border-radius: 15px 50px;
  padding: 60px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  /* background-color: rgba(255, 166, 0, 0.74); */
}
.form-container p,
h3 {
  text-align: center;
}

.btn {
  float: right;
  background-color: orange;
  color: honeydew;
  transition: 0.7s ease-in-out;
}
.btn:hover {
  transform: scale(1.1);
}
</style>