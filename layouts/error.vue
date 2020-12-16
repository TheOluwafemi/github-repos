<template>
    <article class="error__page">
        <div v-if="error.statusCode === 404">
            <div>
                <h1 class="error__header">404</h1>
                <p>The page you were looking for does not exist</p>
            </div>

            <br />
            <div>
                <button
                    class="btn btn--dark error__button"
                    @click.prevent="goToHome"
                >
                    Go Home
                </button>
            </div>
        </div>
        <div v-else>
            <div>
                <h1 class="error__header">Oooops</h1>
                <p>Something went wrong.</p>
            </div>

            <br />
            <div>
                <button
                    class="btn btn--dark error__button"
                    @click.prevent="goToHome"
                >
                    Go Home
                </button>
            </div>
        </div>
    </article>
</template>

<script>
export default {
    props: {
        error: {
            type: Object,
            default: () => null,
        },
    },
    methods: {
        goToHome() {
            this.$router.push('/')
        },
    },
    head() {
        return {
            title: `Error`,
        }
    },
}
</script>
