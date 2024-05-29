const { createApp, ref } = Vue

const app = createApp({    
    setup() {        
        const show = ref(false)
        const minutes = ref('')
        const seconds = ref(0)
        const step = ref(0)
        const progress = ref(0)
        const running = ref(false)
        const playing = ref(false)
        const interval = ref()
        return {
            show, minutes, seconds, step, progress, running, playing, interval
        }
    },
    methods: {
        setAlarm() {
            if(this.minutes !== "") {
                this.running = true
                this.step = (this.minutes * 60) / 100
                this.interval = setInterval(() => {
                    if(this.progress < 100) {
                        this.progress++                        
                    }
                    else {
                        this.playing = true
                    }
                }, this.step * 1000)                
            }
        },
        close() {
            this.playing = false
            this.step = 0
            this.running = false
            this.minutes = ''
            this.progress = 0
            clearInterval(this.interval)
        }
    }
})

app.mount("#app")