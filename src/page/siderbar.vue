<template>
    <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
            <Menu active-name="infoCollection" theme="light" width="auto" :open-names="['infoCollection']" @on-select="getRouter">
                <Submenu name="infoCollection">
                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                        主页
                    </template>
                    <MenuItem name="infoCollection">业务页</MenuItem>
                </Submenu>
            </Menu>
        </Sider>
        <slot></slot>
    </Layout>
</template>

<script>
export default {
    name: "siderbar",
    data () {
        return {
            theme1: "dark"
        }
    },
    methods: {
        getRouter (name) {
            // 命名的路由
            this.$router.push({ name: name })
        }
    }
}
</script>
<style lang="less" scoped>
</style>
