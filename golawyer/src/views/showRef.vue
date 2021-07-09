<template>
<h1>Welcome to GoLawyer</h1>
<h3>Appointment service</h3>


    <main class="form">

    <div class="form-floating">
        <input type="text" class="form-control" id="floatingInput" placeholder="Reference" readonly>
        <label for="floatingInput">Your Reference</label>
    </div>

    <router-link :to="{name: 'login'}">
    <button  class="w-100 btn btn-lg btn-success" type="button">Log In</button>
    </router-link>
    <router-link :to="{name: 'homepage'}">
    <button  class="w-100 btn btn-lg btn-danger mt-3" type="button">Go back</button>
    </router-link>


    </main>
</template>




<script>

export default {
    name: 'showRef'
}

</script>


<style scoped>


    @media (min-width: 768px) {
    .bd-placeholder-img-lg {
    font-size: 3.5rem;
    }
    }


    .form {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
    }


    .form .form-floating:focus-within {
    z-index: 2;
    }


    .form input[type="text"] {
    margin-bottom: 10px;
    border-top-left-radius: 30;
    border-top-right-radius: 30;
    }
</style>