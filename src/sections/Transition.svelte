<script>
  export let onNext = () => {};
</script>

<section class="transition">
  <div class="quote-container">
    <h2 class="transition-quote">
      Before you can read a future, <br />
      you must be allowed to write your present.
    </h2>
  </div>

  <button 
    class="down-arrow" 
    on:click={onNext} 
    aria-label="Scroll to next section">
    ↓
  </button>
</section>

<style>
  .transition {
    min-height: 100vh;
    padding: 4rem 2rem;
    background: radial-gradient(circle at center, #003780, #011b3c);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
    position: relative;
    overflow-y: hidden;
  }

  .quote-container {
    max-width: 750px;
    padding: 2rem;
  }

  .transition-quote {
    font-size: clamp(2rem, 4vw, 3.2rem);
    font-family: 'Georgia', serif;
    font-style: italic;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 0.8px;
    text-shadow: 2px 2px 6px rgba(0,0,0,0.3);
    animation: fadeInText 1.6s ease-out forwards;
    opacity: 0;
  }

  @keyframes fadeInText {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .down-arrow {
    font-size: 3rem;
    border: none;
    background: transparent;
    color: #fff;
    cursor: pointer;
    padding: 0.5rem;
    margin-top: 3rem;
    user-select: none;
    transition: transform 0.3s ease, color 0.3s ease;
  }

  .down-arrow:hover {
    color: #ffd700;
    transform: translateY(5px);
  }
</style>