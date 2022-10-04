<template>
    <div class="menu">
        <el-menu :default-active="activeId" class="el-menu-vertical-demo" :collapse="isCollapse" router unique-opened>
            <menu-item :menuList="menuList"></menu-item>
        </el-menu>
    </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
    components: {
        "menu-item": () => import('./menuItem.vue')
    },
    name: 'menuBar',
    data() {
        return {
        };
    },
    methods: {},
    computed: {
        activeId() {
            return this.$route.path
        },

        ...mapGetters(['isCollapse','menuList']),
    },

    created() { }
}
</script>

<style lang="scss" scoped>
.menu {
    
    .el-menu-vertical-demo:not(.el-menu--collapse){
        width: 200px;
    }
}
</style>