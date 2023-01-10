<template>
  <div class="contact">
    <h2>Thanks for taking the time to reach out. <br> How can I help you today?</h2>
    <form @submit="checkForm">
      <div class=input-cont>
        <div class='input-cont-sec'>
          <div class=" text-field">
            <label class="text-field__label" for="username">Name</label>
            <input required class="text-field__input text-field__input_valid" type="text" name="firstname" v-model=name>
            <div class="text-field__message"></div>
          </div>
          <div class="text-field">
            <label class="text-field__label" for="username">E-mail</label>
            <input required class="text-field__input text-field__input_valid" type="email" name="firstname"
              v-model=email>
            <div class="text-field__message"></div>
          </div>
        </div>
        <div class="textarea-field">
          <label class="text-field__label" for="username">Massage</label>
          <textarea required class="text-field__input text-field__input_valid" type="text" name="firstname"
            v-model=text></textarea>
          <div class="text-field__message"></div>
        </div>
      </div>
      <button type="submit" class=subbtn @click="checkinp">Submit</button>
    </form>
  </div>
</template>

<script>


export default {
  name: "ContactView",
  data() {
    return {
      text: '',
      name: '',
      email: '',
    }
  },
}

</script>
<style lang="scss">
body {
  background-color: $black-color ;
}

.input-cont {
  display: flex;
  width: 70%;
}

.input-cont-sec {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 45px;
  align-items: center;
}

.input-cont {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact,
form {
  padding: 10px;

  label {
    font-weight: 700px;
    font-size: 23px;
  }

  .subbtn {
    margin: 40px 0 0 0;
    color: $white-color;
    border-color: $white-color;
    border-radius: 40px;
    background-color: rgba(255, 255, 255, 0);
    padding: 20px 90px;
    font-size: 25px;
    font-weight: 500;
  }

  .subbtn:hover {
    cursor: pointer;
    filter: brightness(30%);
  }

  .text-field,
  .textarea-field {
    flex-direction: column;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
  }

  .text-field {
    width: 40%;
  }

  .textarea-field {
    width: 100%;
  }

  .text-field__label {
    display: block;
    text-align: center;
    margin-bottom: 10px;
  }

  textarea {
    resize: none;
    width: 100%;
    height: 250px;
    border-radius: 200px;
  }

  input {
    border-radius: 60px;
  }

  /* стили для input */
  .text-field__input {
    padding: 30px 70px;
    color: black;
    background-color: #fff;
    outline: none;
    width: 100%;
    font-size: 25px;
  }

  button:hover {
    transition: 300ms;
  }

  button {
    transition: 300ms;
  }

  h2 {
    margin: 40px 0 50px 0;
    font-size: 50px;
    font-weight: 500;
    text-align: center;
  }

  @media screen and (max-width: 1250px) {
    .text-field {
      width: 35% !important;
    }
  }

  @media screen and (max-width: 600px) {
    .input-cont {
      width: 45%;
    }
  }

  @media screen and (max-width: 800px) {
    h2 {
      font-size: 20px !important;
    }

    .text-field {
      width: 100% !important;
    }

    textarea {

      width: 100%;

      border-radius: 100px;
    }

    .input-cont-sec {
      flex-direction: column;
    }
  }


  display: flex;
  color: $white-color;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>