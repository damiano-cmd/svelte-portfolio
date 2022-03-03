<script>
    import {services} from "../store"
    import Article from "./Service.svelte"
    import {scrollFunctions, Animation} from "svfx"

    import {SR} from "../store"
    let sr;
    SR.subscribe(r => {
        sr = r;
    })

    let service;
    services.subscribe(r => {
        service = r;
    })
</script>

<div class="bord">
    <h1 use:scrollFunctions={{fromBottom: 200, fromTop: 64}} on:enterscreen={Animation({name: "inBottom", once: true})} >
        {(sr) ? "Usluge" : "Services"}
    </h1>
    {#each service as i}
        <Article img={i.img} title={i.title} text={i.text} />
    {/each}
</div>

<style lang="scss" >
    .bord {
        background-color: #0a0a0a;
        color: #fff;

        padding: 32px 0;
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
            opacity: 0;
            padding: 4rem 0 ;
        }
    }
</style>