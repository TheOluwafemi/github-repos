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
        // userRepos() {
        //     return this.extractRepoDetails(this.repositories)
        // },
    },
    methods: {
        // filtering only repo details needed to be presented in the interface
        // extractRepoDetails(repos) {
        //     const allRepos = Object.keys(repos).map((key) => {
        //         return repos[key]
        //     })
        //     console.log(allRepos)
        //     const filteredRepos = allRepos.map((repo) => {
        //         return {
        //             id: repo.id,
        //             name: repo.name,
        //             fullName: repo.full_name,
        //             url: repo.html_url,
        //             description: repo.description,
        //             createdAt: repo.created_at,
        //             lastUpdated: repo.updated_at,
        //             forks: repo.forks_count,
        //             hasIssues: repo.has_issues,
        //             open_issues: repo.open_issues_count,
        //             stars: repo.stargazers_count,
        //         }
        //     })
        //     return filteredRepos
        // },
    },
}
</script>
