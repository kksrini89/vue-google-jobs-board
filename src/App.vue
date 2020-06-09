<template>
  <div id="app">
    <div class="container bg-light border border-light rounded shadow my-3">
      <div id="main-content d-flex flex-column justify-content-center align-items-center">
        <div class="p-3">
          <nav class="nav bg-dark nav-pills nav-justified">
            <router-link to="/" class="nav-item nav-link" active-class="active" exact>Jobs</router-link>
            <router-link to="/saved" class="nav-item nav-link" active-class="active">Saved</router-link>
            <router-link to="/alerts" class="nav-item nav-link" active-class="active">Alerts</router-link>
          </nav>
          <JobFilter />
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JobFilter from './components/JobFilter.vue';
export default {
  name: 'App',
  components: {
    JobFilter,
  },
};
</script>

<style scoped>
.container {
  width: 75%;
}
</style>
