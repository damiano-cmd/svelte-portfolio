<script>
	import {scrollFunctions, Animation} from "svfx"
</script>

<div class="tri"
>
  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
  </svg>
</div>

<style lang="scss" >
  .tri {
		width: 100%;
		overflow: hidden;
		line-height: 0;
		height: 6rem;

		svg {
			position: relative;
			display: block;
			width: calc(100% + 1.3px);
			height: 100%;
		}

		.shape-fill {
			fill: #eee;
		}
	}
</style>