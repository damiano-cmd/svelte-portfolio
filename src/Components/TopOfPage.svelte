<script>
    import {typeAnimation, ImageSlade} from "svfx"
    import {SR} from "../store"

    let sr;
    SR.subscribe(r => {
        sr = r;
    })

    let texten = [
        "Welcome, what do you need?",
        "Hello there!",
        "A Web Developer and Python programmer.",
        "Need a developer? Here I am!",
        "Need tutoring, look no further.",
        "Need a developer, look no further.",
        "Anything I can help you with?"
    ]

    let text = [
        "Zdravo, šta vam treba?",
        "Zdravo!",
        "Web Developer i Python programer.",
        "Treba vam developer? Evo me!",
        "Trebaju instrukcije, tu sam!",
        "S čim vam mogu pomoći?"
    ]

    if (!sr) {
        text = texten;
    }
</script>

<div class="top" >
    <div class="container">
        <div 
            class="imgc" 
            use:ImageSlade={{
                images: [
                    "/img/backDrop.png", 
                    "/img/backDrop2.png"
                ], 
                timing: 5000, 
                fadeTiming: 1000
            }} 
        ></div>
    </div>
    <span class="overlay">
        <div class="text">
            <h1
                use:typeAnimation={{duration: 2500, delay: 500}} 
            >
                {text[Math.floor(Math.random() * text.length)]}
            </h1>
            <p use:typeAnimation={{delay: 1500, duration: 1500}} >
                Email: damiandeni.biz@gmail.com
            </p>
        </div>
    </span>
</div>

<style lang="scss" >
    .top {
        position: relative;
        width: 100%;
        min-height: 500px;
        height: 100vh;

        color: white;

        overflow: hidden;

        .container {

            width: 100%;
            height: 100%;

            position: fixed;
            top: 50%;
            left: 40%;
            transform: translateX(-40%) translateY(-50%);

            overflow: hidden;

            z-index: -1;

            .imgc {
                min-width: 100%;
                width: min-content;
                min-height: 100vh;

                :global(img) {
                    min-width: 100%;
                    width: min-content;
                    min-height: 100vh;
                }
            }
        }

        .overlay {
            position: absolute;
            top: 0;
            right: 0;

            width: 100%;
            height: 100%;

            background: linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0,0,0,.8) 100%);

            .text {
                width: 100%;
                height: 100%;

                position: relative;

                h1 {
                    position: absolute;
                    top: calc(50% - 1rem);
                    left: 50%;
                    transform: translateX(-50%) translateY(-50%);

                    max-width: 90%;
                    width: max-content;

                    font-size: 2rem;
                    text-align: center;
                }

                p {
                    position: absolute;
                    bottom: 10%;
                    right: 50%;
                    transform: translateX(50%) translateY(50%);

                    font-size: 1.1rem;
                    width: max-content;
                }
            }
        }
    }
</style>