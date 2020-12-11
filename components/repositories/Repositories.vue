<template>
    <section>
        <pre>{{ topThreeRepos }}</pre>
    </section>
</template>

<script>
export default {
    props: {
        topThreeRepos: {
            type: Array,
            required: true,
            default: () => {},
        },
    },
}
</script>
