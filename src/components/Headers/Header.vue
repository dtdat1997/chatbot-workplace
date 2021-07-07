<template>
    <b-navbar
        toggleable="md"
        type="dark"
        class="nav-background"
    >
        <b-navbar-toggle target="nav_collapse" />
        <b-navbar-brand href="#">
            {{ $t('home_screen.hompage_name') }}
        </b-navbar-brand>
        <b-collapse
            id="nav_collapse"
            is-nav
        >
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto text-light">
                {{ $t('home_screen.logout') }}
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
    
</script>
