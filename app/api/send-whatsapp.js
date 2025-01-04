// pages/api/send-whatsapp.js
export default async function handler(req, res) {
    if (req.method === "POST") {
      const { number, message } = req.body;
  
      try {
        const response = await fetch("https://graph.facebook.com/v16.0/YOUR_PHONE_ID/messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer YOUR_ACCESS_TOKEN`,
          },
          body: JSON.stringify({
            messaging_product: "whatsapp",
            to: number,
            text: { body: message },
          }),
        });
  
        if (response.ok) {
          res.status(200).json({ message: "Mensagem enviada com sucesso!" });
        } else {
          const errorData = await response.json();
          res.status(400).json({ error: errorData });
        }
      } catch (error) {
        res.status(500).json({ error: "Erro no servidor." });
      }
    } else {
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Método ${req.method} não permitido`);
    }
  }
  