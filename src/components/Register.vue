<template>
  <div class="register conatiner">
     <div v-if="errorCode == 'auth/weak-password'" class="error-message">
      <h6>A senha não é forte o suficiente</h6>
    </div>
    <div v-if="errorCode == 'auth/email-already-in-use'" class="error-message">
      <h6>Já existe uma conta com o email fornecido</h6>
    </div>
    <div class="card">
      <form class="card-content" @submit.prevent="submitRegister">
        <h3 class="teal-text">Cadastro</h3>
        <ul>
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
  </div>
</template>

<script>
  import auth from '@/firebase/init'
  export default {
    name: "Register",
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: '',
        errorCode: null
      }
    },
    methods: {
      submitRegister() {
        auth.createUserWithEmailAndPassword(this.email, this.password)
        .then(response => {
          this.$router.push('success')
        })
        .catch(err => {
          this.errorCode = err.code
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

  .error-message {
    color: red;
    text-align: center;
  }
</style>