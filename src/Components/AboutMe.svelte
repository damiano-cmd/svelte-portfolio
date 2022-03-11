<script>
    import {scrollFunctions, Animation, typeCorectionAnimation, Sequence} from "svfx"

    let sequ = Sequence({
        sequencer: "normal",
        animations: [
            {name: "inBottom", duration: 1500, once: true},
            {name: "inBottom", duration: 1500, once: true},
            {name: "inBottom", duration: 1500, once: true},
            {name: "inBottom", duration: 1500, once: true}
        ]
    });
    let [triger, [anim, anim1, anim2, anim3]] = sequ;

    import {SR, aboutme} from "../store"

    let sr;
    SR.subscribe(r => {
        sr = r;
    })

    let text;
    aboutme.subscribe( r => {
        text = r;
    })
</script>

<div 
    class="background"
    use:scrollFunctions={{fromTop: 64, fromBottom: "50"}}
    on:enterscreen={() => triger()}
    >
    <div class="personal" use:anim1 >
        <img src="/img/personal.png" alt="#">
    </div>
    <div class="text" >
        <h1 use:anim2 >
            {(sr) ? "O meni" : "About Me"}
        </h1>
        <div class="flex" use:anim3 >
            <p>
                {text[0]}
            </p>
            <p
                class="color"
                use:typeCorectionAnimation={{
                    corections: (sr) ? ["JS Developer ", "Python programer ", "Freelencer ", "Full Stek Developer "] : ["JS Developer ", "Python programmer ", "Freelancer ", "Full Stack Developer "],
                    duration: 2000,
                    delay: 1000,
                    playtype: "pingpong"
                }}
            >
                %|
            </p>
        </div>
        <p use:anim>
            {#each text[1] as i}
                {#if typeof i == "number"}
                    <br><br>
                {:else}
                    {i}
                {/if}
            {/each}
        </p>
    </div>
</div>

<style lang="scss" >
    .background {
        width: 100%;
        background-color: #0a0a0a;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    .personal {
        position: relative;
        background-color: white;

        max-width: 30rem;
        max-height: 30rem;

        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 50%;
        margin: 2rem;
        overflow: hidden;

        border: .5rem solid #00a3e4;
        border-left-color: #bbb;
        border-bottom-color: #bbb;

        opacity: 0;

        @media (max-width: 30rem) {
            border-radius: 12px;
        }

        img {
            position: relative;

            max-width: 30rem;
            max-height: 30rem;
        }
    }
    .text {
        max-width: 100%;
        color: #fff;

        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 2rem 4rem;

        .flex {
            width: 51rem;
            max-width: 90%;
            display: flex;
            flex-wrap: wrap;

            align-items: center;

            opacity: 0;

            .color {
                color: #00a3e4;
                margin: 0 8px;
            }

            p {
                width: auto;
                opacity: 1;
            }
        }

        h1 {
            padding: 0 0 1.5rem 0;
            opacity: 0;
        }
        p {
            padding: .5rem 0;
            opacity: 0;

            width: 55rem;
            max-width: 90%;
        }

        @media (max-width: 40rem) {
            text-align: center;
            .flex {
                flex-direction: column;
            }
        }
    }
</style>