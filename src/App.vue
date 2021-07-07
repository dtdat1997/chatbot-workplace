<template>
    <div id="app">
        <component
            :is="layout"
            v-if="layout"
        />
        <AppLoading ref="loading" />
    </div>
</template>

<script>
import AppLoading from './components/Animations/AppLoading.vue';
export default {
    name: 'App',
    components: {
        AppLoading
    },
    computed: {
        layout() {
            return this.$route.meta.layout;
        },
    },
    mounted() {
        this.$root.$loading = this.$refs.loading;
    }
};
</script>

<style lang="scss">
  @import "./assets/scss/app.scss";
</style>
