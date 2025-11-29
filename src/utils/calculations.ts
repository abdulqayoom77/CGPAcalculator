import type { Subject } from "../types/types";

export function calculateGPA(subjects: Subject[]) {
  let total = 0;
  subjects.forEach((s) => {
    total += (s.marks / s.totalMarks) * 100;
  });
  const avg = total / subjects.length;
  if (avg >= 90) return 4.0;
  if (avg >= 80) return 3 + (avg - 80) / 10;
  if (avg >= 70) return 2 + (avg - 70) / 10;
  if (avg >= 60) return 1 + (avg - 60) / 10;
  return 0;
}
export function getGrade(p: number) {
  if (p >= 90) return "A";
  if (p >= 80) return "B";
  if (p >= 70) return "C";
  if (p >= 60) return "D";
  return "F";
}

export function getGradeColor(grade: string) {
  const colors: Record<string, string> = {
    'A': 'green',
    'B': 'blue',
    'C': 'orange',
    'D': 'gold',
    'F': 'red',
  };
  return colors[grade] || 'default';
}