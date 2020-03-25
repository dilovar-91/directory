import Vue from 'vue'
import InfiniteLoading from 'vue-infinite-loading'

Vue.use(InfiniteLoading, {
	props: {
		spinner: 'waveDots',
		/* other props need to configure */
	},
	system: {
		throttleLimit: 50,
		/* other settings need to configure */
	},
	slots: {
		noMore: 'Нет больше данных', // you can pass a string value
		// error: InfiniteError, // you also can pass a Vue component as a slot
	},
});