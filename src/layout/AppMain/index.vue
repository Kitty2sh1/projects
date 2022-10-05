<template>
    <div class="app-main">
        <div class="flex">
            <menu-icon></menu-icon>
            <tags></tags>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app-main',
    components: {
        "MenuIcon": () => import('../../components/MenuIcon.vue'),
        "tags": () => import('../../components/tags.vue')
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
.app-main {
    .flex{
        display: flex;
        height: 40px;
    }
}
</style>