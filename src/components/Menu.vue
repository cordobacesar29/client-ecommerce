<template>
  <div class="ui secondary menu">
    <div class="ui container">
      <div class="left menu">
        <router-link class="item" to="/">
          <img class="ui small image" src="../assets/logo.png" />
        </router-link>
      </div>
      <div class="right menu">
        <router-link class="item" to="/login" v-if="!token">
          Iniciar sesión
        </router-link>
        <template v-if="token">
          <router-link class="item" to="/order" v-if="token">
          Pedidos
        </router-link>
        <span class="ui item cart">
          <i class="shopping cart icon"></i>
        </span>
        <span class="ui item logout" @click="logout">
          <i class="sign-out icon"></i>
        </span>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { deleteTokenApi, getTokenApi } from "../api/token";
export default {
  name: "Menu",
  setup() {
    const token = getTokenApi();

    const logout = ()=> {
      deleteTokenApi();
      location.replace("/");
    };
    return {
      token,
      logout
    };
  },
};
</script>

<style lang="scss" scoped>
.ui.menu.secondary {
  background-color: #16202b;

  .item {
    color: #fff;
    &:hover {
      color: #1fa1f1;
    }
  }

  .menu.left {
    width: 50%;
    .ui.image {
      width: 40px;
    }
  }

  .menu.right {
    width: 50%;
    justify-content: flex-end;

    .logout,
    .cart {
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
