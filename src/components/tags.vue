<template>
    <div class="tags">
        <el-tabs @tab-click="handleTabClick" v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
            <el-tab-pane v-for="(item) in editableTabs" :key="item.name" :label="item.title" :name="item.name">
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
export default {
    name: 'tags',
    data() {
        return {

        };
    },
    methods: {
        handleTabClick(val) {
            // 点击跳转
            this.$router.push({ name: this.editableTabsValue })
        },
        // 删除
        removeTab(targetName) {
            // console.log(targetName,'targetName');  //删除的元素name
            // 删除的是home  停止执行
            if (targetName === 'home') return
            let tabs = this.editableTabs;
            let activeName = this.editableTabsValue;
            if (activeName === targetName) {
                tabs.forEach((tab, index) => {
                    if (tab.name === targetName) {
                        let nextTab = tabs[index + 1] || tabs[index - 1];
                        if (nextTab) {
                            activeName = nextTab.name;
                        }
                    }
                });
            }

            this.editableTabsValue = activeName;
            this.editableTabs = tabs.filter(tab => tab.name !== targetName);
            this.$store.commit('tags/setEditValue', activeName)
            this.$router.push({ name: activeName })
        }
    },
    computed: {
        editableTabsValue: {
            get() {
                return this.$store.getters.editableTabsValue
            }, set(val) {
                this.$store.commit('tags/setEditValue', val)
            }
        },
        editableTabs: {
            get() {
                return this.$store.getters.editableTabs
            }, set(val) {
                console.log(val);
                this.$store.commit('tags/newTags', val)
                // this.$store.getters.editableTabs = val
            }
        }
    },
    created() { }
}
</script>

<style lang="scss" scoped>
.tags {
    height: 100%;
    width: 100%;
}
</style>