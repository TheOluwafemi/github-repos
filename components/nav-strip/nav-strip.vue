<template>
    <nav class="nav2">
        <div class="nav2__left">
            <p
                v-if="!onHomePage"
                class="content__text--md content__link"
                @click="goBack"
            >
                <fa class="content__icon" :icon="['fa', 'arrow-left']" />&nbsp;
                Go back
            </p>
        </div>

        <div v-if="!onSearchPage" class="nav2__right">
            <button class="btn btn--dark" @click.prevent="goToSearch">
                Search User
            </button>
        </div>
    </nav>
</template>

<script>
export default {
    computed: {
        onHomePage() {
            return this.$route.fullPath === '/'
        },
        onSearchPage() {
            return this.$route.fullPath === '/search'
        },
    },
    methods: {
        goBack() {
            this.$router.go(-1)
        },

        goToSearch() {
            this.$router.push('/search')
        },
    },
}
</script>
