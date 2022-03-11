<script>
    import {typeAnimation, ImageSlade} from "svfx"
    import {SR} from "../store"

    let sr;
    SR.subscribe(r => {
        sr = r;
    })

    let repos = false;
    let aSize;
    let bSize;

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
        "Kako vam mogu pomoći?",
        "Dobrodošli!",
        "Web Developer i Python programer.",
        "Treba vam developer?",
        "Trebaju vam instrukcije?",
        "Kako vam mogu pomoći?"
    ]

    if (!sr) {
        text = texten;
    }

    function reSize() {
        if (window.innerWidth >= (4*bSize)+aSize)
        {
            repos = false;
        } else {
            repos = true;
        }
    }

    reSize();
</script>

<svelte:window on:resize={reSize} />

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
                use:typeAnimation={{duration: 2500, delay: 2500}} 
                >
                {text[Math.floor(Math.random() * text.length)]}
            </h1>
            <div class="data" bind:clientWidth={aSize} >
                <p use:typeAnimation={{delay: 3000, duration: 1000}} >
                    Email: damiandeni.biz@gmail.com 
                </p>
                <p use:typeAnimation={{delay: 4000, duration: 1000}}>
                    {(sr) ? "Email za instrukcije: " : "Tutoring Email: "} david.casovi@gmail.com
                </p>
                <div class="lip">
                    <p use:typeAnimation={{delay: 5000, duration: 250}} >Github: </p>
                    <a 
                        use:typeAnimation={{delay: 5250, duration: 750}} 
                        href="https://github.com/damiano-cmd"
                        target="_blank"
                        > 
                        https://github.com/damiano-cmd
                    </a>
                </div> 
            </div>
            <div class="sign" class:sing_repos={repos} bind:clientWidth={bSize} >
                <img src="/img/signature.svg" alt="#">
            </div>
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

                .data {
                    position: absolute;
                    bottom: 10%;
                    right: 50%;
                    transform: translateX(50%) translateY(50%);

                    font-size: 1.1rem;
                    width: max-content;

                    text-align: center;

                    .lip {
                        display: flex;
                        justify-content: center;

                        p {
                            margin-right: 4px;
                        }

                        :global(a) {
                            font-size: 1.2rem;
                        }
                    }
                }
            
                .sign {
                    z-index: 4;

                    position: absolute;
                    bottom: -2rem;
                    right: 4rem;

                    width: 7rem;
                    height: auto;

                    transform: translateY(-50%);

                    img {
                        position: relative;

                        width: 100%;
                        height: auto;

                        opacity: 0;

                        animation: inBottom 1.5s ease 2.5s forwards;

                    }

                }

                .sing_repos {
                    bottom: 3rem;
                    right: 2.5rem;
                }
            }
        }

    }
</style>