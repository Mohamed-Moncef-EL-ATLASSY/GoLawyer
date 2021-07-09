<template>
<h1>Welcome to GoLawyer</h1>
<h3>Appointment service</h3>


    <main class="form-router">
        <form>
            <h6 class="mt-3 fw-normal">New user or already have a reference?</h6>

            <router-link :to="{name: 'signin'}">
            <button class="w-100 btn btn-lg btn-success mb-3" type="button">I am a new user</button>
            </router-link>

            <router-link :to="{name: 'login'}">
            <button class="w-100 btn btn-lg btn-dark" type="button">I have a reference</button>
            </router-link>



            <p class="mt-5 mb-3 text-muted">&copy; Go lawyer</p>
        </form>
    </main>

</template>

<script>

export default {
    name: 'homepage',
}
</script>

    <style scoped>


    /* @media (min-width: 768px) {
    .bd-placeholder-img-lg {
    font-size: 3.5rem;
    }
    } */


    .form-router {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
    }


</style>