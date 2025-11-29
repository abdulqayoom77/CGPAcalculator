import { Button, Card, Col, Input, InputNumber, Row, Space } from "antd";
import { useCGPA } from "../hooks/useCGPA";
import { GPAActionType } from "../types/types";

const EditSemester = () => {
  const { state, dispatch } = useCGPA();
  const semester = state.currentSemester;
  if (!semester) return null;

  const updateSubject = (id: string, field: string, value: any) => {
    const updated = {
      ...semester,
      subjects: semester.subjects.map((s) =>
        s.id === id ? { ...s, [field]: value } : s
      ),
    };
    dispatch({ type: GPAActionType.SET_CURRENT, payload: updated });
  };

  const saveSemester = () => {
    dispatch({ type: GPAActionType.ADD_SEMESTER, payload: semester });
    dispatch({ type: GPAActionType.SET_EDIT_MODE, payload: false });
    dispatch({ type: GPAActionType.SET_CURRENT, payload: null });
  };

  return (
    <Card
      title={`Enter Marks - ${semester.name}`}
      extra={
        <Space>
          <Button
            onClick={() =>
              dispatch({ type: GPAActionType.SET_EDIT_MODE, payload: false })
            }
          >
            Cancel
          </Button>
          <Button type="primary" onClick={saveSemester}>
            Save
          </Button>
        </Space>
      }
    >
      <Space orientation="vertical" size={"large"} style={{ width: "100%" }}>
        {semester.subjects.map((sub, index) => (
          <Card key={index}>
            <Row gutter={16}>
              <Col span={12}>
                <Input
                  placeholder="Subject Name"
                  value={sub.name}
                  onChange={(e) =>
                    updateSubject(sub.id, "name", e.target.value)
                  }
                ></Input>
              </Col>
              <Col span={6}>
                <InputNumber
                  min={0}
                  max={sub.totalMarks}
                  value={sub.marks}
                  onChange={(val) => updateSubject(sub.id, "marks", val)}
                  style={{ width: "100%" }}
                ></InputNumber>
              </Col>
              <Col span={6}>
                <InputNumber
                  min={1}
                  value={sub.totalMarks}
                  onChange={(val) => updateSubject(sub.id, "totalMarks", val)}
                  style={{ width: "100%" }}
                ></InputNumber>
              </Col>
            </Row>
          </Card>
        ))}
      </Space>
    </Card>
  );
};

export default EditSemester;
