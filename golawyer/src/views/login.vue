<template>
<h1>Welcome to GoLawyer</h1>
<h3>Appointment service</h3>

    <main class="form-login">
        <form method="POST">
            <h1 class="h3 mb-3 fw-normal">Log in</h1>

            <div class="form-floating">
                <input type="text" class="form-control" id="floatingInput" placeholder="Reference" required>
                <label for="floatingInput">Reference</label>
            </div>

            <router-link :to="{name: 'dashboard'}">
            <button class="w-100 btn btn-lg btn-success my-3" type="submit">Log in</button>
            </router-link>


            <router-link :to="{name: 'signin'}">
            <button class="w-100 btn btn-lg btn-dark" type="button">New User?</button>
            </router-link>

            <p class="mt-5 mb-3 text-muted">&copy; Go lawyer</p>
        </form>
    </main>

</template>
<script>

export default {
    name: 'login',
}
</script>

    <style scoped>


    @media (min-width: 768px) {
    .bd-placeholder-img-lg {
    font-size: 3.5rem;
    }
    }


    .form-login {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
    }


    .form-login .form-floating:focus-within {
    z-index: 2;
    }


    .form-login input[type="text"] {
    margin-bottom: 10px;
    border-top-left-radius: 30;
    border-top-right-radius: 30;
    }
    </style>