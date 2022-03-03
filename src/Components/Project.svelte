<script>
  import {scrollFunctions, Animation} from "svfx"
  export let img;
  export let title;
  export let text;
  export let link;
</script>

<article use:scrollFunctions={{fromBottom: 200, fromTop: 64}} on:enterscreen={Animation({name: "inScale", once: true})} >
  <img src={img} alt="#">
  <h2>{title}</h2>
  <p>{text}</p>
  <a href={link}>[Link to project]</a>
</article>

<style lang="scss" >
  article {
    width: 18rem;
    margin: 1rem 4rem;
    padding: 1rem;
    
    opacity: 0;

    background-color: #111;
    color: white;

    border-radius: .5rem;
    text-align: center;

    box-shadow: 
      .2rem .2rem 1rem #aaa,
      -.2rem -.2rem 1rem #aaa;

    img {
      width: 90%;
      padding: 0 5%;
      height: auto;
    }

    h2 {
      font-size: 2rem;
      padding: 1rem;
    }

    a {
      margin: 1rem 0;
    }
  }
</style>