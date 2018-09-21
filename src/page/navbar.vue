<template>
    <Menu mode="horizontal" theme="dark" active-name="1">
        <div class="layout-logo">Harry脚手架</div>
        <div class="layout-nav">
            <MenuItem name="2">
                <Icon type="ios-navigate"></Icon>
                <Dropdown @on-click="handleClick($event)">
                    <a href="javascript:void(0)">
                        {{username}}
                        <Icon type="arrow-down-b"></Icon>
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem name="logout">退出登录</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </MenuItem>
        </div>
    </Menu>
</template>

<script>
import { logout } from "@/service"

export default {
    name: "navbar",
    data () {
        return {
            theme1: "light",
            username: "",
            recordForm: {
                historyFinishedCount: "",
                todayFinishedCount: ""
            }
        }
    },
    methods: {
        // 退出登录
        gologout: function () {
            var _this = this

            logout({}).then(res => {
                if (res.status === 200) {
                    localStorage.clear("userName")// 清除用户信息
                    // 成功后删除cookie
                    this.delCookie("session")
                    _this.$router.push({ name: "login" })
                }
            })
        },
        handleClick (name) {
            if (name === "logout") {
                this.gologout()
            }
        },
        // 获取用户信息
        getUserInfo () {
            if (localStorage.getItem("userName")) {
                this.username = localStorage.getItem("userName")
            }
        }
    },
    created () {
        this.getUserInfo()
    }
}
</script>

<style lang="less" scoped>
.layout-logo {
  width: 190px;
  height: 40px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: -45px;
  line-height: 40px;
  color: #fff;
  font-size: 18px;
  text-align: center;
  font-weight: 500;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.ul-style {
  float: left;
  margin-right: 15px;
}
.ul-style li {
  float: left;
  list-style-type: none;
  margin-right: 15px;
}
.span-label {
  display: block;
  height: 20px;
}
.text-style{
  display: block;
  text-align: center;
}
</style>
