<script>
    import {fade} from "svelte/transition"
    import {createEventDispatcher} from "svelte"

    export let links = [];

    const displatch = createEventDispatcher()
    let y;

    let ison = false;

    function navigate(link) {
        displatch("navigate", {
            link
        })
    }

</script>

<svelte:window bind:scrollY={y} />

{#if y != 0}
<div class="navDrop" transition:fade={{duration: 100}} ></div>
{/if}

<nav >
    <button class="burgar" on:click={() => {ison = !ison}} >
        <span></span>
        <span class="m"></span>
        <span></span>
    </button>
    <ul class="links" class:move={ison} >
        {#each links as i}
            <li> 
                <button on:click={() => {navigate(i); ison = false}} >{i}</button> 
            </li>
        {/each}
    </ul>
</nav>

<style lang="scss" >
    nav {
        z-index: 9;

        position: fixed;
        top: 0;
        width: 100%;
        height: 64px;

        background: none;

        display: flex;
        align-items: center;
        justify-content: space-around;

        .links {
            list-style: none;
            height: 100%;

            display: flex;
            z-index: 10;

            li {
                height: inherit;

                button {
                    cursor: pointer;

                    border: none;
                    background: none;

                    height: inherit;
                    padding: 0 1.5rem;

                    text-decoration: none;
                    color: #fff;
                    font-size: 18px;

                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }

        .burgar {
            cursor: pointer;
            display: none;
            border: none;

            margin: 0 1rem;

            background-color: #00a3e4;

            span {
                display: block;

                min-width: 2rem;
                height: .25rem;
                margin: .3rem 0;

                background-color: white;
            }

            z-index: 11;
        }

        @media (max-width: 50rem) {
            justify-content: flex-end;

            .links {
                position: absolute;
                top: 0;
                right: -100%;

                width: 100%;
                height: 100vh;

                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;

                background-color: #0a0a0a;

                li {
                    height: min-content;

                    padding: 5%;
                }

                transition: right 1s;
            }

            .burgar {
                display: block;
            }

            .move {
                right: 0;
            }
        }
    }
</style>