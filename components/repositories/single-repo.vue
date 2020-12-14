<template>
    <section>
        <pre> {{ repository }}</pre>
    </section>
</template>

<script>
export default {
    props: {
        repository: {
            type: Object,
            required: true,
            default: () => {},
        },
    },
}
</script>
