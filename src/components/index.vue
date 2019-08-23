<template>
  <div class="container">
    <header class="top">
      <div class="logo">
        <img src="../static/images/logo.png" alt />
      </div>
      <div class="menu">
        <div class="menu-item" @click="toggle('')">首页</div>
        <div class="menu-item" @click="toggle('')">课程中心</div>
        <div class="menu-item" @click="toggle('')">资料下载</div>
        <div class="menu-item" @click="toggle('person')">我的学习</div>
        <div class="menu-item">
          <a-icon type="search" />
        </div>
        <div class="menu-item">
          <a-icon type="bell" />
        </div>
        <div class="menu-item">
          <div class="person-message" @mouseenter="isMessShow = true;" @mouseleave="isMessShow = false;">
            <a-dropdown>
              <a class="ant-dropdown-link" href="#" style="font-size:12px;">
                <img src="../static/images/user.jpg" width="30" style="border-radius:50%" />
                李叁.JAVA
                <a-icon type="down" />
              </a>
            </a-dropdown>
            <div class="person-message-box" v-if="isMessShow">
              <div>
                <div class="message">
                  <div class="head">
                    <img src="../static/images/user.jpg" width="70" style="border-radius:50%">
                  </div>
                  <div class="name-mess">
                    <div class="name">
                      李叁
                      <span>|</span>
                      JAVA
                    </div>
                    <div class="dept">产品交付部</div>
                    <div class="order">排名：<span style="color:red">7</span>/390</div>
                  </div>
                </div>
                <div class="tel">
                  <div class="tel-num">电话：15565656565</div>
                  <div class="email">邮箱：lisan@persagy.com</div>
                  <div class="logout">退出登录</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section class="main">
      <router-view></router-view>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
      isMessShow: false,
    };
  },
  methods: {
    toggle(router_name) {
      this.router.push(router_name);
    }
  }
};
</script>

<style lang="less">
.container {
  height: 100%;
  min-width: 1280px;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 63px;
    width: auto;
    padding-right: 10px;
    box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.1);
    .logo {
      height: 100%;
      width: 237px;
    }
    .menu {
      display: flex;
      justify-content: flex-end;
      height: 100%;
      padding-left: 20px;
      width: calc(100% - 237px);
      .menu-item {
        display: flex;
        align-items: center;
        color: #aeaeae;
        font-size: 16px;
        padding: 0 10px;
        .person-message {
          position: relative;
          .person-message-box {
            position: absolute;
            bottom: -205px;
            left: -100%;
            z-index: 1000;
            width: 200px;
            height: 200px;
            background: #fff;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
            border-radius: 4px;
            >div {
              height: 100%;
              >div {
                height: 50%;
                &:last-child {
                  background: #F2F2F2;
                }
              }
              .message {
                display: flex;
                padding: 5px;
                .head {
                  width: 80px;
                  height: 100%;
                }
                .name-mess {
                  width: 120%;
                  height: 100%;
                  font-size: 14px;
                  .name {
                    font-size: 16px;
                    font-weight: 900;
                    color: #000;
                    >span {
                      color: #ccc;
                    }
                  }
                }
              }
              .tel {
                padding: 5px;
                  >div {
                    font-size: 12px;
                    color: #B8B8B8;
                    margin-top: 16px;
                    text-align: left;
                    &:last-child {
                      margin-top: 0;
                      text-align: right;
                      color: #5AADEA;
                    }
                  }
                }
            }
          }
        }
        &:hover {
          background: #eee;
          color: #50a9ea;
        }
      }
    }
  }
  .main {
    display: flex;
    height: calc(100% - 70px);
  }
}
</style>
