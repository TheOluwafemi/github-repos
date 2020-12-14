<template>
    <section class="repos">
        <article class="repos__header">
            <p class="content__header content__header--sm">
                {{ headerText }}
            </p>
        </article>

        <ul class="repo__group">
            <li v-for="repo in repositories" :key="repo.id" class="repo__item">
                <nuxt-link
                    class="content__text content__text--lg"
                    :to="{
                        path: `/${owner}/${repo.name}`,
                    }"
                    >{{ repo.name }}</nuxt-link
                >
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
        owner: {
            type: String,
            required: true,
            default: () => '',
        },
        headerText: {
            type: String,
            required: true,
            default: () => '',
        },
    },
}
</script>
