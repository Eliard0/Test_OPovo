export const getCourses = async () => {
    try {
        const response = await fetch("http://localhost:8000/index.php");
        if (!response.ok) throw new Error("Erro ao buscar cursos");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
};
