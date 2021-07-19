import { createStore } from "vuex";

export default createStore({
	state: {
		section: 1,
	},

	mutations: {
		incrementSection(state) {
			state.section++;
		},
		
		decrementSection(state) {
			state.section--;
		}
	},

	getters: {
		section: state => {
			return state.section;
		}
	},

	actions: {
		incrementSection(context) {
			context.commit('incrementSection');
		},

		decrementSection(context) {
			context.commit('decrementSection');
		}
	},
});
