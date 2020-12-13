<template>
    <section class="repos">
        <article class="repos__header">
            <p class="content__header content__header--sm">
                {{ headerText }}
            </p>
        </article>

        <ul class="repo__group">
            <li v-for="repo in repositories" :key="repo.id" class="repo__item">
                <a class="content__text content__text--lg" href="">{{
                    repo.name
                }}</a>
                <p class="content__text content__text--md">
                    {{ repo.description }}
                </p>
                <span class="content__text content__text--sm"
                    ><fa :icon="['fa', 'star']" /> &nbsp;{{ repo.stars }}</span
                >
            </li>
        </ul>
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
        headerText: {
            type: String,
            required: true,
            default: () => '',
        },
    },
}
</script>
