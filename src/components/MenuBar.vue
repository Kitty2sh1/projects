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

        ...mapGetters(['isCollapse', 'menuList']),
    },
    watch: {
        "$route": {
            handler(menu) {
                console.log(menu, "menu");//新路由
                const obj = {
                    title: menu.meta.title,
                    name: menu.name,
                    path: menu.path
                }
                this.$store.commit('tags/addTags', obj)
            },
            // 深度监听
            immediate: true,
            deep: true
        }
    },
    created() {
    }
}
</script>

<style lang="scss" scoped>
.menu {

    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
    }
}
</style>