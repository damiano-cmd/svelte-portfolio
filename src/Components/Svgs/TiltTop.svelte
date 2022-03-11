<script>
</script>

<div class="tilt"
>
  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
  </svg>
</div>

<style lang="scss" >
  .tilt {
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
    height: 6rem;

    svg {
      position: relative;
      display: block;
      width: calc(100% + 1.3px);
      height: 100%;
      transform: rotateY(180deg);
    }

    .shape-fill {
      fill: #0A0A0A;
    }
  }
</style>