<template>
    <section>
        <pre>{{ profile }}</pre>
    </section>
</template>

<script>
export default {
    props: {
        profile: {
            type: Object,
            required: true,
            default: () => {},
        },
    },
}
</script>
