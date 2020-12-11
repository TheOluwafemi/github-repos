<template>
    <section class="search">
        <h3 class="text__heading">Search Github User</h3>
        <p class="text__subheading">
            Enter user's name, email and agree to our conditions
        </p>
        <article class="search__form">
            <Form />
        </article>
    </section>
</template>

<script>
export default {
    layout: 'no-header',
    data() {
        return {
            userNotFound: false,
        }
    },
}
</script>
