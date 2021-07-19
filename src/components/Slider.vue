<template>
    <div>
        <div v-for="slide in numSlides" :key="slide" v-show="slide == currentSlide">
            <transition-group name="fade">
                <slot :name="slide"></slot>
            </transition-group>
        </div>
        <div>
            <ul v-if="dots" class="flex align-middle justify-end flex-row pointer-events-none">
                <li v-for="slide in numSlides" :key="slide" class="h-4 w-4 rounded-full m-2 bg-gray-400" v-on:click="currentSlide = slide"></li>
            </ul>
        </div>
        <div v-if="nav" v-on:click="nextSlide()">Next Slide</div>
        <div v-if="nav" v-on:click="prevSlide()">Prev Slide</div>
    </div>    
</template>

<script>
export default {
    name: 'slider',

    props: {
        numSlides: {
            type: Number,
            required: true
        },
        nav: {
            type: Boolean,
            required: false,
            default: false
        },
        autoplay: {
            type: Number,
            required: false,
            default: null
        },
        dots: {
            type: Boolean,
            required: false,
            default: false
        }
    },

    mounted() {
        if(this.autoplay) {
            this.autoChangeSlide();
        }
    },

    watch: {
        currentSlide() {
            console.log(this.currentSlide)
        }
    },

    data() {
        return {
            currentSlide: 1,
        }
    },

    methods: {
        nextSlide() {
            if(this.currentSlide < this.numSlides) {
                this.currentSlide++;
            }
            else {
                this.currentSlide = 1;
            }
        },

        prevSlide() {
            if(this.currentSlide > 1) {
                this.currentSlide--;
            }
            else {
                this.currentSlide = this.numSlides;
            }
        },

        autoChangeSlide() {
            setTimeout(() => {
                this.nextSlide();
                this.autoChangeSlide();
            },  this.autoplay)
    }
    }
}
</script>

<style lang="scss" scoped>

</style>