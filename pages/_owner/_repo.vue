<template>
    <section class="repo">
        <article v-if="repository">
            <SingleRepo :repository="repository" />
        </article>

        <article v-else class="content__empty">
            <p>Nothing to see here</p>
            <button class="btn btn--dark" @click.prevent="goToSearchPage">
                Search again
            </button>
        </article>
    </section>
</template>

<script>
export default {
    async asyncData({ $axios, params, error }) {
        try {
            const { owner } = params
            const { repo } = params
            const repository = await $axios.$get(`repos/${owner}/${repo}`)
            return { repository, owner, repo }
        } catch (e) {
            error({ statusCode: 404, message: 'Post not found' })
        }
    },

    computed: {
        repoHeader() {
            return `${this.owner}'s repositories`
        },
    },
    head() {
        return {
            title: `${this.repository.name}| Repo`,
            meta: [
                { name: 'description', content: this.repository.description },
            ],
        }
    },
}
</script>
