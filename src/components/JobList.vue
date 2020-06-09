<template>
  <div class="jobs">
    <JobItem v-for="job in jobs" :key="job.id" :job="job"></JobItem>
  </div>
</template>
<script>
import JobItem from './JobItem.vue';

export default {
  name: 'JobsList',
  components: {
    JobItem,
  },
  data: function() {
    return {
      jobs: [
        {
          id: '257d2956-39e3-4dc8-985a-6d0715640156',
          type: 'Full Time',
          company: 'VerifyMyAge - KYC AVC UK LTD',
          location: 'London',
          title: 'VP Product',
          company_logo:
            'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcFNFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a81da32a113bf0aa5d2db823f67a9c965f4c0226/VMA_LOGO.png',
        },
        {
          id: '9f7d19d7-a904-4e2d-8303-4a6b7f24f810',
          type: 'Full Time',
          company: 'VeirfyMyAge - KYC AVC UK LTD',
          location: 'London',
          title: 'QA Engineer',
          company_logo:
            'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcFdFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--398f9be36177b805b7727116818e1ecfbcd387e5/VMA_LOGO.png',
        },
        {
          id: 'e9e632a7-c756-40c9-b1ca-c3eb5c7f9ce3',
          type: 'Full Time',
          company: 'Game Closure',
          location: 'San Francisco, Mountain View, Tokyo, Remote',
          title: 'Senior Game Engineer (REMOTE)',
          company_logo:
            'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaTV1IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b586f79a85322f93304aae975ae4ae8556e35bfe/GClogo_small.png',
        },
        {
          id: '7e5a0fb2-7786-4a1d-839a-b6047da36f61',
          type: 'Full Time',
          company: 'Defendify',
          location: 'Maine',
          title: 'Full Stack Engineer',
          company_logo:
            'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcG1FIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--20ed44319c9fb13fadc44b99f028899632a7ffb8/Defendify_grey_R.png',
        },
        {
          id: '7a86dfca-8b8e-4df5-b6a6-b656e866c607',
          type: 'Full Time',
          company: 'VerifyMyAge - KYC AVC UK LTD',
          location: 'London',
          title: 'Full-Stack Web Developer',
          company_logo:
            'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb3lFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--9a411824a9b1bfdea9f96bf57b66b5c0e279ff56/VMA_LOGO.png',
        },
        {
          id: '8677c8a3-747a-4842-a891-550b23c79c55',
          type: 'Full Time',
          company: 'Applied',
          location: 'Remote',
          title: 'Senior Full Stack Engineer',
          company_logo:
            'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb0dFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a82d24b46cf2fbf0f4856f0b3df60104d1f6e10f/Applied_Master%20(2)%201%20(1).png',
        },
        {
          id: '73baa170-e26f-4d16-b00e-3e1629a1ab8b',
          type: 'Full Time',
          company: 'Connected Health Solutions BV',
          location: 'Amsterdam',
          title: 'Service Reliability Engineer',
          company_logo:
            'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbnlFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--91cc40f8d0fe9c058f1112c764513652597a3ba5/carexs-corporate-payoff-600%20(1).png',
        },
        {
          id: '90b7a228-a21f-44a1-9c44-d113e06cef9d',
          type: 'Full Time',
          company: 'Kasisto',
          location: 'New York',
          title: 'Front-End Software Engineer',
          company_logo:
            'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBblNFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8401c5084da6bb1a0cacdd3ef319e6f919fcc738/Kasisto_Logo_c90x90.png',
        },
        {
          id: 'df3f23eb-a30c-4584-8778-08792d514e35',
          type: 'Full Time',
          company: 'Kinsta',
          location: 'North America, remote',
          title: 'Senior JavaScript Developer Trainer',
          company_logo:
            'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbkdFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--eaa682970e0218e11b80f8cd04754426bcc58df9/kinsta-logo1.png',
        },
        {
          id: '16140a4a-ecbf-4e69-a457-320a16a8960f',
          type: 'Full Time',
          company: 'InnoGames GmbH',
          location: 'Hamburg',
          title: 'PHP Developer & DevOps Engineer - Elvenar',
          company_logo:
            'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbWlFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ca65fd58d1dc26f0c467fe0c8d8cf0fb7a897033/logo_innogames_devlop.png',
        },
      ],
    };
  },
};
</script>
<style lang="scss"></style>
