<template>
  <h1 :class="$style.appTitle">SubVue App</h1>
  <div id="nav">
    <router-link to="/component1">component1</router-link> |
    <router-link to="/component2">component2</router-link>
  </div>
  <router-view />
  <div style="overflow-wrap: break-word;">token: {{ token }}</div>
  <div>user: {{ user }}</div>
</template>

<style src="./index.css" module></style>
<script src="./index.js"></script>

