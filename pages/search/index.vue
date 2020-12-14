<template>
    <section class="search">
        <article class="search__header">
            <h3 class="text__heading">Search Github User</h3>
            <p class="text__subheading">
                Enter user's github name, email and agree to our conditions
            </p>
        </article>

        <article class="search__form">
            <Form @submitted="goToUser" />
        </article>
    </section>
</template>

<script>
export default {
    methods: {
        goToUser(user) {
            this.$router.push({ path: `/${user}/repos` })
        },
    },
}
</script>
