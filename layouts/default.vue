<template>
  <v-app>
    <v-app-bar app elevation="5">
      <img
        src="images/logo.png"
        alt="..."
        class="logo-img"
        @click="clickLogo()"
      />
      <v-toolbar-title>Raven's Advanced Progressive Matrices</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <div class="wrapper">
        <v-container>
          <Nuxt />
        </v-container>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "DefaultLayout",
  methods: {
    ...mapActions({
      clearAppCorWrongLists: "test/clearAppCorWrongLists",
      clearAnswersList: "test/clearAnswersList",
    }),
    clickLogo() {
      this.clearAnswersList();
      this.clearAppCorWrongLists();
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss">
.wrapper {
  min-height: 100vh;
}

.logo-img {
  max-height: 40px;
  max-width: 40px;
  margin-right: 4px;
}
</style>
