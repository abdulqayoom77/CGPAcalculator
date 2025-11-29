import { Card, Button, Table, Row, Col, Statistic, Divider, Tag } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { calculateGPA, getGrade, getGradeColor } from "../utils/calculations";
import { useCGPA } from "../hooks/useCGPA";
import { GPAActionType } from "../types/types";

export default function SemesterCard({ semester }: any) {
  const { dispatch } = useCGPA();

  const deleteSem = () => {
    dispatch({ type: GPAActionType.DELETE_SEMESTER, payload: semester.id });
  };

  const gpa = calculateGPA(semester.subjects);
  const total = semester.subjects.reduce((s: number, x: any) => s + x.marks, 0);
  console.log("Subjects:", semester.subjects);
  const max = semester.subjects.reduce(
    (s: number, x: any) => s + x.totalMarks,
    0
  );
  const pct = (total / max) * 100;

  const columns = [
    {
      title: "Subject",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Marks Obtained",
      dataIndex: "marks",
      key: "marks",
      align: "center" as const,
    },
    {
      title: "Total Marks",
      dataIndex: "totalMarks",
      key: "totalMarks",
      align: "center" as const,
    },
    {
      title: "Percentage",
      key: "percentage",
      align: "center" as const,
      render: (_: any, record: any) => {
        const percentage = (record.marks / record.totalMarks) * 100;
        return `${percentage.toFixed(1)}%`;
      },
    },
    {
      title: "Grade",
      key: "grade",
      align: "center" as const,
      render: (_: any, record: any) => {
        const percentage = (record.marks / record.totalMarks) * 100;
        const grade = getGrade(percentage);
        return <Tag color={getGradeColor(grade)}>{grade}</Tag>;
      },
    },
  ];

  return (
    <Card
      title={semester.name}
      extra={
        <Button danger icon={<DeleteOutlined />} onClick={deleteSem}>
          Delete
        </Button>
      }
    >
      <Table
        style={{ textWrap: "nowrap" }}
        dataSource={semester.subjects}
        rowKey="id"
        columns={columns}
        pagination={false}
      />

      <Divider />

      <Row gutter={16} style={{ textWrap: "nowrap" }}>
        <Col span={8}>
          <Statistic title="GPA" value={gpa.toFixed(2)} />
        </Col>
        <Col span={8}>
          <Statistic title="Percentage" value={pct.toFixed(1)} suffix="%" />
        </Col>
        <Col span={8}>
          <Statistic title="Grade" value={getGrade(pct)} />
        </Col>
      </Row>
    </Card>
  );
}
