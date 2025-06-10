<template>
  <div>
    <div class="basic-layout">
      <Menu/>
      <div class="ui container">
        <slot />
      </div>
    </div>
    <Cart />
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
import Cart from "../components/Cart/CartVue.vue"

export default {
  name: "BasicLayout",
  components: {
    Menu,
    Cart
  },
  setup() {},
};
</script>

<style></style>
