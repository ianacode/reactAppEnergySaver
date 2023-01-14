import { useParams, useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

export default function Product() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [queryParams] = useSearchParams();
  const selectedColor = queryParams.get("color");

  function handleGoToHome() {
    navigate("/");
  }

  function handleGoBack() {
    navigate(-1);
  }

  function handleGoForward() {
    navigate(1);
  }

  return (
    <div className="product">
      <h2>Você está vendo o produto {productId}</h2>
      {selectedColor && (
        <h3 style={{ color: selectedColor }}>
          Cor selecionada: {selectedColor}
        </h3>
      )}

      <div className="actions">
        <button onClick={handleGoBack}>Voltar para a página anterior</button>
        <button onClick={handleGoForward}>Ir para próxima página</button>
        <button onClick={handleGoToHome}>Voltar para a home</button>
      </div>
    </div>
  );
}
