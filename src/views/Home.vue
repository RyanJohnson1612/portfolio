<template>
	<div class="home">

		<!-- Header
		=========================================================== -->
		<div ref="1" class="flex items-center justify-center relative w-full h-screen">
			<div class="flex flex-col sm:flex-row items-center">
				<img src="../../public/assets/logo.png" alt="Logo" width="150" height="150">
				<h1 class="text-5xl text-white mt-6 sm:mt-0 ml-0 sm:ml-5">Ryan Johnson</h1>
			</div>
			
			<div v-if="section < 4 && !selected" class="fixed bottom-0 mb-8 cursor-pointer arrow-container" v-on:click="nextSection()">
				<div class="down-arrow"></div>
			</div>
		</div>

		<!-- Section 1
		=========================================================== -->
		<div ref="2" class="flex items-center justify-center w-full h-screen">
			<div class="relative w-full md:w-3/4 lg:w-1/2 mx-4" v-on:click="sectionSelected()">
				<div class="overflow-hidden relative">
					<h2 ref="section-2-header" class="relative text-2xl text-white font-bold">Homicity Platform</h2>
				</div>

				<!-- Slider -->
				<slider :num-slides="1" :autoplay="5000">
					<template v-slot:1><div><img src="../../public/assets/projects/homicity/homepage.jpeg"></div></template>
				</slider>

				<p class="md:absolute bottom-0 w-full text-xl text-white md:mt-4 p-2 pr-10 pointer-events-none" style="background: rgba(0,0,0,0.75)">Homicity started as a real estate search engine, and later pivoted to real estate platform that offered service to real estate brokerages.</p>

				<div class="triangle" ref="tri2" @click="sectionSelected()"></div>
				<transition name="fade">
					<p v-if="!selected" class="more-info">More info</p>
				</transition>
			</div>

			<!-- More info section -->
			<transition name="slide-fade">
				<div v-if="selected && section == 2" class="flex flex-row justify-start absolute w-full lg:w-4/5 h-screen">
					<div class="flex items-center justify-between absolute top-0 w-full">
						<h3 class="p-6 text-3xl text-white">Homicity Platform</h3>
						<div class="text-white text-xl cursor-pointer close-button" @click="closeSelection()">X</div>
					</div>

					<div class="h-screen w-full flex flex-col justify-center p-6">
						<p class="text-white text-lg">The Homicity was built using these technologies. My main responsibility was developing the front end for the platform and client specific customizations.</p>
						<div class="flex items-center justify-between w-full my-8">
							<a href="https://vuejs.org/" target="_blank" class="flex items-center justify-center flex-col w-1/3 cursor-pointer hover:opacity-50">
								<img src="../../public/assets/logos/vue-logo.png" class="w-1/2">
								<h4 class="text-white text-2xl mt-4	">Vue.js</h4>	
							</a>
							<a href="https://tailwindcss.com/" target="_blank" class="flex items-center justify-center flex-col w-1/3 cursor-pointer hover:opacity-50">
								<img src="../../public/assets/logos/tailwind-logo.png" class="w-1/2">
								<h4 class="text-white text-2xl mt-4	">Tailwind CSS</h4>	
							</a>
							<a href="https://laravel.com/" target="_blank" class="flex items-center justify-center flex-col w-1/3 cursor-pointer hover:opacity-50">
								<img src="../../public/assets/logos/laravel-logo.png" class="w-1/2">
								<h4 class="text-white text-2xl mt-4	">Laravel</h4>	
							</a>
						</div>	
						<div class="flex items-center justify-between self-center w-4/6 my-8">
							<a href="https://www.elastic.co/elasticsearch/" target="_blank" class="flex items-center justify-center flex-col w-2/5 cursor-pointer hover:opacity-50">
								<img src="../../public/assets/logos/elasticsearch-logo.png" class="w-1/2">
								<h4 class="text-white text-2xl mt-4	">Elasticsearch</h4>	
							</a>
							<a href="https://www.mapbox.com/" target="_blank" class="flex items-center justify-center flex-col w-2/5 cursor-pointer hover:opacity-50">
								<img src="../../public/assets/logos/mapbox-logo.png" class="w-1/2">
								<h4 class="text-white text-2xl mt-4	">Mapbox</h4>	
							</a>
						</div>
					</div>

				</div>
			</transition>
		</div>

		<!-- Section 2 (Sutton West Coast)
		=========================================================== -->
		<div ref="3" class="flex items-center justify-center w-full h-screen">
			<div class="relative w-full md:w-3/4 lg:w-1/2 mx-4" v-on:click="sectionSelected()">
				<div class="overflow-hidden relative">
					<h2 ref="section-3-header" class="relative text-2xl text-white font-bold">Sutton West Coast</h2>
				</div>

				<!-- Slider -->
				<div><img src="../../public/assets/projects/swc/homepage.jpeg"></div>

				<p class="md:absolute bottom-0 w-full text-xl text-white md:mt-4 p-2 pr-10 pointer-events-none" style="background: rgba(0,0,0,0.75)">Sutton West Coast's site was built on the Homicity platform as part contract with Sutton Real Estate. This was the first brokerage completed. I was responsible for the entire front end development.</p>

				<div class="triangle" ref="tri3" @click="sectionSelected()"></div>
				
				<transition name="fade">
					<p v-if="!selected" class="more-info">More info</p>
				</transition>
			</div>

			<!-- More info section -->
			<transition name="slide-fade">
				<div v-if="selected && section == 3" class="absolute w-full lg:w-4/5 h-screen">
					<div class="flex items-center justify-between absolute top-0 w-full">
						<div class="flex items-baseline">
							<h3 class="p-6 text-3xl text-white">Sutton West Coast</h3>
							<a href="https://suttonwestcoast.com/" target="_blank" class="text-primary hover:underline">Visit site</a>
						</div>
						<div class="text-white text-xl cursor-pointer close-button" @click="closeSelection()">
							<p>X</p>
						</div>
					</div>
					<slider class="h-screen flex items-center justify-center" :num-slides="4" :nav="true" :dots="true">

						<!-- Search results -->
						<template v-slot:1>
							<div class="flex flex-col-reverse md:flex-row items-center mb-8" :key="1">
								<div class="w-full md:w-1/4 px-6 mt-4 md:mt-0 text-white">
									<p class="text-lg">This is the property search results. The search results are based on the location entered by the user. The layout consists of property card on the left and the map on the right. The Mapbox library was used to display the map and cluster the property results. </p>
								</div>
								<div class="w-full md:w-3/4 px-6">
									<img src="../../public/assets/projects/swc/property-search.jpeg">
								</div>
							</div>
						</template>	

						<!-- Additional Filters -->
						<template v-slot:2>
							<div class="flex flex-col-reverse md:flex-row items-center mb-8" :key="2">
								<div class="w-full md:w-1/4 px-6 mt-4 md:mt-0 text-white">
									<p class="text-lg">These are the property search filters. Vuex store was used to manage the search criteria. When the user updates a search filter, a get request is sent to the Elasticsearch API to execute the search and retrieve the results.</p>
								</div>
								<div class="w-full md:w-3/4 px-6">
									<img src="../../public/assets/projects/swc/additional-filters.jpeg">
								</div>
							</div>
						</template>	

						<!-- Property details -->
						<template v-slot:3>
							<div class="flex flex-col-reverse md:flex-row items-center mb-8" :key="3">
								<div class="w-full md:w-1/4 px-6 mt-4 md:mt-0 text-white">
									<p class="text-lg">This is the property details view. The listing data is stored in a SQL database and accessed through a backend API.</p>
								</div>
								<div class="w-full md:w-3/4 px-6">
									<img src="../../public/assets/projects/swc/property-listing.jpeg">
								</div>
							</div>
						</template>	

						<!-- Costs calc -->
						<template v-slot:4>
							<div class="flex flex-col-reverse md:flex-row items-center mb-8" :key="4">
								<div class="w-full md:w-1/4 px-6 mt-4 md:mt-0 text-white">
									<p class="text-lg">This is the running costs calculator for the property listing. It has a mortgage calculator, the estimated insurance cost and the monthly maintenance fees. Using the data from the listing, the mortgage and insurance costs are calculated on the front end.</p>
								</div>
								<div class="w-full md:w-3/4 px-6">
									<img src="../../public/assets/projects/swc/mortgage-calc.jpeg">
								</div>
							</div>
						</template>	
					</slider>
				</div>
			</transition>
		</div>

		<!-- Section 3 (breathebnb)
		=========================================================== -->
		<div ref="4" class="flex items-center justify-center w-full h-screen">
			<div class="relative w-full md:w-3/4 lg:w-1/2 mx-4" v-on:click="sectionSelected()">
				<div class="overflow-hidden relative">
					<h2 id="section-4-header" class="relative text-2xl text-white font-bold">breathebnb</h2>
				</div>

				<!-- Slider -->
				<slider :num-slides="1" :autoplay="5000">
					<template v-slot:1><div><img src="../../public/assets/projects/breathebnb/homepage.jpeg"></div></template>
				</slider>

				<p class="md:absolute bottom-0 w-full text-xl text-white md:mt-4 p-2 pr-12 pointer-events-none" style="background: rgba(0,0,0,0.75)">breathebnb is Canadian company that manages AirBnB properties. Homicity was contracted to rebuild their website to provide an improved user experience.</p>

				<div class="triangle" ref="tri4" @click="sectionSelected()"></div>

				<transition name="fade">
					<p v-if="!selected" class="more-info">More info</p>
				</transition>
			</div>

			<!-- More info section -->
			<transition name="slide-fade">
				<div v-if="selected && section == 4" class="absolute w-full lg:w-4/5 h-screen">
					<div class="flex items-center justify-between absolute top-0 w-full">
						<div class="flex items-baseline">
							<h3 class="p-6 text-3xl text-white">breathebnb</h3>
							<a href="https://breatheproperties.com/" target="_blank" class="text-primary hover:underline">Visit site</a>
						</div>
						<div class="text-white text-xl cursor-pointer close-button" @click="closeSelection()">
							<p>X</p>
						</div>
					</div>

					<slider class="h-screen flex items-center justify-center" :num-slides="4" :nav="true" :dots="true">

						<!-- Search results -->
						<template v-slot:1>
							<div class="flex flex-col-reverse md:flex-row items-center mb-8">
								<div class="w-full md:w-1/4 px-6 mt-4 md:mt-0 text-white">
									<p class="text-lg">This is the property search results. The search results display every listing which can be filtered by specific cities. The layout consists of property card on the left and the map on the right. The Mapbox library was used to display the map and cluster the property results. </p>
								</div>
								<div class="w-full md:w-3/4 px-6">
									<img src="../../public/assets/projects/breathebnb/listing-results.jpeg">
								</div>
							</div>
						</template>	

						<!-- Additional Filters -->
						<template v-slot:2>
							<div class="flex flex-col-reverse md:flex-row items-center mb-8">
								<div class="w-full md:w-1/4 px-6 mt-4 md:mt-0 text-white">
									<p class="text-lg">These are the property search filters. When the user updates a search filter, a get request is sent to a backend API to execute the search and retrieve the results.</p>
								</div>
								<div class="w-full md:w-3/4 px-6">
									<img src="../../public/assets/projects/breathebnb/additional-filters.jpeg">
								</div>
							</div>
						</template>	

						<!-- Property details -->
						<template v-slot:3>
							<div class="flex flex-col-reverse md:flex-row items-center mb-8">
								<div class="w-full md:w-1/4 px-6 mt-4 md:mt-0 text-white">
									<p class="text-lg">This is the property details view. The listing data is stored in a SQL database and accessed through a backend API.</p>
								</div>
								<div class="w-full md:w-3/4 px-6">
									<img src="../../public/assets/projects/breathebnb/listing-details.jpeg">
								</div>
							</div>
						</template>	

						<!-- Costs calc -->
						<template v-slot:4>
							<div class="flex flex-col-reverse md:flex-row items-center mb-8">
								<div class="w-full md:w-1/4 px-6 mt-4 md:mt-0 text-white">
									<p class="text-lg">This is a rental application form that allows clients to register their property with breathebnb. Once submitted, the form will appear in the breathebnb admin panel as a new lead.</p>
								</div>
								<div class="w-full md:w-3/4 px-6">
									<img src="../../public/assets/projects/breathebnb/application-form.jpeg">
								</div>
							</div>
						</template>	
					</slider>
				</div>
			</transition>
		</div>

		<div v-show="section > 1" class="fixed w-full h-screen top-0 pointer-events-none">
			<scroll-bar class="hidden md:flex" :num-sections="3"></scroll-bar>
		</div>
	</div>
