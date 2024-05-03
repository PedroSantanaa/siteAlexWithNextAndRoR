import { LoadingModalWrapper, Spinner } from "@/app/styled-components/CompletarCadastro";

const LoadingModal = () => {
  return (
    <LoadingModalWrapper>
      <Spinner />
    </LoadingModalWrapper>
  );
};

export default LoadingModal;