<script>
    import {scrollFunctions, Animation, typeCorectionAnimation, typeAnimation} from "svfx"
    let anim = Animation({name: "inBottom", once: true});

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

<div class="background">
    <div 
        class="personal" 
        use:scrollFunctions={{fromBottom: 400, fromTop: 64}} 
        on:enterscreen={anim}
        >
        <img src="/img/personal.png" alt="#">
    </div>
    <div class="text" >
        <h1 use:scrollFunctions={{fromBottom: 200, fromTop: 64}} on:enterscreen={Animation({name: "inBottom", once: true})} >
            {(sr) ? "O meni" : "About Me"}
        </h1>
        <div class="flex"
            use:scrollFunctions={{fromBottom: 200, fromTop: 64}} 
            on:enterscreen={(e) => {
                anim(e);
            }} 
        >
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
        <p
            use:scrollFunctions={{fromBottom: 200, fromTop: 64}} 
            on:enterscreen={(e) => {
                anim(e);
            }} 
        >
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
    }
    .personal {
        position: relative;
        background-color: white;

        width: 30rem;
        height: 30rem;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 50%;
        margin: 4rem 2rem;
        overflow: hidden;

        border: .5rem solid #00a3e4;
        border-left-color: #bbb;
        border-bottom-color: #bbb;

        opacity: 0;

        img {
            position: relative;

            max-width: 30rem;
            max-height: 30rem;
        }
    }
    .text {
        color: #fff;

        display: flex;
        flex-direction: column;

        padding: 4rem;

        .flex {
            width: 51rem;
            max-width: 90%;
            display: flex;
            flex-wrap: wrap;

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