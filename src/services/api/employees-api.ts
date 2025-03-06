import api from "./api";

export const getEmployees = async () => {
  try {
    const response = await api.get("/employees");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar empregados:", error);
    throw new Error("Erro ao buscar empregados");
  }
};
