<template>
<h1>Welcome to GoLawyer</h1>
<h3>Appointment service</h3>

    <main class="form-signin">
        <form method="POST">
            <h1 class="h3 mb-3 fw-normal">Sign in</h1>

            <div class="form-floating">
                <input type="text" class="form-control" id="floatingInput" placeholder="First Name" required>
                <label for="floatingInput">First Name</label>
            </div>

            <div class="form-floating ">
                <input type="text" class="form-control" id="floatingInput" placeholder="Last Name" required>
                <label for="floatingInput">Last Name</label>
            </div>

            <div class="form-floating ">
                <input type="text" class="form-control" id="floatingInput" placeholder="Profession" required>
                <label for="floatingInput">Profession</label>
            </div>

            <div class="form-floating">
                <input type="date" class="form-control" id="floatingInput" placeholder="Birthday" value="2000-01-01" max="2002-07-31" required>
                <label for="floatingPassword">Birthday</label>
            </div>

            <router-link :to="{name: 'showRef'}">
            <button  class="w-100 btn btn-lg btn-success my-3" type="submit">Sign in</button>
            </router-link>

            <router-link :to="{name: 'login'}">
            <button  class="w-100 btn btn-lg btn-dark" type="button">Already an user?</button>
            </router-link>

            <p class="mt-5 mb-3 text-muted">&copy; Go lawyer</p>
        </form>
    </main>

</template>
<script>
export default {
    name: 'signin'
}
</script>








    <style scoped>


    @media (min-width: 768px) {
    .bd-placeholder-img-lg {
    font-size: 3.5rem;
    }
    }


    .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
    }


    .form-signin .form-floating:focus-within {
    z-index: 2;
    }

    .form-signin input[type="text"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    }

    .form-signin input[type="date"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    }
    </style>