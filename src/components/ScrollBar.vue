<template>
    <div class="scrollbar-container">
        <div class="scrollbar-track" ref="track"></div>
        <div class="scrollbar-thumb" ref="thumb">
            {{ section - 1 }} / {{ numSections }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'ScrollBar',

    props: {
        numSections: {
            type: Number,
            required: true,
        }
    },

    computed: {
        section() {
            return this.$store.getters.section;
        },
    },

    watch: {
        section() {
            var trackHeight = this.$refs.track.offsetHeight;
            var position = ((this.section - 2) / (this.numSections - 1)) * trackHeight + 50;
            this.$refs.thumb.style.top = position + 'px';
        }
    },
}
</script>

<style lang="scss">
    .scrollbar-container {
        display: flex;
        justify-content: center;
        height: 100%;
        width: 100px;
        padding: 100px 0;

        .scrollbar-track {
            position: relative;
            height: 100%;
            width: 2px;
            background-color: $primary;
        }
    
        .scrollbar-thumb {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            height: 100px;
            width: 100px;
            background-color: $secondary;
            color: $primary;
            transition: top 0.75s ease-in;
        }
    }
</style>