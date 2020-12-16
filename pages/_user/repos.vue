<template>
    <section>
        <article v-if="repos.length">
            <Repositories
                :repositories="filteredRepos"
                :owner="user"
                :header-text="headerText"
            />

            <div class="repo__pages">
                <button
                    v-if="showPrevButton"
                    class="btn btn--dark btn--auto"
                    @click.prevent="previousPage"
                >
                    Prev
                </button>
                <button
                    class="btn btn--dark btn--auto"
                    @click.prevent="nextPage"
                >
                    Next
                </button>

                <div class="info">
                    <p v-if="$fetchState.pending">Fetching repos...</p>
                    <p v-else-if="$fetchState.error">An error occurred :(</p>
                </div>
            </div>
        </article>

        <article v-else class="content__empty">
            <p>Nothing to see here</p>
            <button class="btn btn--dark" @click.prevent="previousPage">
                Go back
            </button>
        </article>
    </section>
</template>

<script>
export default {
    async fetch() {
        this.repos = await this.$axios.$get(
            `users/${this.user}/repos?per_page=${this.perPage}&page=${this.page}`
        )
    },
    async asyncData({ $axios, params, error, query }) {
        try {
            const { user } = params
            const { perPage } = query || 10
            const { page } = query || 1
            const repos = await $axios.$get(
                `users/${user}/repos?per_page=${perPage}&page=${page}`
            )

            return { repos, user, perPage, page }
        } catch (e) {
            error({ statusCode: 404, message: 'Post not found' })
        }
    },
    computed: {
        headerText() {
            return `${this.user}'s Repositories`
        },
        filteredRepos() {
            return this.extractRepoDetails(this.repos)
        },

        showPrevButton() {
            return this.page !== 1
        },
    },
    methods: {
        // filtering only repo details needed to be presented in the interface
        extractRepoDetails(repos) {
            const filteredRepos = repos.map((repo) => {
                return {
                    id: repo.id,
                    name: repo.name,
                    fullName: repo.full_name,
                    owner: repo.owner.login,
                    url: repo.html_url,
                    description: repo.description,
                    createdAt: repo.created_at,
                    lastUpdated: repo.updated_at,
                    forks: repo.forks_count,
                    hasIssues: repo.has_issues,
                    open_issues: repo.open_issues_count,
                    stars: repo.stargazers_count,
                }
            })
            return filteredRepos
        },

        goToSearchPage() {
            this.$router.push('/search')
        },

        nextPage() {
            this.page++
            this.$router.push({
                path: `/${this.user}/repos`,
                query: { perPage: `${this.perPage}`, page: `${this.page}` },
            })
            this.$fetch()
        },

        previousPage() {
            this.page--
            this.$router.push({
                path: `/${this.user}/repos`,
                query: { perPage: `${this.perPage}`, page: `${this.page}` },
            })
            this.$fetch()
        },
    },
    head() {
        return {
            title: `${this.user}'s repositories`,
        }
    },
}
</script>
