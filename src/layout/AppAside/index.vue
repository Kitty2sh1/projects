<template>
    <div class="app-aside">
        <menu-bar></menu-bar>
    </div>
</template>

<script>
export default {
    components: {
        "menuBar": () => import('../../components/MenuBar.vue')
    },
    name: 'appAside',
    data() {
        return {
        };
    },
    methods: {},
    computed: {
    },
    created() { }
}
</script>

<style lang="scss" scoped>
.app-aside {
    ::v-deep .el-menu {
        border: 0;
    }
}
</style>