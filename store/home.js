export const state = () => ({
    profile: [],
    repositories: [],
})

export const mutations = {
    setProfile(state, profile) {
        state.profile.push(profile)
    },
    setRepositories(state, repos) {
        state.repositories.push(repos)
    },
}
