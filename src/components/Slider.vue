<template>
    <div>
        <div v-for="slide in numSlides" :key="slide" v-show="slide == currentSlide">
            <transition name="fade">
                <slot :name="slide"></slot>
            </transition>
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
            required: true,
        },
        nav: {
            type: Boolean,
            required: false,
            default: false
        },
        autoplay: {
            type: Number,
            required: false,
        }
    },

    mounted() {
        if(this.autoplay > 0) {
            this.autoChangeSlide();
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