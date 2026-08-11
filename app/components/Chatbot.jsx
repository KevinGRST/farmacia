"use client";
import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "¡Hola! ¿Cómo puedo ayudarte?", sender: "bot" }
    ]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (!input.trim()) return;

        // Agregar mensaje del usuario
        setMessages([...messages, { text: input, sender: "user" }]);
        setInput("");

        // Respuesta automática simple
        setTimeout(() => {
            setMessages(prev => [...prev, {
                text: "Gracias por tu mensaje. Un asesor te contactará pronto.",
                sender: "bot"
            }]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-24 right-4 z-50">
            {!isOpen ? (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110"
                >
                    <MessageCircle size={28} />
                </button>
            ) : (
                <div className="bg-white rounded-2xl shadow-2xl w-80 h-[450px] flex flex-col">
                    {/* Header */}
                    <div className="bg-green-500 text-white p-4 rounded-t-2xl flex justify-between">
                        <span className="font-semibold">Chat</span>
                        <button onClick={() => setIsOpen(false)}>
                            <X size={20} />
                        </button>
                    </div>

                    {/* Mensajes */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-2">
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                                <div className={`max-w-[80%] p-2 rounded-xl ${msg.sender === "user" ? "bg-green-500 text-white" : "bg-gray-100"}`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input */}
                    <div className="border-t p-3 flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && handleSend()}
                            placeholder="Escribe..."
                            className="flex-1 px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <button onClick={handleSend} className="bg-green-500 text-white rounded-full p-2">
                            <Send size={18} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}