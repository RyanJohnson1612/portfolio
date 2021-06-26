<template>
	<div class="home">
		<div class="header">
			<div class="flex items-center">
				<img src="../../public/assets/logo.png" alt="Logo" width="150" height="150">
				<h1 class="text-5xl text-white ml-5">Ryan Johnson</h1>
			</div>
		</div>

		<div class="content">
			<div class="relative">
				<slider :num-slides="4" :autoplay="5000">
					<template v-slot:1><div><img src="../../public/assets/projects/swc-search.jpeg"></div></template>
					<template v-slot:2><div><img src="../../public/assets/logo.png"></div></template>
					<template v-slot:3><div><img src="../../public/assets/projects/swc-search.jpeg"></div></template>
					<template v-slot:4><div><img src="../../public/assets/logo.png"></div></template>
				</slider>
				<div class="absolute w-full h-full bg-black opacity-50"></div>
			</div>
		</div>

		<!-- <project-display :default-img="'./assets/projects/swc-search.JPG'">
				<template v-slot:slides>
						<div>
								you are viewing more info
						</div>
				</template>
		</project-display> -->
	</div>
</template>

<script>
// import ProjectDisplay from "../components/ProjectDisplay.vue";
import Slider from "../components/Slider.vue";

export default {
	name: "Home",
	components: {
		// ProjectDisplay,
		Slider
	},
};
</script>

<style lang="scss">
body {
	background-color: $secondary;
}
.home {
	
}

.header {
	display: flex;
	width: 100%;
	height: 100vh;
	justify-content: center;
	align-items: center;
}
</style>
