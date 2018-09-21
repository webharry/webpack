<style lang="less">
@import "../less/login.less";
</style>

<template>
    <div class="login" @keydown.enter="handleSubmit">
        <div class="login-con">
            <Card :bordered="false">
                <p slot="title">
                    <Icon type="log-in"></Icon>
                    欢迎登录
                </p>
                <div class="form-con">
                    <Form ref="loginForm" :model="form" :rules="rules">
                        <FormItem prop="username">
                            <Input v-model="form.username" placeholder="请输入用户名">
                                <span slot="prepend">
                                    <Icon :size="16" type="person"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="form.password" placeholder="请输入密码">
                                <span slot="prepend">
                                    <Icon :size="14" type="locked"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem>
                            <Button @click="handleSubmit" type="primary" long :loading="logining">登录</Button>
                        </FormItem>
                    </Form>
                    <p class="login-tip">输入任意用户名和密码即可</p>
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
import { login, checkLogin } from "@/service"
// import { setCookie } from "@/libs/util"

export default {
    data () {
        return {
            logining: false,
            form: {
                username: "",
                password: ""
            },
            rules: {
                username: [
                    { required: true, message: "账号不能为空", trigger: "blur" }
                ],
                password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
            }
        }
    },
    methods: {
        handleSubmit () {
            this.$refs.loginForm.validate(valid => {
                if (valid) {
                    this.logining = true

                    login(this.form).then(res => {
                        this.logining = false
                        console.log(res)
                        this.setCookie("session", res.data.session)
                        localStorage.setItem("userName", this.form.username)
                        this.$router.push({ name: "business" })
                    })
                }
            })
        },
        // 判断登录状态的接口，由后端提供
        check () {
            checkLogin().then(res => {
                console.log(123, res)
                if (!res.data.isLogin) {
                    this.$router.push({ path: "/login" })
                } else {
                    this.$router.push({ path: "/business/index" })
                }
            })
        }
    },
    created () {
        this.check()
    }
}
</script>

<style>
</style>
