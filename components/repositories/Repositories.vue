<template>
    <section>
        <div>{{ repositories }}</div>
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
