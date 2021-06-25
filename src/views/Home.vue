<template>
	<div class="home">
		<div class="header">
			<div class="flex align-center">
				<img src="../../public/assets/logo.png" alt="Logo" width="150" height="150">
				<h1>Ryan Johnson</h1>
			</div>

		</div>
		<!-- <project-display :default-img="'./assets/projects/swc-search.JPG'">
				<template v-slot:slides>
						<div>
								you are viewing more info
						</div>
				</template>
		</project-display>

		<slider :num-slides="4">
				<template v-slot:1><div style="display: block; height: 300px; width: 600px; background: red;">test 1</div></template>
				<template v-slot:2><div style="display: block; height: 300px; width: 600px; background: red;">test 2</div></template>
				<template v-slot:3><div style="display: block; height: 300px; width: 600px; background: red;">test 3</div></template>
				<template v-slot:4><div style="display: block; height: 300px; width: 600px; background: red;">test 4</div></template>
		</slider> -->
	</div>
</template>

<script>
// import ProjectDisplay from "../components/ProjectDisplay.vue";
// import Slider from "../components/Slider.vue";

export default {
	name: "Home",
	// components: {
	// 	ProjectDisplay,
	// 	Slider
	// },
};
</script>

<style lang="scss">
body {
	background-color: $secondary;
}
.home {
	display: flex;
	justify-content: center;
}

.header {
	display: flex;
	width: 100%;
	height: 100vh;
	justify-content: center;
	align-items: center;
}

h1 {
	font-size: 50px !important;
	color: white;
	font-family: sans-serif !important;
}
</style>
