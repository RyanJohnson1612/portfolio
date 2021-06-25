<template>
    <div>
        <div v-for="slide in numSlides" :key="slide" v-show="slide == currentSlide">
            <slot :name="slide"></slot>
        </div>
        <div v-on:click="nextSlide()">Next Slide</div>
        <div v-on:click="prevSlide()">Prev Slide</div>
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
        }
    }
}
</script>

<style lang="scss" scoped>

</style>