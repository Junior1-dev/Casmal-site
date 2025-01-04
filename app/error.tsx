"use client";

import { useEffect, useState } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    console.error(error);
    setHasError(true); // Marca o estado de erro para exibição condicional.
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-red-100 text-red-700 rounded">
      <h2 className="text-xl font-semibold mb-4">Oops, algo deu errado!</h2>
      {hasError && (
        <p className="mb-4 text-sm">
          Estamos tendo dificuldades técnicas. Tente novamente em breve.
        </p>
      )}
      <button
        onClick={reset}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
      >
        Tentar novamente
      </button>
    </div>
  );
}
