<template>
    <section>
        <pre>{{ repositories }}</pre>
    </section>
</template>

<script>
export default {
    props: {
        repositories: {
            type: Array,
            required: true,
            default: () => {},
        },
    },
}
</script>
