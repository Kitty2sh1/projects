<template>
    <div class="app-main">
        <menu-icon></menu-icon>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app-main',
    components: {
        "MenuIcon": () => import('../../components/MenuIcon.vue')
    },
    data() {
        return {};
    },
    methods: {},
    computed: {},
    created() { }
}
</script>

<style lang="scss" scoped>
.app-main {}
</style>