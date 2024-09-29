const App = Vue.createApp({
    data() {
        return {
            count: 0,
            input: '',
            x: null,
            y: null,
            currentColor: 'black',
        }
    }, methods: {
        increment() {
            this.count++
        },
        showParams(p1, p2) {
            console.log(p1, p2);
        },
        handleClick(event, message) {
            console.log(message);  // Hello, World!
            console.log(event.target.tagName); // BUTTON
          },
        onInput(event) {
            this.input = event.target.value;
        },
        updateCoordinates(e) {
            this.x = e.clientX;
            this.y = e.clientY;
        },
        changeArticleColor(color) {
            this.currentColor = color;
        }
    }
});

const mountedApp = App.mount('#app');