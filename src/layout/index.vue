<template>
    <div class="index">
        <el-container>
            <el-header>Header</el-header>
            <el-container>
                <el-aside width="200px">Aside</el-aside>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
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
    }

    .el-main {
        color: #333;
        height: 100%;
    }
}
</style>