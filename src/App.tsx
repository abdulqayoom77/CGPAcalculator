import { useState } from "react";
import Step1 from "./components/Step1";

const App = () => {
  

  

  const [gpa, setGpa] = useState(null);
  const getGradingScale = (marks: any) => {
    if (marks >= 85) return { grade: "A", point: 4.0 };
    if (marks >= 80) return { grade: "A−", point: 3.7 };
    if (marks >= 75) return { grade: "B+", point: 3.3 };
    if (marks >= 70) return { grade: "B", point: 3.0 };
    if (marks >= 65) return { grade: "B−", point: 2.7 };
    if (marks >= 60) return { grade: "C+", point: 2.3 };
    if (marks >= 55) return { grade: "C", point: 2.0 };
    if (marks >= 50) return { grade: "C−", point: 1.7 };
    if (marks >= 45) return { grade: "D", point: 1.3 };
    if (marks >= 40) return { grade: "D−", point: 1.0 };
    return { grade: "F", point: 0.0 };
  };

  return (
    <div>
      <Step1></Step1>
    </div>
  );
};

export default App;
