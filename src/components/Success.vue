<template>
  <div class="success container">
    <div class="card">
      <div class="card-content">
        <div class="card-title">
          <h3 class="teal-text">Ola {{ name }}</h3>
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
        <div>
          <button @click="signout" class="btn-large">Sing out</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import auth from "@/firebase/init";

export default {
  name: "Success",
  props: ["name"],
  data() {
    return {
      email: null,
      uid: null
    };
  },
  methods: {
    signout() {
      auth
        .signOut()
        .then(responde => {
          this.$router.push("/");
        })
        .catch(err => {
          console.log(err);
        });
    }
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

.success .card .card-content p + div {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
</style>