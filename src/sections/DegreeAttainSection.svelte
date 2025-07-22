<script>
  import { onMount, onDestroy } from 'svelte';
  import Chart from 'chart.js/auto';

  let chart;

  onMount(() => {
    const el = document.getElementById('degreeChart');
    if (el instanceof  HTMLCanvasElement) {
      const ctx = el.getContext('2d');  
      chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['White', 'Black', 'Asian', 'Hispanic'],
          datasets: [
            {
              label: 'South Atlanta',
              data: [55.82, 30.04, 63.79, 35.66],
              backgroundColor: 'rgba(255, 99, 132, 0.6)'
            },
            {
              label: 'North Atlanta',
              data: [83.51, 56.75, 85.54, 62.24],
              backgroundColor: 'rgba(54, 162, 235, 0.6)'
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Degree Attainment by Race/Ethnicity: South vs. North Atlanta',
              font: { size: 18 }
            },
            legend: { position: 'top' },
            tooltip: { mode: 'index', intersect: false }
          },
          scales: {
            y: {
              beginAtZero: true,
              title: { display: true, text: 'Percentage (%)' }
            }
          }
        }
      });
    }
  });

  onDestroy(() => {
    if (chart) chart.destroy();
  });
</script>

<section id="literacyCard" class="literacy-section">
  <div class="text-block">
    <h1 class="headline">Who gets to the finish line?</h1>
    <br>
    <p class="context">
      On paper, graduation rates tell a story of parity—roughly 84% across the city.
      But in practice, many graduates from the south are left unprepared for college coursework or career demands. <br>
    </p>
    <br>
    <p class="context">
      Although both North Atlanta and South Atlanta highschools have similar graduation rates for black and hispanic
      groups, their postgraduate experiences are very different, as seen by the chart.
    </p>
    <h1 class="context">Why does this persist?</h1>
    <p class="context">
      Because education in Atlanta isn't just shaped inside the classroom.
      It's shaped by zip codes, property taxes, and a long lineage of decisions:
      school district funding formulas, access to early learning, and the echoes of redlined boundaries.
    </p>
  </div>

  <div class="chart-wrapper">
    <canvas id="degreeChart" width="1000" height="800"></canvas>
  </div>
</section>

<style>
  .literacy-section {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 4rem 2rem;
    background: url("Paper.jpeg") center top / cover no-repeat;
    background-blend-mode: darken;
    background-color: #ececec;
    color: #222;
    align-items: center;
    gap: 2rem;
  }
  .text-block {
    max-width: 650px;
    margin: 0 auto;
    background-color: rgba(248, 248, 248, 0.687);
    padding: 0.75rem 7rem 2rem;
    box-shadow: 20px 20px 20px#00000012;
  }

  .headline {
    font-size: clamp(2.6rem, 6vw, 4rem);
    font-weight: 700;
    font-family: 'Georgia', serif;
    margin-bottom: 1rem;
  }

  .context {
    font-size: 1.3rem;
    font-style: italic;
    color: #444;
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  .chart-wrapper {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    align-self: center;
    background-color:rgba(255, 255, 255, 0.902);
    border-radius: 20px;
    box-shadow: 20px 20px 10px #7396c2b7;
    padding: 5rem;
  }

  canvas {
    max-width: 100%;
    display: block;
    margin: 0 auto;
  }

  @media (max-width: 850px) {
    .literacy-section {
      grid-template-columns: 1fr;
      text-align: center;
    }

    .chart-wrapper {
      margin-top: 2rem;
    }
  }
</style>