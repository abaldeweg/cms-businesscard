<template>
  <b-app>
    <b-masthead>
      <b-masthead-item type="center">
        baldeweg/cms-businesscard
      </b-masthead-item>
    </b-masthead>

    <b-content>
      <b-container size="m" align="right" v-if="nav">
        <ul class="nav">
          <li class="nav_item" v-for="item in nav" :key="nav.link">
            <router-link :to="item.link">{{item.text}}</router-link>
          </li>
        </ul>
      </b-container>

      <b-container size="m">
        <Content/>
      </b-container>

      <b-container size="m" v-if="links">
        <ul class="nav">
          <li class="nav_item" v-for="item in links" :key="links.link">
            <router-link :to="item.link">{{item.text}}</router-link>
          </li>
        </ul>
      </b-container>
    </b-content>
  </b-app>
</template>

<script>
export default {
  name: 'layout',
  computed: {
    nav (){
      return this.$themeConfig.nav
    },
    links (){
      return this.$themeConfig.links
    }
  }
}
</script>

<style src="@baldeweg/components/dist/components.css"/>

<style>
.header-anchor {
  display: none;
}
</style>

<style scoped>
.nav {
  list-style: none;
  padding: 0;
  margin: 0;
}
.nav_item {
  display: inline;
  margin-right: 20px;
}
</style>
