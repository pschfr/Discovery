<template>
  <header>
    <b-navbar toggleable="md" type="dark" variant="dark" fixed="top">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="/">{{ msg }}</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item href="/">Home</b-nav-item>
          <b-nav-item href="https://github.com/pschfr/discovery" target="_blank">Source</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script src="../assets/js/header.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/scss/header.scss" scoped lang="scss"></style>
