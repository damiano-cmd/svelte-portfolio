<script>
    import {skills} from "../store"
    import Skill from "./Skill.svelte"
    import {scrollFunctions, Animation} from "svfx"

    import {SR} from "../store"
    let sr;
    SR.subscribe(r => {
        sr = r;
    })

    let skl;
    skills.subscribe(r => {
        skl = r;
    })
</script>

<div class="list">
    <h1 use:scrollFunctions={{fromBottom: 200, fromTop: 64}} on:enterscreen={Animation({name: "inBottom", once: true})} >
        {(sr) ? "Moje Vještine" : "My Skills"}
    </h1> 
    {#each Object.keys(skl) as e}
        <h2 use:scrollFunctions={{fromBottom: 200, fromTop: 64}} on:enterscreen={Animation({name: "inBottom", once: true})} >{e}</h2> 
        <section>
            {#each skl[e] as i}
                <Skill img={"/img/" + i.img} title={i.title} text={i.text} subtext={i.subtext} />
            {/each}
        </section>
    {/each}
</div>

<style lang="scss" >
    .list {
        background-color: #eee;
        padding: 16px;

        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
            opacity: 0;
            padding: 4rem 0 0 0;
        }

        h2 {
            font-size: 1.8rem;
            padding: 4.5rem 0 0 0;

            opacity: 0;
        }
        
        section {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
    }
</style>