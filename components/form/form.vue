<template>
    <section>
        <form class="form" @submit.prevent="onSubmit">
            <div class="form__field">
                <label for="username" class="form__label"
                    >Github username</label
                >
                <input
                    id="username"
                    v-model="usernameField"
                    type="text"
                    name="username"
                    class="form__input"
                    :class="
                        $v.usernameField.$anyError ? 'form__input--error' : ''
                    "
                    aria-labelledby="enter username"
                    required
                    placeholder="Enter username"
                    @change="$v.usernameField.$touch()"
                />
                <p
                    v-if="!$v.usernameField.required && $v.usernameField.$dirty"
                    class="form__error"
                >
                    You must enter a username
                </p>
            </div>

            <div class="form__field">
                <label for="email" class="form__label">Email</label>
                <input
                    id="email"
                    v-model="emailField"
                    type="email"
                    name="email"
                    class="form__input"
                    :class="$v.emailField.$anyError ? 'form__input--error' : ''"
                    aria-labelledby="enter email"
                    required
                    placeholder="Enter email"
                    @change="$v.emailField.$touch()"
                />
                <p
                    v-if="!$v.emailField.required && $v.emailField.$dirty"
                    class="form__error"
                >
                    An email is required
                </p>
                <p
                    v-if="!$v.emailField.email && $v.emailField.$dirty"
                    class="form__error"
                >
                    You must enter a valid email
                </p>
            </div>

            <div class="form__field">
                <div class="form__field--check">
                    <input
                        id="terms"
                        v-model="termsField"
                        type="checkbox"
                        name="terms"
                        class="form__checkbox"
                        aria-labelledby="agree terms and conditions"
                        required
                        @change="$v.termsField.$touch()"
                    />
                    <label for="terms" class="form__label form__label--check">
                        I agree to
                        <a class="link" href="#">terms and conditions</a>
                    </label>
                </div>
                <p
                    v-if="!$v.termsField.sameAs && $v.termsField.$dirty"
                    class="form__error"
                >
                    Please review and accept our terms before proceeding
                </p>
            </div>

            <div class="form__button">
                <button
                    class="btn btn--dark btn__submit"
                    type="submit"
                    :disabled="$v.$invalid"
                >
                    Search
                </button>
            </div>
        </form>
    </section>
</template>

<script>
import { required, email, sameAs } from 'vuelidate/lib/validators'
export default {
    name: 'Form',
    data() {
        return {
            usernameField: '',
            emailField: '',
            termsField: null,
        }
    },
    validations: {
        usernameField: { required },
        emailField: {
            required,
            email,
        },
        termsField: {
            sameAs: sameAs(() => true),
        },
    },

    methods: {
        onSubmit() {
            this.$emit('submitted', this.usernameField)
        },
    },
}
</script>
