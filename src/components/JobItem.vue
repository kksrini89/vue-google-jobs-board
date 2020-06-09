<template>
  <div class="card job mb-2" v-if="!!job">
    <div class="card-body">
      <div class="row">
        <div class="d-none d-md-block col-1">
          <img :src="job.company_logo" alt="CompanyLogo" class="img-fluid" />
        </div>
        <div class="col-9">
          <h5 class="card-title">{{ job.title }}</h5>
          <h6 class="card-subtitle text-muted">{{ job.company }}</h6>
          <span class="badge badge-light mt-2 job-type">{{ job.type }}</span>
        </div>
        <a href="javascript:void(0)" @click="onBookmark(job)" class="col-2 mt-2"><i class="far fa-bookmark fa-2x"></i></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'JobItem',
  props: {
    job: {
      type: Object,
      default: null,
      required: true,
    },
  },
  data: function() {
    return {};
  },
  methods: {
    onBookmark(job) {
      console.log(job);
    },
  },
};
</script>
<style scoped></style>
