<script>
  import Project from "./Project.svelte"
  import {scrollFunctions, Animation} from "svfx"
  import {projects} from "../store"

  import {SR} from "../store"
  let sr;
  SR.subscribe(r => {
      sr = r;
  })

  let proj;
  projects.subscribe(r => {
    proj = r;
  })
</script>

<div>
  <h1 use:scrollFunctions={{fromBottom: 200, fromTop: 64}} on:enterscreen={Animation({name: "inBottom", once: true})} >
    {(sr) ? "Projekti" : "Projects"}
  </h1>
  <section class="flex">
    {#each proj as i}
      <Project img={i.img} title={i.title} text={i.text} link={i.link} />
    {/each}
  </section>
</div>

<style lang="scss" >
  div {
    h1 {
      text-align: center;
      padding: 2rem 0 4rem 0;
      padding-top: 6rem;

      opacity: 0;
    }

    .flex {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    padding-bottom: 4rem;
  }
</style>