<script>
  import { onMount } from "svelte";

  const scrollLines = [
    "To the north, schools are positioned near sustained investment and stability.",
    "To the south, communities stretch public resources to support learning.",
    "These differences aren’t just directional—they’re systemic.",
    "Educational access follows patterns drawn long before the school bell rings.",
  ];

  onMount(() => {
    const blocks = document.querySelectorAll(".observed-block");

    const observer = new IntersectionObserver(
      (entries) =>
      { threshold: 0.5 }
    );

    blocks.forEach((el) => observer.observe(el));
  });
</script>

<div class="background-layer"></div>

<div class="scene-wrapper">
  <div class="scroll-left">
    <div class="sticky-intro">
      <h1>The Silent Divide</h1>
      <p>
        Atlanta doesn’t wear its divides loudly. They run quiet—along zoning
        maps, through broadband cables, across school district boundaries. One
        of the most telling is Interstate 20. Not just a highway, but a hinge
        between two educational realities. This project traces those patterns,
        exploring how geography shapes classrooms and how lines drawn through a
        city can define access, outcomes, and possibility.
      </p>
    </div>

    {#each scrollLines as line}
      <div class="observed-block">
        <p>{line}</p>
      </div>
    {/each}
  </div>
</div>

<style>

  *, *::before, *::after {
    box-sizing: border-box;
  }

  .background-layer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-image: url("ATL_Map.jpeg");
    background-repeat: no-repeat;
    background-position: center 30%;
    background-size: cover;
    z-index: -1;
      overflow-y: hidden;
  }

  .scene-wrapper {
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    padding: 4rem 1rem;
  }

  .scroll-left {
    display: flex;
    flex-direction: column;
    min-height: 200vh;
  }

  .sticky-intro {
    position: sticky;
    top: 10vh;
    background-color: var(--pencil-yellow);
    padding: 2rem;
    border-radius: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.651);
    margin-bottom: 6rem;
  }

  .observed-block {
    margin: 60vh 0;
    padding: 2rem;
    background: var(--pencil-yellow);
    border-left: 30px solid var(--pencil-eraser);
    border-radius: 4px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.651);
    font-weight: 500;
    color: #444;
  }

  h1 {
    font-size: 2.4rem;
    margin-bottom: 1.5rem;
    color: #1b1b1b;
  }
  p{
    color: var(--pencil-graphite);
    font-weight: semi-bold;
    font-style: oblique;
  }
</style>