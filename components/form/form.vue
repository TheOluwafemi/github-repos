<template>
    <section>
        <form class="form">
            <div class="form__field">
                <label for="username" class="form__label">Username</label>
                <input
                    id="username"
                    v-model="username"
                    type="text"
                    name="username"
                    class="form__input"
                    aria-labelledby="enter username"
                    required
                    placeholder="Enter username"
                />
            </div>

            <div class="form__field">
                <label for="username" class="form__label">Email</label>
                <input
                    id="username"
                    v-model="email"
                    type="email"
                    name="email"
                    class="form__input"
                    aria-labelledby="enter email"
                    required
                    placeholder="Enter email"
                />
            </div>

            <div class="form__field form__field--check">
                <input
                    id="terms"
                    v-model="terms"
                    type="checkbox"
                    name="terms"
                    class="form__checkbox"
                    aria-labelledby="agree terms and conditions"
                    required
                />
                <label for="terms" class="form__label form__label--check">
                    I agree to
                    <a class="link" href="#">terms and conditions</a>
                </label>
            </div>

            <div class="form__button">
                <button class="btn btn--dark" type="submit">Search</button>
            </div>
        </form>

        <UserNotFound v-if="userNotFound" />
    </section>
</template>

<script>
export default {
    props: {
        userNotFound: {
            type: Boolean,
            required: true,
        },
    },
    data() {
        return {
            username: '',
            email: '',
            terms: '',
        }
    },
}
</script>
