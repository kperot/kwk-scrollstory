<script>
  let index = 0;
  const slides = [
    {
      title: "Early Learning as a Launchpad",
      text: "Three year old preschool in all Atlanta Public Schools."
    },
    {
      title: "Childcare That Sustains Families",
      text: "Affordable, accessible childcare lets parents work and children thrive. It’s economic policy, racial equity, and brain development rolled into one."
    },
    {
      title: "Pathways for Associates and Trade Schools",
      text: "With the constantly evolving economy and technology, the need for skilled tradespeople is more necessary now then ever before."
    },
    {
      title: "Strong College & Career Pathways",
      text: "Advising, dual enrollment, and career apprenticeships turn graduation into actual readiness. The end of high school should mark real opportunity."
    }
  ];

  const next = () => index = (index + 1) % slides.length;
  const prev = () => index = (index - 1 + slides.length) % slides.length;
</script>

<section class="finishline-card" {...$$restProps}>
  <div class="slideshow-container">
    <div class="slide">
      <h2 class="slide-title">{slides[index].title}</h2>
      <p class="slide-text">{slides[index].text}</p>
    </div>

    <div class="nav-buttons">
      <button on:click={prev}>⟵</button>
      <button on:click={next}>⟶</button>
    </div>
  </div>

  <div class="finish-visual">
    <h1 class="finish-banner"> Invest where the race begins.</h1>
  </div>
</section>

<style>
  .finishline-card {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 4rem 2rem;
    background: linear-gradient(135deg, #f5f2ea, #ffffff);
    font-family: 'Georgia', serif;
    gap: 2rem;
    align-items: center;
    color: #222;
  }

  .slideshow-container {
    background-color: rgba(248, 248, 248, 0.96);
    box-shadow: 0px 10px 40px #00000017;
    border-radius: 16px;
    padding: 3rem;
    max-width: 650px;
    margin: auto;
    transition: box-shadow 0.3s ease;
  }

  .slide-title {
    font-size: clamp(2rem, 5vw, 3.5rem);
    color: #2a2a2a;
    margin-bottom: 1.25rem;
    font-weight: 700;
  }

  .slide-text {
    font-size: 1.35rem;
    color: #555;
    font-style: italic;
    line-height: 1.75;
    margin-bottom: 2rem;
  }

  .nav-buttons {
    display: flex;
    justify-content: space-between;
  }

  .nav-buttons button {
    font-size: 2rem;
    background: none;
    border: none;
    color: #888;
    cursor: pointer;
    padding: 0.5rem 1rem;
    transition: color 0.3s ease;
  }

  .nav-buttons button:hover {
    color: #000;
  }

  .finish-visual {
    text-align: center;
    padding: 2rem;
  }

  .finish-banner {
    font-size: clamp(2.5rem, 6vw, 4rem);
    color: #1e73be;
    font-weight: bold;
    margin-top: 2rem;
    line-height: 1.3;
  }

  @media (max-width: 850px) {
    .finishline-card {
      grid-template-columns: 1fr;
      text-align: center;
      padding: 2rem 1rem;
    }

    .slideshow-container {
      padding: 2rem;
    }

    .nav-buttons {
      justify-content: center;
      gap: 2rem;
    }
  }
</style>