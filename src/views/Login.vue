<template>
    <div class="login-form">
        <form>
            <h2 class="text-center">
                {{ $t('login_screen.label') }}
            </h2>       
            <div class="form-group">
                <input
                    v-model.trim="form.email"
                    type="text"
                    class="form-control"
                    :placeholder="$t('login_screen.email')"
                    required="required"
                    autocomplete="email"
                >
            </div>
            <div class="form-group">
                <input
                    v-model.trim="form.password"
                    type="password"
                    class="form-control"
                    :placeholder="$t('login_screen.password')"
                    required="required"
                    autocomplete="current-password"
                >
            </div>
            <div class="form-group">
                <button
                    type="submit"
                    class="btn btn-primary btn-block"
                    @click="login"
                >
                    {{ $t('login_screen.label') }}
                </button>
            </div>
            <p
                v-if="loginError"
                class="text-danger text-center"
            >
                {{ $t('message.login_error') }}
            </p>
        </form>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';
export default {
    name: 'App',
    data() {
        return {
            form: {
                email: '',
                password: ''
            },
            loginError: false
        };
    },
    computed: {
        ...mapGetters({
            loginRes: 'auth/loginRes'
        })
    },
    methods: {
        async login(event) {
            event.preventDefault();
            this.$root.$loading.start();
            await this.$store.dispatch('auth/login', this.form);
            this.$root.$loading.finish();
            if (!this.loginRes.error) {
                this.$router.push({ name: 'Home' });
            } else {
                this.loginError = true;
            }
        }
    }
};
</script>

<style>
    body {
        background: #EEF1F4 !important;
        font-family: 'Lato', sans-serif !important;
    }

    .login-form {
        width: 340px;
        margin: 50px auto;
    }

    .login-form form {
        background: #f7f7f7;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        padding: 30px;
    }
    .login-form h2 {
        margin: 0 0 15px;
    }
    .form-control, .btn {
        min-height: 38px;
        border-radius: 2px;
    }
    .btn {        
        font-size: 15px;
        font-weight: bold;
    }
</style>
