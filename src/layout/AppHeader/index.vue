<template>
    <div class="app-header">
        <p class="title">肥鱼权限管理系统</p>
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
            <div class="date">
                <p>欢迎您，<b>肥鱼</b></p>
                <p>{{data}} {{day}}</p>
            </div>
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
            day: null
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
            const week = [
                "星期日",
                "星期一",
                "星期二",
                "星期三",
                "星期四",
                "星期五",
                "星期六",
            ]
            this.data = dayjs().format('YYYY-MM-DD HH:mm:ss')
            this.day = week[dayjs().day()]
            // console.log(dayjs().day());
            setInterval(() => {
                this.data = dayjs().format('YYYY-MM-DD HH:mm:ss')
                this.day = week[dayjs().day()]
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

    .title {
        line-height: 60px;
    }

    .user {
        display: flex;

        ::v-deep .el-avatar {
            margin: 10px;
        }

        .date {
            padding: 10px 0;
            box-sizing: border-box;
            font-size: 15px;
        }
    }
}
</style>