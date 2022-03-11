<script>
	import {
		SR,
		skills, skillsen,
		services, servicesen,
		projects, projectsen,
		aboutme, aboutmeen
	} from "./store"

	let sr_codes = [
		"BA",
		"BIH",
		"HR",
		"HRV",
		"ME",
		"MNE",
		"RS",
		"SRB"
	];

	//import Components
		import Navigation from "./Components/Navigation.svelte"
		import TopOfPage from "./Components/TopOfPage.svelte"
		import About from "./Components/AboutMe.svelte"
		import Skills from "./Components/Skills.svelte"
		import Service from "./Components/Services.svelte"
		import Projects from "./Components/Projects.svelte"
		import FormMail from "./Components/FormMail.svelte"
		// svgs
			import TiltBottom from "./Components/Svgs/TiltBottom.svelte"
			import WaveTop from "./Components/Svgs/WaveTop.svelte"
			import WaveBottom from "./Components/Svgs/WaveBottom.svelte"
			import TriTop from "./Components/Svgs/TriTop.svelte"
			import Tilt from "./Components/Svgs/TiltTop.svelte"

	let main;
	let y;
	let height;

	let linksen = [
		"Home",
		"About Me",
		"Professions",
		"Services",
		"Projects",
		"Contact Me"
	];
	let links = [
		"Glavno",
		"O meni",
		"Moje Vještine",
		"Usluge",
		"Projekti",
		"Kontaktiraj me"
	];

	fetch("https://ipapi.co/json")
		.then(res => res.text())
			.then(data => {
				let dat = JSON.parse(data);
				if (!sr_codes.includes(dat['country']))
				{
					skills.set(skillsen);
					services.set(servicesen);
					projects.set(projectsen);
					aboutme.set(aboutmeen);
					links = linksen;
					SR.set(false);
				}
			})
		.catch(err => {
			if (err) throw err
			skills.set(skillsen);
			services.set(servicesen);
			projects.set(projectsen);
			aboutme.set(aboutmeen);
			links = linksen;
			SR.set(false);
		})
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={height} />

<Navigation links={links} on:navigate={(e) => {
	let off = main.children[links.indexOf(e.detail.link)].offsetTop;
	y = off+((off > 0) ? 1 : 0);
}} />
<main bind:this={main} >
	<div>
		<TopOfPage />
		<div class="sh">
			<Tilt />
		</div>
	</div>
	<div class="white">
		<About />
		<TiltBottom />
	</div>
	<div class="white" >
		<Skills />
		<WaveTop />
	</div>
	<div class="white" >
		<Service />
		<WaveBottom />
	</div>
	<div>
		<div class="white">
			<Projects />
		</div>
		<div class="sh">
			<TriTop/>
		</div>
	</div>
	<div class="sh">
		<FormMail />
	</div>
</main>

<style lang="scss" >
	main {
		z-index: -1;
		> div {
			width: 100%;
			overflow: hidden;
		}

		.sh {
			background-color: rgba(0,0,0,.6);
		}

		.white {
			background-color: #eee;
		}
	}
</style>