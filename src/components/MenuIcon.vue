<template>
    <div class="menuicon">
        <i @click="changeIcon" :class="isCollapse?'el-icon-s-unfold':'el-icon-s-fold'"></i>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex"
export default {
    name: 'MenuIcon',
    data() {
        return {};
    },
    methods: {
        ...mapMutations({
            changeCollapse: 'Menu/changeCollapse'
        }),
        changeIcon() {
            this.changeCollapse()
        }
    },
    computed: {
        ...mapGetters(['isCollapse'])
    },
    created() { }
}
</script>

<style lang="scss" scoped>
.menuicon {
    width: 40px;
    height: 40px;
    background-color: #eee;
    text-align: center;

    i {
        font-size: 24px;
        line-height: 40px;
    }
}
</style>