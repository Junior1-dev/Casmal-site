"use client";
import { useState } from "react";
import { ButtonApp } from "@/components/ui/button-app";
import InputSearch from "./input-search";

const PartEnDFooter = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const whatsappNumber = "+24492403023"; // Substitua pelo número correto

  const sendMessageToWhatsApp = async () => {
    try {
      const response = await fetch("/api/send-whatsapp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          number: whatsappNumber,
          message,
        }),
      });

      if (response.ok) {
        alert("Mensagem enviada com sucesso!");
        setMessage("");
      } else {
        alert("Erro ao enviar mensagem.");
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao enviar mensagem.");
    }
  };

  return (
    <div className="flex items-center gap-8">
      <InputSearch />
      <div>
        <ButtonApp onClick={() => setIsChatOpen(true)} size="md">
          Solicitar
        </ButtonApp>
      </div>

      {isChatOpen && (
        <div className="fixed bottom-10 right-10 w-[350px] bg-white shadow-lg rounded-lg border border-gray-300">
          <div className="flex items-center justify-between bg-green-500 text-white px-4 py-2 rounded-t-lg">
            <h3 className="font-bold text-lg">Chat WhatsApp</h3>
            <button
              className="text-white font-bold"
              onClick={() => setIsChatOpen(false)}
            >
              X
            </button>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <textarea
                className="w-full h-20 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Digite sua mensagem..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button
                onClick={sendMessageToWhatsApp}
                className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PartEnDFooter;
