<template>
    <section class="content">
        <section class="content__home">
            <Profile :profile="userProfileDetails" />
            <Repositories
                :repositories="topThreeRepos"
                :header-text="topRepoHeader"
            />
        </section>
    </section>
</template>

<script>
export default {
    async asyncData({ $axios }) {
        const defaultUser = 'homeday-de' // set default user
        const userProfileDetails = await $axios.$get(`users/${defaultUser}`)
        const userRepositories = await $axios.$get(`users/${defaultUser}/repos`)
        return {
            userProfileDetails,
            userRepositories,
            defaultUser,
        }
    },
    computed: {
        topThreeRepos() {
            return this.filterTopThreeRepos(this.userRepositories)
        },
        topRepoHeader() {
            return `${this.userProfileDetails.name}'s top repositories`
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
    },
}
</script>
