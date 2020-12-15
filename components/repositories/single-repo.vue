<template>
    <section class="content">
        <article class="content__header1">
            <div class="content__header2">
                <p class="content__header--lg">{{ repository.name }}</p>
            </div>
            <div class="content__header2">
                <figure class="content__thumbnail mr--1">
                    <img
                        :src="repository.owner.avatar_url"
                        :alt="repository.owner.login"
                    />
                </figure>
                <p class="content__text--sm">{{ repository.owner.login }}</p>
            </div>
            <hr />

            <div class="content__header3">
                <p class="content__header--md">{{ repository.name }}</p>
                <p class="content__text--lg">{{ repository.description }}</p>
                <p class="content__text--md">{{ repository.full_name }}</p>
                <p class="content__text--md">
                    <fa class="content__icon" :icon="['fa', 'home']" />&nbsp;
                    <a :href="repository.homepage">{{ repository.homepage }}</a>
                </p>

                <p v-if="repository.private" class="content__text--sm">
                    <fa
                        class="content__icon"
                        :icon="['fa', 'lock']"
                    />&nbsp;Private repo
                </p>
            </div>
            <div class="content__header2">
                <span class="content__text--md">
                    {{ repository.stargazers_count }} stars
                </span>
                <span class="content__text--md ml--1">
                    {{ repository.forks }} forks</span
                >
                <span class="content__text--md ml--1">
                    {{ repository.watchers }} watchers
                </span>
            </div>

            <div class="content__header2">
                <p class="content__text--md">
                    Language: {{ repository.language }}
                </p>
                <p class="content__text--md ml--1">
                    License: {{ repository.license.name }}
                </p>
                <p v-if="!repository.private" class="content__text--md ml--1">
                    Public repo
                </p>
            </div>
        </article>
        <!-- <pre> {{ repository }}</pre> -->
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
