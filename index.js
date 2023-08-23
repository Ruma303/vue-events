const App = Vue.createApp({
    data() {
        return {
            count: 0
        }
    }, methods: {
        increment(){
            this.count++
        }
    }
});

const mountedApp = App.mount('#app');