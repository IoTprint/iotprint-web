import Vue from 'vue';
import axios from 'axios'

export default {
	state: {
		jobs: [],
		isLoading: true,
	},

	getters: {
		jobs: state => state.jobs,
		jobLoading: state => state.isLoading,
	},

	mutations: {
		SET_JOBS(state, jobs) {
			state.jobs = jobs
			state.isLoading = false
		},
	},

	actions: {
		async fetchJobs({ commit }) {
			try {
				this.state.isLoading = true
				const res = await axios.get('/jobs')
				commit('SET_JOBS', res.data.jobs)
			} catch (err) {
				// console.log(err)
			}
		},

		async deleteJob({ dispatch }, jobId) {
			try {
				const res = await axios.delete('/job/' + jobId)
				// console.log(res)
				Vue.$toast.warning(res.data.message)
				dispatch('fetchJobs')
			} catch (err) {
				// console.log(err)
				Vue.$toast.error(err.response.data.message)
			}
		},
	},
}
