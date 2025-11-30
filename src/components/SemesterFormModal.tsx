import { Button, Form, Input, InputNumber, Modal } from "antd";
import { useCGPA } from "../hooks/useCGPA";
import { GPAActionType, type ModalProps } from "../types/types";

const SemesterFormModal = ({ open, onClose }: ModalProps) => {
  const { dispatch } = useCGPA();
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    const subjects = Array.from({ length: values.numSubjects }, () => ({
      id: crypto.randomUUID(),
      name: "",
      marks: 0,
      totalMarks: 100,
    }));
    const newSem = {
      id: crypto.randomUUID(),
      name: values.semesterName,
      subjects,
    };

    dispatch({ type: GPAActionType.SET_CURRENT, payload: newSem });
    dispatch({ type: GPAActionType.SET_EDIT_MODE, payload: true });
    onClose();
  };

  return (
    <Modal
      title="Create New Semester"
      open={open}
      onCancel={onClose}
      footer={null}
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="Semester Name" required name="semesterName">
          <Input />
        </Form.Item>
        <Form.Item
          label="Number of Subjects"
          initialValue={5}
          name="numSubjects"
        >
          <InputNumber min={1} max={15} style={{ width: "100%" }} />
        </Form.Item>

        <Button type="primary" htmlType="submit" block>
          Create Semester
        </Button>
      </Form>
    </Modal>
  );
};

export default SemesterFormModal;
