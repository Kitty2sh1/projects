<template>
    <div class="index">
        <el-container>
            <el-header>
                <app-header></app-header>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <app-aside></app-aside>
                </el-aside>
                <el-main>
                    <app-main></app-main>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    components: {
        "app-header": () => import('./AppHeader'),
        "app-aside": () => import('./AppAside'),
        "app-main": () => import('./AppMain')
    },
    name: 'index',
    data() {
        return {};
    },
    methods: {},
    computed: {},
    created() { }
}
</script>

<style lang="scss" scoped>
.index {
    height: 100%;

    .el-container {
        height: 100%;
    }

    .el-header {
        background-color: #167bd8;
        color: #fff;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
        height: 100%;
        border: 1px #ccc solid;
    }

    .el-main {
        color: #333;
        height: 100%;
    }
}
</style>