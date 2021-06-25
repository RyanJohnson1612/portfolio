<template>
    <div class="project-display">
        <div v-if="!viewSlot" v-on:click="viewSlot = true">
            <div class="image-overlay"></div>
            <img class="default-image" :src="defaultImg" alt="">
        </div>
        <div v-else>
            <slot name="slides"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "project-display",

    props: {
        defaultImg: {
        type: String,
            required: true,
        }
    },

    data() {
        return {
            viewSlot: false,
        }
    }
}
</script>

<style lang="scss">
.project-display {
    position:relative;
    
    .image-overlay {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
        transition: ease-out 0.25s;

        &:hover {
            background-color: rgba(0,0,0,0.2);
            cursor: pointer
        }
    }

    img {
        width: auto;
        height: 500px;
    }
}
</style>
