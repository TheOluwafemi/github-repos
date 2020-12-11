<template>
    <main class="content">
        <Profile :profile="userProfileDetails" />
        <Repositories :top-three-repos="topThreeRepos" />
    </main>
</template>

<script>
import api from '@/utils/api.js'

export default {
    data() {
        return {
            predefinedUser: 'homeday-de',
            userProfileDetails: {},
            topThreeRepos: [],
        }
    },
    created() {
        this.getPredefinedUserDetails()
        this.getUserTopRepos()
    },
    methods: {
        async getPredefinedUserDetails() {
            try {
                const response = await api.getUser(this.predefinedUser)
                this.userProfileDetails = response.data
            } catch (error) {
                return { error }
            }
        },

        async getUserTopRepos() {
            try {
                const response = await api.getUserRepo(this.predefinedUser)
                const userRepositories = response.data
                this.filterTopThreeRepos(userRepositories)
            } catch (error) {
                console.log(error)
            }
        },

        filterTopThreeRepos(repos) {
            const topThree = repos
                .sort((a, b) => b.stargazers_count - a.stargazers_count)
                .slice(0, 3)
            this.topThreeRepos = this.extractRepoDetails(topThree)
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
