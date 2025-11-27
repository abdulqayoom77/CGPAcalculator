import React, { useState } from "react";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input, Select } from "antd";
import { Option } from "antd/es/mentions";

type FieldType = {
  username?: string;
  seatNumber?: string;
  semester?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const App: React.FC = () => {
  const semesterSubjects = {
    1: 5,
    2: 6,
    3: 6,
    4: 7,
    5: 7,
    6: 7,
    7: 7,
    8: 7,
    9: 7,
    10: 7,
  };
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
  const [subjects, setSubjects] = useState([]);
  const [student, setStudent] = useState({
    userName: "",
    seatNumber: "",
    semester: "",
  });
  const [step, setStep] = useState(1);

  const handleSemesterSelect = () => {
    console.log("Step:", step);
    const totalSubs = semesterSubjects[student.semester];
    const arr = Array.from({ length: totalSubs }, () => ({
      subject: "",
      marks: "",
    }));
    setSubjects(arr);
    setStep(2);
    console.log("Step:", step);
  };

  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        requiredMark={false}
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
    
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Seat Number"
          name="seatNumber"
          rules={[
            { required: true, message: "Please input your Seat Number!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Semester"
          name="semester"
          rules={[{ required: true, message: "Please select a semester!" }]}
        >
          <Select placeholder="Select Semester">
            <Select.Option value="1">1st Semester</Select.Option>
            <Select.Option value="2">2nd Semester</Select.Option>
            <Select.Option value="3">3rd Semester</Select.Option>
            <Select.Option value="4">4th Semester</Select.Option>
            <Select.Option value="5">5th Semester</Select.Option>
            <Select.Option value="6">6th Semester</Select.Option>
            <Select.Option value="7">7th Semester</Select.Option>
            <Select.Option value="8">8th Semester</Select.Option>
            <Select.Option value="9">9th Semester</Select.Option>
            <Select.Option value="10">10th Semester</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" onClick={handleSemesterSelect}>
            Next
          </Button>
        </Form.Item>
      </Form>

      {step === 2 && (
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          requiredMark={false}
        >
          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Seat Number"
            name="seatNumber"
            rules={[
              { required: true, message: "Please input your Seat Number!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Semester"
            name="semester"
            rules={[{ required: true, message: "Please select a semester!" }]}
          >
            <Select placeholder="Select Semester">
              <Select.Option value="1">1st Semester</Select.Option>
              <Select.Option value="2">2nd Semester</Select.Option>
              <Select.Option value="3">3rd Semester</Select.Option>
              <Select.Option value="4">4th Semester</Select.Option>
              <Select.Option value="5">5th Semester</Select.Option>
              <Select.Option value="6">6th Semester</Select.Option>
              <Select.Option value="7">7th Semester</Select.Option>
              <Select.Option value="8">8th Semester</Select.Option>
              <Select.Option value="9">9th Semester</Select.Option>
              <Select.Option value="10">10th Semester</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" onClick={handleSemesterSelect}>
              Next
            </Button>
          </Form.Item>
        </Form>
      )}
    </>
  );
};

export default App;
