<template>
    <section class="content">
        <section class="content__home">
            <Profile class="content__profile" :profile="userProfileDetails" />
            <article class="content__right">
                <Repositories
                    :repositories="topThreeRepos"
                    :owner="owner"
                    :header-text="topRepoHeader"
                />

                <div class="content__search">
                    <p class="content__text content__text--lg mr--1">
                        Lookup another user
                    </p>
                    <button
                        class="btn btn__search btn--dark"
                        type="submit"
                        @click.prevent="goToSearchPage"
                    >
                        Search User
                    </button>
                </div>
            </article>
        </section>
    </section>
</template>

<script>
export default {
    async asyncData({ $axios, error }) {
        try {
            const defaultUser = 'homeday-de' // set default user
            const userProfileDetails = await $axios.$get(`users/${defaultUser}`)
            const userRepositories = await $axios.$get(
                `users/${defaultUser}/repos`
            )
            return {
                userProfileDetails,
                userRepositories,
                defaultUser,
            }
        } catch (e) {
            error({ statusCode: 404, message: 'Post not found' })
        }
    },
    computed: {
        topThreeRepos() {
            return this.filterTopThreeRepos(this.userRepositories)
        },
        topRepoHeader() {
            return `${this.userProfileDetails.name}'s top repositories`
        },
        owner() {
            return this.userProfileDetails.login
        },
    },
    methods: {
        filterTopThreeRepos(repos) {
            const topThree = repos
                .sort((a, b) => b.stargazers_count - a.stargazers_count)
                .slice(0, 3)
            return this.extractRepoDetails(topThree)
        },

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
    },
}
</script>
