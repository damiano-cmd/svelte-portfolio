<script>
    import {scrollFunctions, Animation} from "svfx"

    export let img;
    export let title;
    export let text;
</script>


<article>
    <div class="container" use:scrollFunctions={{fromBottom: 200, fromTop: 64}} on:enterscreen={Animation({name: "inSideLeft", once: true})} >
        <img src={"/img/" + img} alt="#">
    </div>
    <div class="dec" use:scrollFunctions={{fromBottom: 200, fromTop: 64}} on:enterscreen={Animation({name: "inSideRight", once: true})} >
        <h2>{title}</h2>
        <p>{text}</p>
    </div>
</article>

<style lang="scss" >
    article {
        display: grid;
        grid-template-columns: 1fr 1fr;
        
        width: 100%;

        padding: 2rem 0;
        overflow-x: hidden;

        @media (max-width: 71.25rem) {
            grid-template-columns: 1fr;

            .dec {
                text-align: center;
                
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }

        .container {
            width: 18.5rem;
            height: 18.5rem;

            opacity: 0;

            justify-self: center;

            padding: 0 4rem;

            display: flex;
            justify-content: center;
            align-items: center;

            img {
                max-width: 18.5rem;
                max-height: 18.5rem;
            }
        }

        .dec {
            padding: 1.5rem 0;
            height: min-content;
            min-width: 420px;

            opacity: 0;

            h2 {
                padding: 2rem 0;
                font-size: 2rem;
            }

            p, h2 {
                max-width: 90%;
            }
        }
    }
</style>