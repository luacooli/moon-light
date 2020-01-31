<template>
  <div class="register conatiner">
    <div class="card">
      <form class="card-content" @submit.prevent="submitRegister">
        <h3 class="teal-text">Cadastro</h3>
        <ul>
          <li>
            <label for="name">Nome completo</label>
            <input type="text" required name="name" v-model="name">
          </li>
          <li>
            <label for="email">Email</label>
            <input type="email" required name="email" v-model="email">
          </li>
          <li>
            <label for="password">Senha</label>
            <input type="password" required name="password" v-model="password">
          </li>
          <li>
            <label for="confirmPassword">Confirmar senha</label>
            <input type="password" required name="confirmPassword" v-model="confirmPassword">
          </li>
        </ul>
        <div>
          <button class="btn-large halfway-fab">Submit</button>
        </div>
      </form>
    </div>

    <div>
      <h6>{{ errorMessage }}</h6>
    </div>
  </div>
</template>

<script>
  import auth from '@/firebase/init'
  export default {
    name: "Register",
    data() {
      return {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        errorMessage: ''
      }
    },
    methods: {
      submitRegister() {
        auth.createUserWithEmailAndPassword(this.email, this.password)
        .then(response => {
          console.log(response)
        })
        .catch(err => {
          console.log(err)
          this.errorMessage = err.message
        })
      }
    }
  }

</script>

<style>
  .register {
    display: grid;
    grid-gap: 30px;
    margin: 60px 300px;
  }

  .register ul {
    margin: 20px auto;
  }

  .register .card .card-content div {
    display: flex;
    justify-content: flex-end;
  }
</style>