<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
</style>
<template>
    <div class="layout">
        <Layout>
            <Header>
                <navBar></navBar>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu active-name="infoCollection" theme="light" width="auto" :open-names="['infoCollection']" @on-select="getRouter">
                        <Submenu name="infoCollection">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                业务模块1
                            </template>
                            <menu-item name="infoCollection">子模块1</menu-item>
                        </Submenu>
                    </Menu>
                </Sider>
                 <Layout :style="{padding: '0 24px 24px'}">
                  <Breadcrumb :style="{margin: '24px 0'}">
                      <BreadcrumbItem>主页</BreadcrumbItem>
                      <BreadcrumbItem>业务模块名称</BreadcrumbItem>
                      <BreadcrumbItem>子模块名称</BreadcrumbItem>
                  </Breadcrumb>
                  <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                      <router-view></router-view>
                  </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
import navBar from "./navbar"
import siderBar from "./siderbar"

export default {
    name: "Main",
    data () {
        return {
            shrink: false,
            userName: ""
        }
    },
    methods: {
        getRouter (name) {
            // 命名的路由
            this.$router.push({ name: name })
        }
    },
    components: {
        siderBar,
        navBar
    }
}
</script>
