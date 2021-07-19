<template>
    <div>
        <div class="flex flex-col items-center">
            <div v-for="slide in numSlides" :key="slide" v-show="slide == currentSlide">
                <transition-group name="fade">
                    <slot :name="slide" :key="slide"></slot>
                </transition-group>
            </div>
            <div class="flex items-center">
                <div v-if="nav" class="prev-button mr-2" @click="prevSlide()"></div>
                
                <ul v-if="dots" class="flex align-middle justify-end flex-row">
                    <li v-for="slide in numSlides" :key="slide" class="h-4 w-1 m-2 bg-white hover:opacity-100 cursor-pointer" :class="( currentSlide == slide ? 'opacity-100' : 'opacity-30')" @click="gotoSlide(slide)"></li>
                </ul>

                <div v-if="nav" class="next-button ml-2" @click="nextSlide()"></div>
            </div>
        </div>
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

        gotoSlide(slide) {
            this.currentSlide = slide;
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
    .prev-button {
        width: 0;
        height: 0;
        border-top: 8px solid transparent;
        border-right: 10px solid white;
        border-bottom: 8px solid transparent;
        opacity: 0.3;
        cursor: pointer;

        &:hover {
            opacity: 1;
        }
    }

    .next-button {
        width: 0;
        height: 0;
        border-top: 8px solid transparent;
        border-left: 10px solid white;
        border-bottom: 8px solid transparent;
        opacity: 0.3;
        cursor: pointer;

        &:hover {
            opacity: 1;
        }
    }
</style>