</template>

<script>
import Slider from "../components/Slider.vue";
import ScrollBar from "../components/ScrollBar.vue";
import smoothScroll from 'fillika-smooth-scroll';

export default {
	name: 'Home',
	
	components: {
		Slider,
		ScrollBar,
	},

	created () {
		this.addWheelEvent();
		this.$store.dispatch('setSection', 1);
		window.addEventListener('swiped-up', function(e) {
			this.prevSection();
		});
		window.addEventListener('swiped-down', function(e) {
			this.nextSection();
		});

	},

	watch: {
		section() {
			this.destroyWheelEvent();

			setTimeout(() => {
				this.addWheelEvent();
			}, 500)
		}
	},

	computed: {
		sectionTitle() {
			if(this.section > 1) {
				return this.sectionTitles[this.section - 2];
			}
			else {
				return null;
			}
		},

		section() {
			return this.$store.getters.section;
		},

		test() {
			return this.$refs;
		}
	},

	data() {
		return {
			selected: false,
			selectedUrl: null,
		}
	},

	methods: {
		addWheelEvent() {
			window.addEventListener('wheel', this.handleScroll);
		},

		destroyWheelEvent() {
			window.removeEventListener('wheel', this.handleScroll);
		},

		handleScroll(event) {
			if(!this.selected) {
				if(event.wheelDelta < 0) {
					this.nextSection();
				}		
				else {
					this.prevSection();
				}
			}
		},

		handleTouchMove(event) {
			console.log('touchend')
			console.log(event);
		},

		nextSection() {
			if(this.section < 4) {
				this.$store.dispatch('incrementSection');
				smoothScroll({
					target: this.$refs[this.section],
					animationName: "easeInQuad",
					duration: 750,
				});
				this.downAnimations();
			}
		},

		prevSection() {
			if(this.section > 1) {
				this.$store.dispatch('decrementSection');
				smoothScroll({
					target: this.$refs[this.section],
					animationName: "easeInQuad",
					duration: 750,
				});
				this.upAnimations();
			}
		},

		downAnimations() {
			// this.$refs[`section-${this.section}-header`].classList.remove('slide-in-top-header', 'slide-out-top-header', 'slide-in-bottom-header');
			// this.$refs[`section-${this.section + 1}-header`].classList.remove('slide-out-bottom-header', 'slide-out-top-header', 'slide-in-bottom-header');
			// this.$refs[`section-${this.section}-header`].classList.add('slide-out-bottom-header');
			// this.$refs[`section-${this.section + 1}-header`].classList.add('slide-in-top-header');
		},

		upAnimations() {
			// this.$refs[`section-${this.section + 1}-header`].classList.add('slide-out-top-header');
			// this.$refs[`section-${this.section}-header`].classList.add('slide-in-bottom-header');
		},

		sectionSelected() {
			let triangle = 'tri' + this.section;
			this.$refs[triangle].style.borderRightWidth = (this.$refs[this.section].offsetWidth +  500) + 'px';
			this.$refs[triangle].style.borderTopWidth = (this.$refs[this.section].offsetHeight + 500) + 'px';

			setTimeout(() => {
				this.selected = true;
			}, 500)
		},

		closeSelection() {
			this.selected = false;
			let triangle = 'tri' + this.section;
			setTimeout(() => {
				this.$refs[triangle].style.removeProperty('border-top-width');
				this.$refs[triangle].style.removeProperty('border-right-width');
			}, 300)
		},
	}
};
</script>

