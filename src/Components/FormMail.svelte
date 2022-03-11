<script>
  import { scrollFunctions, Animation } from "svfx"
  import {SR} from "../store"
  let sr;
  SR.subscribe(r => {
    sr = r;
  })
</script>

<div>
  <span>
    <h1>{(sr) ? "Kontaktiraj me" : "Contact Me"}</h1>
    <form action="https://formsubmit.co/damiandeni.biz@gmail.com" method="POST">
      <input type="hidden" name="_subject" value="New contact!">
      <input type="hidden" name="_captcha" value="false">
      <input type="hidden" name="_autoresponse" value="Thanks you for contacting me. We will be in touch soon!">
      <input type="hidden" name="_next" value="/">
      <input type="hidden" name="_template" value="table">
      <input 
        type="email" 
        name="email" 
        placeholder="Email" 
        required
        use:scrollFunctions={{fromBottom: 200, fromTop: 64}}
        on:enterscreen={Animation({name: "inSideLeft", once: true})}
      >
      <input 
        type="text" 
        name="name" 
        placeholder={(sr) ? "Ime" : "Name"} 
        required
        use:scrollFunctions={{fromBottom: 200, fromTop: 64}}
        on:enterscreen={Animation({name: "inSideRight", once: true})}
      >
      <input 
        type="text" 
        name="subject" 
        placeholder={(sr) ? "Tema" : "Subject"} 
        required
        use:scrollFunctions={{fromBottom: 200, fromTop: 64}}
        on:enterscreen={Animation({name: "inSideLeft", once: true})}
      >
      <textarea 
        name="Message" 
        id="Message" 
        placeholder={(sr) ? "Poruka" : "Message"} 
        cols="30" 
        rows="10"
        use:scrollFunctions={{fromBottom: 200, fromTop: 64}}
        on:enterscreen={Animation({name: "inSideRight", once: true})}
      ></textarea>
      <button type="submit">{(sr) ? "Pošalji" : "Send"} </button>
    </form> 
  </span>
  <p>Copyright © 2022</p>
</div>

<style lang="scss">
  div {
    min-height: 101vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    > p {
      color: gray;
    }

    span {

      width: 25rem;
      max-width: 100%;

      h1 {
        color: white;
        padding: 2rem 0;

        text-align: center;
      }

      form {
        display: flex;
        flex-direction: column;

        width: 100%;
        max-width: 25rem;

        padding: 0 0 4rem 0;

        textarea {
          resize: none;
        }

        textarea, input {
          opacity: 0;
        }

        button {
          position: relative;
          border: none;
          background-color: #00a3e4;
          font-weight: 600;
        }
      }
    }
  }
</style>