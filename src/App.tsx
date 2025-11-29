import { Card, Button } from "antd";
import { useCGPA } from "./hooks/useCGPA";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import SemesterFormModal from "./components/SemesterFormModal";
import EditSemester from "./components/EditSemester";
import SemesterList from "./components/SemesterList";

const App = () => {
  const { state } = useCGPA();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div style={{ padding: 24 }}>
      {!state.editMode && (
        <Card>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => setModalOpen(true)}
          ></Button>
        </Card>
      )}
      <SemesterFormModal open={modalOpen} onClose={() => setModalOpen(false)} />
      {state.editMode ? <EditSemester /> : <SemesterList />}
    </div>
  );
};

export default App;
