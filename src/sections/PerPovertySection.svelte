<script>
  import { onMount } from "svelte";
  import PieChart from "../lib/PieChart.svelte";

  export const onActivate = () => {};

  const chartGroup = [
    {
      chartId: "northATL",
      title: "North Atlanta: Poverty Breakdown by Race/Ethnicity",
      labels: ["Above Poverty Line", "White", "Black", "Asian", "Hispanic"],
      backgroundColors: ["#00529B", "#377B2B", "#7AC142", "#F47A1F", "#FDBB2F"],
      data: (() => {
        const totalPoverty = 12.7;
        const racialCounts = {
          White: 6.7,
          Black: 19.3,
          Asian: 13.9,
          Hispanic: 11.8,
        };
        const racialTotal = Object.values(racialCounts).reduce((a, b) => a + b, 0);
        return [
          +(100 - totalPoverty).toFixed(2),
          ...Object.values(racialCounts).map(n =>
            +((n / racialTotal) * totalPoverty).toFixed(2)
          ),
        ];
      })(),
      caption:
        "Black households represent the largest share of North Atlanta’s poverty population, followed by Asian and Hispanic groups.",
    },
    {
      chartId: "southATL",
      title: "South Atlanta: Poverty Breakdown by Race/Ethnicity",
      labels: ["Above Poverty Line", "White", "Black", "Asian", "Hispanic"],
      backgroundColors: ["#00529B", "#377B2B", "#7AC142", "#F47A1F", "#FDBB2F"],
      data: (() => {
        const totalPoverty = 26.5;
        const racialCounts = {
          White: 17.5,
          Black: 30.3,
          Asian: 29.1,
          Hispanic: 21.7,
        };
        const racialTotal = Object.values(racialCounts).reduce((a, b) => a + b, 0);
        return [
          +(100 - totalPoverty).toFixed(2),
          ...Object.values(racialCounts).map(n =>
            +((n / racialTotal) * totalPoverty).toFixed(2)
          ),
        ];
      })(),
      caption:
        "In South Atlanta, poverty is more widespread, with Black and Asian households comprising the largest shares.",
    },
  ];

  onMount(() => {
    const leftParas = document.querySelectorAll(".left [data-chart-id]");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const el = /** @type {HTMLElement} */ (entry.target);
          if (entry.isIntersecting) {
            const chartId = el.dataset.chartId;

            if (chartId) {
              leftParas.forEach(p => {
                const para = /** @type {HTMLElement} */ (p);
                const isMatch = para.dataset.chartId === chartId;
                para.classList.toggle("active-left", isMatch);
                para.classList.toggle("active", isMatch);
              });
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    leftParas.forEach(el => observer.observe(el));
  });
</script>

<div id="per-poverty">
  <div class="left">
    <div class="group student-a" data-index="0" data-chart-id="northATL">
      <h2 data-chart-id="northATL"><span>Student A: A Foundation Set Early</span></h2>
      <p data-chart-id="northATL">
        <span>
          Student A entered a neighborhood with guaranteed pre-K enrollment. Early literacy was a priority, with access to individualized reading support and math enrichment. As they progressed through North Atlanta schools, each grade offered more academic opportunity—language immersion, consistent teachers, and a full AP track by high school.
        </span>
      </p>
    </div>

    <div class="group student-b" data-index="1" data-chart-id="southATL">
      <h2 data-chart-id="southATL"><span>Student B: A Path Shaped by Scarcity</span></h2>
      <p data-chart-id="southATL">
        <span>
          Student B began school on a waitlist—the pre-K lottery didn’t fall in their favor. Instructional gaps appeared early and were compounded by larger class sizes and limited reading specialists. By high school in South Atlanta, 9% of peers met literacy benchmarks, and only 3% were proficient in math. Graduation came, but college readiness lagged far behind.
        </span>
      </p>
    </div>

    <div class="group systemic" data-index="2" data-chart-id="southATL">
      <h2 data-chart-id="southATL"><span>Two Students, One City</span></h2>
      <p data-chart-id="southATL">
        <span>
          What divides Student A and Student B isn’t aptitude—it’s access. Their educational outcomes echo the city’s geographic fault lines, where poverty rates rise and support systems thin south of I-20. These aren’t isolated stories. They’re reflections of how infrastructure, funding, and early opportunity shape every future test score.
        </span>
      </p>
    </div>
  </div>

  <div class="right">
    <div class="right-inner">
      {#each chartGroup as chart}
        <div class="chart-block" data-chart-id={chart.chartId}>
          <div class="chart-wrapper">
            <PieChart
              chartId={chart.chartId}
              title={chart.title}
              labels={chart.labels}
              data={chart.data}
              backgroundColors={chart.backgroundColors}
            />
          </div>
          <p class="chart-caption">{chart.caption}</p>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  #per-poverty {
    display: flex;
    height: 100vh;
    overflow: hidden;
    width: 100%;
    padding-top: 1rem;
  }

  .left {
    flex: 2;
    overflow-y: auto;
    padding: 4rem 3rem;
    background-color: #fff;
    box-sizing: border-box;
  }

  .right {
    flex: 1;
    position: relative;
    background-color: #c9c9c977;
    background-image: url("CompositionNotebook.jpeg");
    background-size: cover;
    background-repeat: repeat-y;
    background-blend-mode: darken;
    display: flex;
    justify-content: center;
  }

  .right-inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    height: 100%;
  }

  .chart-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
  }

  .chart-caption {
    max-width: 320px;
    font-size: 0.85rem;
    text-align: center;
    color: #444;
    background-color: rgb(255, 254, 253);
    padding: 1rem;
    border-radius: 10px;
  }

  .chart-wrapper {
    max-width: 350px;
  }

  .group {
    margin-bottom: 5rem;
    padding: 2rem;
    border-left: 10px solid #ccc;
    border-radius: 12px;
    background: #fff;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    transition: background 0.4s ease;
  }

  .group.student-a {
    border-left-color: #00529B;
    background: #f0f8ff;
  }

  .group.student-b {
    border-left-color: #F47A1F;
    background: #fff4f4;
  }

  .group.systemic {
    border-left-color: #7AC142;
    background: #fdfdfd;
  }

  .group h2 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
    color: #222;
  }

  .group p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #444;
  }
</style>
