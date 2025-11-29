import { useCGPA } from "../hooks/useCGPA";
import { Space, Typography } from "antd";
import SemesterCard from "./SemesterCard";

const SemesterList = () => {
  const { state } = useCGPA();

  return (
    <Space>
      <Typography.Title level={3} style={{ color: "white" }}>
        Your Semesters
      </Typography.Title>

      {state.semesters.map((sem) => (
        <SemesterCard key={sem.id} semester={sem} />
      ))}
    </Space>
  );
};

export default SemesterList;
