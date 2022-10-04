<template>
    <div class="app-header">
        <p>肥鱼权限管理系统</p>
        <div class="user">

            <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                    <el-avatar src="https://img1.imgtp.com/2022/09/30/3SVkWtfG.jpg"></el-avatar>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>还原数据</el-dropdown-item>
                    <el-dropdown-item command="logout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <p>欢迎您，肥鱼</p>
            <p>{{data}}</p>
        </div>
    </div>
</template>

<script>
import dayjs from "dayjs"
export default {
    name: 'app-header',
    data() {
        return {
            data: null,
            day:null
        };
    },
    methods: {
        // 退出登录
        handleCommand(command) {
            switch (command) {
                case "logout":
                    this.loginOut()
                    break;
            }
        },
        // 退出登录接口
        async loginOut() {
            try {
                const res = await this.$store.dispatch('queryLogout')
                if (!res) return
                this.$router.push('/login')
                this.$message({
                    message: '退出登录成功',
                    type: 'success'
                });
            } catch (error) {
                console.log(error.message);
            }
        },
        handleData() {
            this.data = dayjs().format('YYYY-MM-DD HH:mm:ss')
            this.day=dayjs().day()
            console.log(dayjs().day());
            setInterval(() => {
                this.data = dayjs().format('YYYY-MM-DD HH:mm:ss')
            }, 1000);
        }
    },
    computed: {
    },
    created() { 
        this.handleData()
    }
}
</script>

<style lang="scss" scoped>
.app-header {
    height: 100%;
    display: flex;
    padding: 0 20px;
    justify-content: space-between;
    box-sizing: border-box;

    .user {
        display: flex;

        ::v-deep .el-avatar {
            margin: 10px;
        }
    }
}
</style>