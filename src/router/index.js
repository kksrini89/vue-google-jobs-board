import Vue from 'vue';
import VueRouter from 'vue-router';

import JobList from './../components/JobList.vue';
import SavedJobs from './../components/SavedJobs.vue';
import Alert from './../components/Alert.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'jobs',
      path: '/',
      component: JobList,
    },
    {
      name: 'saved-jobs',
      path: '/saved',
      component: SavedJobs,
    },
    {
      name: 'alerts',
      path: '/alerts',
      component: Alert,
    },
  ],
});
