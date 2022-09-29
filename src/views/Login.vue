<template>
    <div class="login">
        <el-card class="box-card">
            <h1>系统登录</h1>
            <el-form ref="loginForm" :rules="rules" :model="loginForm">
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item class="verification" prop="code">
                    <el-input v-model="loginForm.code" placeholder="请输入验证码"></el-input>
                    <img :src="imgCodeUrl" alt="" @click="imgRefresh">
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onLoginSubmit('loginForm')">{{log}}</el-button>
                    <el-button class="el-button-default" @click="resetForm('loginForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
import { getLogin, getLoginImg } from "../api/login"
import axios from "axios";
export default {
    name: 'login',
    data() {
        return {
            log: "登录",
            imgCodeUrl: "",
            loginForm: {
                username: "admin",
                password: "1234",
                code: ""
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ],
            }
        };
    },
    methods: {
        // 登录按钮
        onLoginSubmit(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let str = `username=${this.loginForm.username}&password=${this.loginForm.password}&code=${this.loginForm.code}`
                    this.$store.dispatch('queryLogin', str)
                    this.$message({
                        message: '登录成功',
                        type: 'success'
                    });
                    this.$router.push('/')
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        // 重置按钮
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        // 验证码接口
        async queryImage() {
            try {
                await getLoginImg().then(res => {
                    console.log(res);
                    this.imgCodeUrl = window.URL.createObjectURL(res.data)
                })
            } catch (error) {
                console.log(error.message);
            }
        },
        // 点击验证码切换
        imgRefresh() {
            this.queryImage()
        }

    },
    computed: {},
    created() {
        this.queryImage()

    }
}
</script>

<style lang="scss" scoped>
.login {
    ::v-deep .el-card {
        width: 350px;
        height: 300px;
        margin: 150px auto;
        border-radius: 20px;
        padding: 20px 35px;

        h1 {
            text-align: center;
            font-size: 22px;
            padding-bottom: 20px;
        }

        .el-button {
            width: 165px;
        }

        .el-button-default {
            margin-left: 20px;
        }

        .el-card__body {
            padding: 0;
        }

        .verification {
            .el-input {
                width: 224px;
                height: 36px;
            }

            img {
                width: 100px;
                height: 36px;
                vertical-align: middle;
                margin-left: 20px;
            }
        }
    }
}
</style>