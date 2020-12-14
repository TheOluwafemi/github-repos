<template>
    <section class="all__repos">
        <Repositories
            :repositories="filteredRepos"
            :owner="user"
            :header-text="headerText"
        />
    </section>
</template>

<script>
export default {
    async asyncData({ $axios, params }) {
        const { user } = params
        const repos = await $axios.$get(`users/${user}/repos`)
        return { repos, user }
    },
    computed: {
        headerText() {
            return `${this.user}'s Repositories`
        },
        filteredRepos() {
            return this.extractRepoDetails(this.repos)
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
    },
}
</script>
