<template>
    <div class="tabs">
        <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
            <el-tab-pane v-for="(item, index) in editableTabs" :key="item.name" :label="item.title" :name="item.name">
                {{item.content}}
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
export default {
    name: 'tabs',
    data() {
        return {
            editableTabs: []
        };
    },
    methods: {
        removeTab() { },
    },
    computed: {
        tabs(){
            return this.$route.meta.title
        }
    },
    created() { }
}
</script>

<style lang="scss" scoped>
.tabs {}
</style>