<style lang="scss">
	body {
		background-color: $secondary;
		font-family: 'Harmonia Sans', sans-serif !important;
	}

	.arrow-container:hover > .down-arrow{
		border-top: 10px solid $primary;
			
			&::after {
				background: $primary;
			}
	}

	.down-arrow {
		width: 0;
		height: 0;
		margin-top: 50px;
		border-left: 10px solid transparent;
		border-right: 10px solid transparent;
		border-top: 10px solid white;
		transition: all 0.3s ease;


		&::before {
			content: ' ';
			display: block;
			width: 0;
			height: 0;
			border-left: 10px solid transparent;
			border-right: 10px solid transparent;
			border-top: 10px solid $secondary;
			position: relative;
			top: -11px;
			right: 10px;
		}

		&::after {
			content: ' ';
			display: block;
			width: 1px;
			height: 50px;
			background: white;
			position: relative;
			top: -61px;
			right: 1px;
			transition: all 0.3s ease;
		}

		&:hover {
			border-top: 10px solid $primary;
			
			&::after {
				background: $primary;
			}
		}
	}

	.triangle {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 0;
		height: 0;
		border-top:75px solid transparent;
		border-right: 100px solid $secondary;
		border-bottom: 0 solid transparent;
		transition: 0.5s ease-in-out;

		&:hover {
			border-top:85px solid transparent;
			border-right: 110px solid $secondary;
			cursor: pointer;
		}
	}

	.more-info {
		position: absolute;
		bottom: 0;
		right: 0;
		margin-bottom: 20px;
		color: $primary;
		transform: rotate(-39.5deg);
		pointer-events: none;
	}

	.close-button {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 40px;
		width: 40px;
		margin-right: 10px;
		border: 2px solid white;
		border-radius: 50px;
		transition: 0.3s;

		&:hover {
			background-color: rgba(255,255,255, 0.3);
		}
	}
</style>
