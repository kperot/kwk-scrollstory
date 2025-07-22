<script>
  let { title, subtitle } = $props();
</script>

<div class="title-card">
  <div class="content">
    <h1> <span class="typewriter">{title}</span></h1>
    <p>{subtitle}</p>
  </div>
</div>

<style>
  @keyframes typewriter {
  from { width: 0 }
  to { width: 100% }
  }

  @keyframes blinkCaret {
    0%, 100% { border-color: transparent }
    50% { border-color: #ff7272 }
  }
  @keyframes fadeCaret {
    from { border-right-color: #ff7272; }
    to { border-right-color: transparent; }
  }


  .typewriter {
    display: inline-block;
    overflow: hidden;
    border-right: 3px solid #ff7272;
    white-space: nowrap;
    width: 0;

    animation:
      typewriter 2.8s steps(28, end) 0.2s forwards,
      blinkCaret 0.75s step-end 4,
      fadeCaret 0.4s ease-out 3s forwards;
  }
  :global(html),
  :global(body) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .title-card {
    height: 100vh;
    width: 100%;
    position: static;
    background-image: url("ATL_Skyline.jpeg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .title-card::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at bottom center, transparent 50%, rgba(0,0,0,0.6) 100%);
    z-index: 0;
  }
  .content {
    position: relative;
    z-index: 1;
  }

  .content {
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    max-width: 700px;
    background-color: #fae7cb;
    padding: 4rem;
    border: 6px solid #ffb385;
    border-radius: 2rem;
    box-shadow: 16px 16px #ff7272a4;
  }
  

  h1 {
    font-size: 3rem;
    margin: 0;
    color: #ff7272;
    text-shadow: 2px 2px 0 #ffb385;
  }

  .content h1::after {
  content: "";
  display: block;
  height: 4px;
  width: 100px;
  margin: 1rem auto 0;
  background-color: var(--pencil-yellow);
  border-radius: 2px;
  }


  p {
    font-size: 1.3rem;
    color: var(--pencil-graphite);
    margin-top: 1rem;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 2.2rem;
    }

    p {
      font-size: 1.1rem;
    }
  }
</style>
