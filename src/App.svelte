<script>
  import TitleSection from "./sections/TitleSection.svelte";
  import IntroScene from "./sections/IntroScene.svelte";
  import PerPovertySection from "./sections/PerPovertySection.svelte";
  import Transition from "./sections/Transition.svelte";
  import LiteracySection from "./sections/DegreeAttainSection.svelte";
  import FinishLineScene from "./sections/FinishLineScene.svelte";
  import { tick } from 'svelte';

  let showLiteracy = false;
  let showFinishLine = false;

  // called when arrow/button clicked
  async function handleToLiteracy() {
    showLiteracy = true;
    await tick(); // Wait for Literacy section to be added to DOM
    document.getElementById('literacyCard')?.scrollIntoView({ behavior: 'smooth' });
  }

  function handleIntersection(entry) {
    if (entry.isIntersecting) {
      showFinishLine = true;
    }
  }

  function observe(node) {
    const observer = new IntersectionObserver(([entry]) => {
      handleIntersection(entry);
    }, { threshold: 0.6 });

    observer.observe(node);
    return {
      destroy() {
        observer.disconnect();
      }
    };
  }
</script>

<main style="overflow-anchor: none;">
  <TitleSection />
  <IntroScene />
  <PerPovertySection />
  <Transition onNext={handleToLiteracy} />

  {#if showLiteracy}
    <section id="literacyCard">
      <LiteracySection />
      <!-- Place observer inside this section -->
      <div use:observe style="height: 1px;"></div>
    </section>
  {/if}

  {#if showFinishLine}
    <FinishLineScene id="finishLineCard" />
  {/if}
</main>

