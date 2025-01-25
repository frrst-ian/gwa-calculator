import { useState } from "react";
import "./GWACalculator.css";
import { Trash2 } from "lucide-react";

const GWACalculator = () => {
  const [subjects, setSubjects] = useState([
    { id: 1, subjectName: "", grade: "", units: "" },
  ]);

  const addSubject = () => {
    setSubjects([
      ...subjects,
      { id: subjects.length + 1, subjectName: "", grade: "", units: "" },
    ]);
  };

  const handleInputChange = (id, field, value) => {
    setSubjects(
      subjects.map((subject) =>
        subject.id === id ? { ...subject, [field]: value } : subject
      )
    );
  };

  const removeSubject = (id) => {
    setSubjects(subjects.filter((subject) => subject.id !== id));
  };

  const calculateGWA = () => {
    let totalUnits = 0;
    let weightedGradeSum = 0;

    // Only process subjects with both grade and units
    subjects.forEach((subject) => {
      if (subject.grade && subject.units) {
        const units = parseFloat(subject.units);
        const grade = parseFloat(subject.grade);

        // Add to running totals
        totalUnits += units;
        weightedGradeSum += grade * units;
      }
    });

    // Return formatted GWA or default value
    return totalUnits ? (weightedGradeSum / totalUnits).toFixed(3) : "0.00";
  };

  const academicDistinction = () => {
    const gwa = calculateGWA();

    const gwaFloat = parseFloat(gwa);
    if (gwaFloat >= 1.0 && gwaFloat <= 1.45) {
      return "CONGRATULATIONS! YOU ARE A PRESIDENT'S LISTER 🏆";
    } else if (gwaFloat >= 1.46 && gwaFloat <= 1.75) {
      return "CONGRATULATIONS! YOU ARE A DEAN'S LISTER 🎓";
    } else {
      return "Keep pushing! You're doing great! 💪";
    }
  };

  const hasValidInputs = () => {
    return subjects.some((subject) => subject.grade && subject.units);
  };

  return (
    <div className="gwa-calculator">
      <h2>GWA Calculator</h2>
      <div className="subjects">
        {subjects.map((subject) => (
          <div key={subject.id} className="subject-row">
            <input
              type="text"
              placeholder="Subject Name"
              value={subject.subjectName}
              onChange={(e) =>
                handleInputChange(subject.id, "subjectName", e.target.value)
              }
            />
            <input
              type="number"
              placeholder="Grade"
              value={subject.grade}
              onChange={(e) =>
                handleInputChange(subject.id, "grade", e.target.value)
              }
              step="0.01"
              min="1"
              max="5"
            />
            <input
              type="number"
              placeholder="Units"
              value={subject.units}
              onChange={(e) =>
                handleInputChange(subject.id, "units", e.target.value)
              }
              min="1"
            />

            <Trash2
              className="del-btn"
              onClick={() => removeSubject(subject.id)}
              color="#ff0000"
              strokeWidth={1.75}
              size={34}
            />
          </div>
        ))}
      </div>
      <button className="add-sub-btn" onClick={addSubject}>
        Add Subject
      </button>
      {hasValidInputs() && (
        <>
          <div className="result">
            <h3>Your GWA is {calculateGWA()}</h3>
          </div>
          <div className="academic-distinction">
            <h3>{academicDistinction()}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default GWACalculator;
