<template>
    <fragment class="menuitem">
            <template v-for="item in menuList">
                <el-submenu v-if="item.children&&item.children.length>0" :index="item.path" :key="item.id">
                    <template slot="title">
                        <i :class="item.icon"></i>
                        <span slot="title">{{item.label}}</span>
                    </template>
                    <template v-for="ele in item.children">
                        <el-submenu v-if="ele.children&&ele.children.length>0" :index="ele.path" :key="ele.id">
                            <template slot="title">
                                <i :class="ele.icon"></i>
                                <span slot="title">{{ele.label}}</span>
                            </template>
                        </el-submenu>
                        <el-menu-item :index="item.path+ele.path" :key="ele.id"
                            v-if="!ele.children ||ele.children.length<=0">
                            {{ele.label}}</el-menu-item>
                    </template>
                </el-submenu>
                <el-menu-item :index="item.path" :key="item.id" v-if="!item.children ||item.children.length<=0">
                    {{item.label}}</el-menu-item>
            </template>
    </fragment>
</template>

<script>
export default {
    components: {
    },
    props: {
        menuList: {
            type: Array,
            default: () => []
        },
    },
    name: 'menuItem',
    data() {
        return {};
    },
    methods: {},
    computed: {},
    created() { }
}
</script>

<style lang="scss" scoped>
.menuitem {}
</style>