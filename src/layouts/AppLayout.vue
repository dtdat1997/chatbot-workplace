<template>
    <div class="app-layout">
        <Header />
        <router-view />
    </div>
</template>

<script>
import Header from './../components/Headers/Header.vue';
export default {
    components: {
        Header
    },
    computed: {
        routeName() {
            return this.$route.name;
        }
    }
};
</script>
