import { useState } from "react";
import "./App.css";
import generatePDF from "react-to-pdf";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { faker } from "@faker-js/faker";
import { Bar } from "react-chartjs-2";
function App() {
  //Name of the file, you can enter any name you want
  const [filename, setFilename] = useState("");

  /**
   * Options passed for the page, custom properties for the pdf downloaded
   */
  const fileOptions = {
    filename: `${filename}.pdf`,
    page: {
      margin: 5,
    },
  };

  // This is target dom element which a user needs to download
  const targetElement = () => document.getElementById("container");
  // function for downloading pdf hooked with the download button
  const downloadPdf = () => generatePDF(targetElement, fileOptions);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          gap: 2,
        }}
      >
        <input
          type="text"
          placeholder="please enter pdf name"
          className="input"
          onChange={(e) => setFilename(e.target.value)}
        />
        <button
          style={{
            color: "green",
          }}
          disabled={filename === ""}
          onClick={downloadPdf}
        >
          Download PDf
        </button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        id="container"
      >
        <p className="text-container">
          Once upon a time, nestled within the emerald expanse of the Enchanted
          Forest, there lived a humble squirrel named Alden. Alden was no
          ordinary squirrel; he possessed a curious nature and a heart brimming
          with wanderlust. Each day, Alden would scamper through the lush
          foliage, his bushy tail trailing behind him like a playful ribbon. He
          would explore every nook and cranny, from the towering oak trees to
          the babbling brooks that whispered secrets of ancient magic. One crisp
          autumn morning, as golden leaves danced in the breeze, Alden stumbled
          upon a hidden glade bathed in ethereal light. In the center of the
          glade stood a magnificent oak tree, its gnarled branches reaching
          toward the heavens like outstretched arms. Intrigued, Alden approached
          the oak tree and noticed a small, intricately carved door nestled
          within its trunk. With a mixture of excitement and trepidation, he
          pushed the door open and stepped into a world unlike any he had ever
          seen. Inside, Alden found himself in a realm of wonder and
          enchantment. Sparkling fireflies danced amidst the canopy of stars,
          and colorful flowers bloomed in hues unseen by mortal eyes. But most
          astonishing of all was the presence of the Forest Guardian, a majestic
          stag with antlers adorned with shimmering crystals. The Forest
          Guardian greeted Alden with a gentle smile and revealed that the glade
          was a sanctuary for those who dared to dream. He explained that Alden
          had been chosen to embark on a quest to restore balance to the
          Enchanted Forest, which had been plagued by darkness and despair. With
          newfound courage coursing through his veins, Alden accepted the
          challenge and set out on his journey, guided by the wisdom of the
          Forest Guardian. Along the way, he encountered a host of magical
          creatures, each offering their own unique gifts to aid him in his
          quest. Through trials and tribulations, Alden persevered, his
          unwavering determination shining like a beacon of hope in the darkest
          of times. And as he faced the final challenge, a great evil that
          threatened to consume the forest, Alden discovered that the true power
          lay not in magic or strength, but in the bonds of friendship and the
          strength of his own heart. In the end, Alden emerged victorious, the
          Enchanted Forest bathed once more in the light of dawn. And though his
          journey had come to an end, Alden knew that the memories of his
          adventures would live on forever, a testament to the enduring spirit
          of courage and love.
        </p>
        <div className="bar">
          <Bar options={options} className="bar" data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
