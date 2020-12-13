<template>
    <section class="profile">
        <figure class="profile__image">
            <img :src="profile.avatar_url" :alt="profile.name" />
        </figure>

        <article class="profile__details1">
            <div class="profile__details2">
                <p class="content__header content__header--sm">
                    {{ profile.name }}
                </p>
                <p class="content__text">{{ profile.bio }}</p>
            </div>

            <div class="profile__details3">
                <p class="content__text">{{ profile.followers }} followers</p>
                <p class="content__text">{{ profile.following }} following</p>
            </div>

            <div class="profile__details4">
                <p>{{ profile.email }}</p>
                <p>{{ profile.location }}</p>
                <p>
                    <a :href="profile.blog">{{ profile.blog }}</a>
                </p>
            </div>
        </article>
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
