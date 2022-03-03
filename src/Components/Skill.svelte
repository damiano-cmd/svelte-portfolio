<script>
  import {scale} from "svelte/transition"
  import {scrollFunctions, Animation} from "svfx"

  export let img;
  export let title;
  export let text;
  export let subtext;

  let hovering;
  let is_big = false;

  let wwidth = 0;
  let cwidth = 0;
  $: wwidth && cwidth && main()
  function main () {
    if (parseInt(wwidth/cwidth) < 2) {
      is_big = true;
    } else {
      is_big = false;
    }
  }
</script>

<svelte:window bind:innerWidth={wwidth} />

<article 
  use:scrollFunctions={{fromBottom: 200, fromTop: 64}}
  on:enterscreen={Animation({name: "inBottom", once: true})}
  bind:clientWidth={cwidth}
  on:mouseleave={() => hovering = false} 
  on:mouseenter={() => hovering = true}
  class:top={hovering == true}
>
  <div class="article" class:hide="{is_big}">
    <div class="container" >
      <img src={img} alt="#">
    </div>
    <div class="dec">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  </div>
  {#if hovering || is_big}
    <div class:popup="{is_big == false}" class="article" transition:scale >
      <div class="container">
        <img src={img} alt="#">
      </div>
      <div class="dec">
        <h2>{title}</h2>
        <p>{text}</p>
        <br>
        <p>{subtext}</p>
      </div>
    </div>
  {/if}
</article>

<style lang="scss" >
  
  .top {
    z-index: 3;
  }

  article {
    opacity: 0;
    
    .article {
      display: flex;
      padding: 2rem 1rem;
      position: relative;

      border-radius: 5px;


      .container {
        width: 9rem;
        height: 9rem;

        display: flex;
        justify-content: center;
        align-items: center;

        img {
          max-width: 9rem;
          max-height: 9rem;
        }
      }

      .dec {
        padding: 0 1rem;

        h2, p {
          width: 14rem;
          max-width: 100%;
        }
        h2 {
          padding: 1rem 0;
          font-size: 1.5rem;
        }
      }
    }

    .hide {
      display: none;
    }

    .popup {
      display: flex;

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);

      width: calc(100% + 4rem);
      padding: 2rem 1rem;

      background-color: #fff;
      box-shadow: 
        -.5rem -.5rem 1rem #333,
        -.5rem .5rem 1rem #333,
        .5rem -.5rem 1rem #333,
        .5rem .5rem 1rem #333,
      ;

      .container {
        width: 11rem;
        height: 11rem;

        img {
          max-width: 11rem;
          max-height: 11rem;
        }
      }
    }
  } 
</style>