<template>
  <div class="success">
    <div class="card">
      <div class="card-content">
        <div class="card-title">
          <h3 class="teal-text">Ola {{ email }}</h3>
          <h6>Seu ID e {{ uid }}</h6>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Ea, voluptatibus? Nostrum fuga numquam doloribus officia libero 
          aspernatur enim, magnam voluptas eius repudiandae autem recusandae 
          molestiae, consequatur consectetur praesentium nobis impedit!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Ea, voluptatibus? Nostrum fuga numquam doloribus officia libero 
          aspernatur enim, magnam voluptas eius repudiandae autem recusandae 
          molestiae, consequatur consectetur praesentium nobis impedit!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import auth from "@/firebase/init";

export default {
  name: "Success",
  data() {
    return {
      email: null,
      uid: null
    };
  },
  created() {
    this.email = auth.currentUser.email;
    this.uid = auth.currentUser.uid;
  }
};
</script>

<style>
  .success {
    margin: 60px 300px;
  }
</style>