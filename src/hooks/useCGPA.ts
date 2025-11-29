import { useContext } from "react";
import { GPAContext } from "../context/GPAContext";

export const useCGPA = () => {
  const context = useContext(GPAContext);
  if (!context) throw new Error("useGPA must be used inside GPAProvider");
  return context;
};
