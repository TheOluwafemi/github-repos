<template>
    <main class="content">
        <Profile />
        <Repositories />
    </main>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            predefinedUser: {},
        }
    },
    async created() {
        try {
            const api = `https://api.github.com/users/theoluwafemi`
            const response = await axios.get(api)
            this.predefinedUser = response.data
        } catch (error) {
            return { error }
        }
    },
}
</script>
