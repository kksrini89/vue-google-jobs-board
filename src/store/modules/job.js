export const state = {
    jobs: [],
    selectedJob: null,
    savedJobs: []
};

export const getters = {
    selectedJob = () => state.selectedJob,
    allJobs = () => state.jobs,
    bookmarkedJobs = () => state.savedJobs
}

export const actions = {
    getSelectedJob() { },
    getAllJobs({ commit }) {
        return fetch('https://jobs.github.com/positions.json', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(data => data.json())
            .then(data => {
                commit('SET_ALL_JOBS', data)
            });
     },
    getBookmarkedJobs() { }
}

export const mutations = {
    SET_ALL_JOBS(state, newValue) {
        if(newValue && newValue.length)
            state.jobs = [...newValue];
    },
    SELECTED_JOB(state, newValue) { },
    BOOKMARK_JOB(state, newValue) { }
}