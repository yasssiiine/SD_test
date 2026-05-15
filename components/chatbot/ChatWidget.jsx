// "use client";

// import { useEffect, useRef, useState } from "react";
// import styles from "./ChatWidget.module.css";
// import {
//   API_BASE_URL,
//   generateDevisFromChat,
//   resolveApiUrl,
// } from "../../services/devis";

// const DEFAULT_ASSISTANT_MESSAGE =
//   "Bonjour 👋 Je suis l’assistant SmartDex. Je peux vous aider à choisir une solution digitale, répondre à vos questions, ou vous guider vers un devis.";

// function normalizeMessage(message) {
//   if (!message?.content?.trim()) return null;

//   return {
//     role: message.role === "assistant" ? "assistant" : "user",
//     content: message.content.trim(),
//   };
// }

// function detectPreferredLanguage(messages) {
//   const browserLanguage =
//     typeof navigator !== "undefined" ? navigator.language : "";
//   const conversationText = messages
//     .map((message) => message?.content || "")
//     .join(" ")
//     .toLowerCase();

//   if (browserLanguage.toLowerCase().startsWith("fr")) {
//     return "fr";
//   }

//   if (
//     /\b(bonjour|devis|projet|site|application|besoin|reservation|réservation)\b/.test(
//       conversationText
//     )
//   ) {
//     return "fr";
//   }

//   return "fr";
// }

// function buildDevisPayload(messages) {
//   const normalizedMessages = messages
//     .map(normalizeMessage)
//     .filter(Boolean)
//     .filter((message) => message.role === "user");

//   return {
//     messages: normalizedMessages,
//     client_name: "",
//     client_email: "",
//     client_phone: "",
//     preferred_language: detectPreferredLanguage(normalizedMessages),
//   };
// }

// function formatCurrency(value, currency = "MAD") {
//   if (value === null || value === undefined || value === "") return "—";

//   const numericValue = Number(value);

//   if (Number.isNaN(numericValue)) return value;

//   try {
//     return new Intl.NumberFormat("fr-MA", {
//       style: "currency",
//       currency,
//       maximumFractionDigits: 0,
//     }).format(numericValue);
//   } catch {
//     return `${numericValue} ${currency}`;
//   }
// }

// function safeArray(value) {
//   return Array.isArray(value) ? value : [];
// }

// export default function ChatWidget() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [sessionId, setSessionId] = useState("");
//   const [messages, setMessages] = useState([
//     {
//       id: crypto.randomUUID(),
//       role: "assistant",
//       content: DEFAULT_ASSISTANT_MESSAGE,
//     },
//   ]);
//   const [input, setInput] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [isGeneratingDevis, setIsGeneratingDevis] = useState(false);
//   const [devisResult, setDevisResult] = useState(null);
//   const [devisError, setDevisError] = useState("");
//   const messagesEndRef = useRef(null);
//   const textareaRef = useRef(null);

//   const userMessages = messages.filter(
//     (message) => message.role === "user" && message.content?.trim()
//   );
//   const generatedEstimate = devisResult?.estimate || {};
//   const generatedQuote = devisResult?.quote || {};
//   const generatedLineItems = safeArray(generatedQuote?.line_items);
//   const generatedIncludedGroups = safeArray(generatedQuote?.included_groups);
//   const clarificationQuestions = safeArray(
//     devisResult?.clarification_questions
//   );
//   const costDrivers = safeArray(generatedEstimate?.cost_drivers);
//   const pdfUrl = devisResult?.pdf_url
//     ? resolveApiUrl(devisResult.pdf_url)
//     : "";

//   useEffect(() => {
//     let existingSessionId = localStorage.getItem("smartdex_chat_session_id");

//     if (!existingSessionId) {
//       existingSessionId = crypto.randomUUID();
//       localStorage.setItem("smartdex_chat_session_id", existingSessionId);
//     }

//     setSessionId(existingSessionId);
//   }, []);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages, isLoading]);

//   useEffect(() => {
//     const openChatbot = () => {
//       setIsOpen(true);
//       window.setTimeout(() => textareaRef.current?.focus(), 80);
//     };

//     window.addEventListener("smartdex:open-chat", openChatbot);

//     return () => {
//       window.removeEventListener("smartdex:open-chat", openChatbot);
//     };
//   }, []);

//   const autoResizeTextarea = () => {
//     const textarea = textareaRef.current;
//     if (!textarea) return;

//     textarea.style.height = "auto";
//     textarea.style.height = `${Math.min(textarea.scrollHeight, 140)}px`;
//   };

//   const handleInputChange = (e) => {
//     setInput(e.target.value);
//     requestAnimationFrame(autoResizeTextarea);
//   };

//   const sendMessage = async () => {
//     const trimmed = input.trim();
//     if (!trimmed || isLoading || !sessionId) return;

//     const userMessage = {
//       id: crypto.randomUUID(),
//       role: "user",
//       content: trimmed,
//     };

//     const nextMessages = [...messages, userMessage];
//     setMessages(nextMessages);
//     setInput("");
//     setIsLoading(true);

//     if (textareaRef.current) {
//       textareaRef.current.style.height = "auto";
//     }

//     try {
//       const response = await fetch(`${API_BASE_URL}/api/chatbot/chat/`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           session_id: sessionId,
//           message: trimmed,
//           history: nextMessages.map((msg) => ({
//             role: msg.role,
//             content: msg.content,
//           })),
//         }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(
//           data?.detail ||
//             data?.message ||
//             "Une erreur est survenue lors de la réponse du chatbot."
//         );
//       }

//       const assistantMessage = {
//         id: crypto.randomUUID(),
//         role: "assistant",
//         content: data.answer || data.reply || "Aucune réponse reçue.",
//       };

//       setMessages((prev) => [...prev, assistantMessage]);
//     } catch (error) {
//       setMessages((prev) => [
//         ...prev,
//         {
//           id: crypto.randomUUID(),
//           role: "assistant",
//           content:
//             "Je rencontre un problème technique pour le moment. Vous pouvez nous contacter directement via le formulaire ou demander un devis.",
//         },
//       ]);
//       console.error("Chatbot error:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await sendMessage();
//   };

//   const handleKeyDown = async (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       await sendMessage();
//     }
//   };

//   const resetConversation = () => {
//     const newSessionId = crypto.randomUUID();
//     localStorage.setItem("smartdex_chat_session_id", newSessionId);
//     setSessionId(newSessionId);
//     setMessages([
//       {
//         id: crypto.randomUUID(),
//         role: "assistant",
//         content: DEFAULT_ASSISTANT_MESSAGE,
//       },
//     ]);
//     setInput("");
//     setDevisResult(null);
//     setDevisError("");
//     setIsGeneratingDevis(false);
//   };

//   const handleGenerateDevis = async () => {
//     if (isGeneratingDevis || isLoading) return;

//     const payload = buildDevisPayload(messages);

//     if (!payload.messages.length) {
//       setDevisError(
//         "Ajoutez quelques détails sur votre projet avant de générer un devis."
//       );
//       setDevisResult(null);
//       return;
//     }

//     setIsGeneratingDevis(true);
//     setDevisError("");

//     try {
//       const response = await generateDevisFromChat(payload);
//       const normalizedResponse =
//         response?.status ||
//         response?.estimate ||
//         response?.quote ||
//         response?.clarification_questions
//           ? {
//               ...response,
//               status:
//                 response?.status ||
//                 (response?.clarification_questions?.length
//                   ? "needs_clarification"
//                   : "processed"),
//             }
//           : { status: "failed" };

//       setDevisResult(normalizedResponse);
//     } catch (error) {
//       console.error("Generate devis error:", error);
//       setDevisResult({ status: "failed" });
//       setDevisError(
//         "Impossible de générer le devis pour le moment. Veuillez réessayer."
//       );
//     } finally {
//       setIsGeneratingDevis(false);
//     }
//   };

//   return (
//     <>
//       {!isOpen && (
//         <button
//           className={styles.floatingButton}
//           onClick={() => setIsOpen(true)}
//           aria-label="Ouvrir le chatbot SmartDex"
//         >
//           <span className={styles.floatingButtonIcon}>💬</span>
//           <span className={styles.floatingButtonText}>SmartDex AI</span>
//         </button>
//       )}

//       {isOpen && (
//         <div className={styles.chatWidget}>
//           <div className={styles.chatHeader}>
//             <div>
//               <h3 className={styles.chatTitle}>SmartDex Assistant</h3>
//               <p className={styles.chatSubtitle}>
//                 Solutions web, SaaS, automation, IA
//               </p>
//             </div>

//             <div className={styles.headerActions}>
//               <button
//                 type="button"
//                 onClick={resetConversation}
//                 className={styles.headerButton}
//                 aria-label="Réinitialiser la conversation"
//                 title="Réinitialiser"
//               >
//                 ↺
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setIsOpen(false)}
//                 className={styles.headerButton}
//                 aria-label="Fermer le chatbot"
//                 title="Fermer"
//               >
//                 ✕
//               </button>
//             </div>
//           </div>

//           <div className={styles.messagesContainer}>
//             {messages.map((message) => (
//               <div
//                 key={message.id}
//                 className={`${styles.messageRow} ${
//                   message.role === "user"
//                     ? styles.userMessageRow
//                     : styles.assistantMessageRow
//                 }`}
//               >
//                 <div
//                   className={`${styles.messageBubble} ${
//                     message.role === "user"
//                       ? styles.userBubble
//                       : styles.assistantBubble
//                   }`}
//                 >
//                   {message.content}
//                 </div>
//               </div>
//             ))}

//             {isLoading && (
//               <div
//                 className={`${styles.messageRow} ${styles.assistantMessageRow}`}
//               >
//                 <div
//                   className={`${styles.messageBubble} ${styles.assistantBubble}`}
//                 >
//                   <div className={styles.typingIndicator}>
//                     <span />
//                     <span />
//                     <span />
//                   </div>
//                 </div>
//               </div>
//             )}

//             {(isGeneratingDevis || devisError || devisResult) && (
//               <div
//                 className={`${styles.messageRow} ${styles.assistantMessageRow}`}
//               >
//                 <div
//                   className={`${styles.messageBubble} ${styles.assistantBubble} ${styles.devisBubble}`}
//                 >
//                   {isGeneratingDevis && (
//                     <div className={styles.devisState}>
//                       <strong>Génération du devis...</strong>
//                     </div>
//                   )}

//                   {!isGeneratingDevis && devisError && (
//                     <div className={styles.devisStateError}>{devisError}</div>
//                   )}

//                   {!isGeneratingDevis &&
//                     devisResult?.status === "needs_clarification" && (
//                       <div className={styles.devisResultCard}>
//                         <strong>
//                           Il nous manque quelques informations pour générer un
//                           devis précis.
//                         </strong>
//                         {clarificationQuestions.length > 0 && (
//                           <ul className={styles.devisList}>
//                             {clarificationQuestions.map((question, index) => (
//                               <li key={`${question}-${index}`}>{question}</li>
//                             ))}
//                           </ul>
//                         )}
//                       </div>
//                     )}

//                   {!isGeneratingDevis && devisResult?.status === "processed" && (
//                     <div className={styles.devisResultCard}>
//                       <strong>Devis généré</strong>

//                       <div className={styles.devisSection}>
//                         <span className={styles.devisLabel}>Estimation</span>
//                         <p className={styles.devisValue}>
//                           {formatCurrency(
//                             generatedEstimate?.range_min,
//                             generatedEstimate?.currency || "MAD"
//                           )}{" "}
//                           —{" "}
//                           {formatCurrency(
//                             generatedEstimate?.range_max,
//                             generatedEstimate?.currency || "MAD"
//                           )}
//                         </p>
//                       </div>

//                       {costDrivers.length > 0 && (
//                         <div className={styles.devisSection}>
//                           <span className={styles.devisLabel}>
//                             Facteurs de coût
//                           </span>
//                           <ul className={styles.devisList}>
//                             {costDrivers.map((driver, index) => (
//                               <li key={`${driver?.label || driver}-${index}`}>
//                                 {typeof driver === "string"
//                                   ? driver
//                                   : driver?.label ||
//                                     driver?.name ||
//                                     driver?.description ||
//                                     "Facteur"}
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       )}

//                       {generatedIncludedGroups.length > 0 && (
//                         <div className={styles.devisSection}>
//                           <span className={styles.devisLabel}>
//                             Lots inclus
//                           </span>
//                           <ul className={styles.devisList}>
//                             {generatedIncludedGroups.map((group, index) => (
//                               <li
//                                 key={`group-${group?.key || group?.label || index}`}
//                               >
//                                 {group?.label || group?.key || "Lot"}
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       )}

//                       {generatedLineItems.length > 0 && (
//                         <div className={styles.devisSection}>
//                           <span className={styles.devisLabel}>
//                             Détail du devis
//                           </span>
//                           <ul className={styles.devisList}>
//                             {generatedLineItems.map((item, index) => (
//                               <li
//                                 key={`line-item-${item?.label || item?.name || index}`}
//                               >
//                                 <span>{item?.label || item?.name || "Poste"}</span>
//                                 {(item?.price_min ||
//                                   item?.price_max ||
//                                   item?.amount) && (
//                                   <span className={styles.inlinePrice}>
//                                     {item?.amount
//                                       ? formatCurrency(
//                                           item.amount,
//                                           generatedEstimate?.currency || "MAD"
//                                         )
//                                       : `${formatCurrency(
//                                           item?.price_min,
//                                           generatedEstimate?.currency || "MAD"
//                                         )} — ${formatCurrency(
//                                           item?.price_max,
//                                           generatedEstimate?.currency || "MAD"
//                                         )}`}
//                                   </span>
//                                 )}
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       )}

//                       {generatedQuote?.recommendation && (
//                         <div className={styles.devisSection}>
//                           <span className={styles.devisLabel}>
//                             Recommandation
//                           </span>
//                           <p className={styles.devisValue}>
//                             {generatedQuote.recommendation}
//                           </p>
//                         </div>
//                       )}

//                       {pdfUrl && (
//                         <a
//                           href={pdfUrl}
//                           target="_blank"
//                           rel="noreferrer"
//                           className={styles.devisPdfLink}
//                         >
//                           Télécharger le devis PDF
//                         </a>
//                       )}
//                     </div>
//                   )}

//                   {!isGeneratingDevis && devisResult?.status === "failed" && (
//                     <div className={styles.devisStateError}>
//                       Impossible de générer le devis pour le moment. Veuillez
//                       réessayer.
//                     </div>
//                   )}
//                 </div>
//               </div>
//             )}

//             <div ref={messagesEndRef} />
//           </div>

//           <form onSubmit={handleSubmit} className={styles.inputArea}>
//             <textarea
//               ref={textareaRef}
//               value={input}
//               onChange={handleInputChange}
//               onKeyDown={handleKeyDown}
//               placeholder="Décrivez votre besoin..."
//               className={styles.textarea}
//               rows={1}
//               maxLength={2000}
//             />
//             <button
//               type="submit"
//               className={styles.sendButton}
//               disabled={isLoading || !input.trim()}
//             >
//               Envoyer
//             </button>
//           </form>

//           <div className={styles.footer}>
//             <button
//               type="button"
//               className={styles.quickAction}
//               onClick={() => setInput("Je veux un site web pour mon activité")}
//             >
//               Site web
//             </button>
//             <button
//               type="button"
//               className={styles.quickAction}
//               onClick={() => setInput("J’ai besoin d’une solution SaaS")}
//             >
//               SaaS
//             </button>
//             <button
//               type="button"
//               className={styles.quickAction}
//               onClick={() => setInput("Je veux automatiser mon activité")}
//             >
//               Automation
//             </button>
//             <button
//               type="button"
//               className={`${styles.quickAction} ${styles.generateDevisButton}`}
//               onClick={handleGenerateDevis}
//               disabled={isGeneratingDevis || isLoading || userMessages.length === 0}
//             >
//               {isGeneratingDevis
//                 ? "Génération de l’estimation..."
//                 : "Obtenir une estimation instantanée"}
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }



"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ChatWidget.module.css";
import {
  API_BASE_URL,
  generateDevisFromChat,
  resolveApiUrl,
} from "../../services/devis";

const DEFAULT_ASSISTANT_MESSAGE =
  "Bonjour ! Je suis l'assistant SmartDex. Je peux vous aider à choisir une solution digitale, répondre à vos questions, ou vous guider vers un devis.";

function normalizeMessage(message) {
  if (!message?.content?.trim()) return null;
  return {
    role: message.role === "assistant" ? "assistant" : "user",
    content: message.content.trim(),
  };
}

function detectPreferredLanguage(messages) {
  const browserLanguage =
    typeof navigator !== "undefined" ? navigator.language : "";
  const conversationText = messages
    .map((message) => message?.content || "")
    .join(" ")
    .toLowerCase();

  if (browserLanguage.toLowerCase().startsWith("fr")) return "fr";
  if (
    /\b(bonjour|devis|projet|site|application|besoin|reservation|réservation)\b/.test(
      conversationText
    )
  )
    return "fr";
  return "fr";
}

function buildDevisPayload(messages) {
  const normalizedMessages = messages
    .map(normalizeMessage)
    .filter(Boolean)
    .filter((message) => message.role === "user");

  return {
    messages: normalizedMessages,
    client_name: "",
    client_email: "",
    client_phone: "",
    preferred_language: detectPreferredLanguage(normalizedMessages),
  };
}

function formatCurrency(value, currency = "MAD") {
  if (value === null || value === undefined || value === "") return "—";
  const numericValue = Number(value);
  if (Number.isNaN(numericValue)) return value;
  try {
    return new Intl.NumberFormat("fr-MA", {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(numericValue);
  } catch {
    return `${numericValue} ${currency}`;
  }
}

function safeArray(value) {
  return Array.isArray(value) ? value : [];
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const [messages, setMessages] = useState([
    {
      id: crypto.randomUUID(),
      role: "assistant",
      content: DEFAULT_ASSISTANT_MESSAGE,
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isGeneratingDevis, setIsGeneratingDevis] = useState(false);
  const [devisResult, setDevisResult] = useState(null);
  const [devisError, setDevisError] = useState("");
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  const userMessages = messages.filter(
    (message) => message.role === "user" && message.content?.trim()
  );
  const generatedEstimate = devisResult?.estimate || {};
  const generatedQuote = devisResult?.quote || {};
  const generatedLineItems = safeArray(generatedQuote?.line_items);
  const generatedIncludedGroups = safeArray(generatedQuote?.included_groups);
  const clarificationQuestions = safeArray(devisResult?.clarification_questions);
  const costDrivers = safeArray(generatedEstimate?.cost_drivers);
  const pdfUrl = devisResult?.pdf_url ? resolveApiUrl(devisResult.pdf_url) : "";

  useEffect(() => {
    let existingSessionId = localStorage.getItem("smartdex_chat_session_id");
    if (!existingSessionId) {
      existingSessionId = crypto.randomUUID();
      localStorage.setItem("smartdex_chat_session_id", existingSessionId);
    }
    setSessionId(existingSessionId);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    const openChatbot = () => {
      setIsOpen(true);
      window.setTimeout(() => textareaRef.current?.focus(), 80);
    };
    window.addEventListener("smartdex:open-chat", openChatbot);
    return () => window.removeEventListener("smartdex:open-chat", openChatbot);
  }, []);

  const autoResizeTextarea = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    textarea.style.height = "auto";
    textarea.style.height = `${Math.min(textarea.scrollHeight, 140)}px`;
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    requestAnimationFrame(autoResizeTextarea);
  };

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading || !sessionId) return;

    const userMessage = { id: crypto.randomUUID(), role: "user", content: trimmed };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);

    if (textareaRef.current) textareaRef.current.style.height = "auto";

    try {
      const response = await fetch(`${API_BASE_URL}/api/chatbot/chat/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          session_id: sessionId,
          message: trimmed,
          history: nextMessages.map((msg) => ({ role: msg.role, content: msg.content })),
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data?.detail || data?.message || "Erreur chatbot.");

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: data.answer || data.reply || "Aucune réponse reçue.",
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            "Je rencontre un problème technique. Vous pouvez nous contacter via le formulaire ou demander un devis.",
        },
      ]);
      console.error("Chatbot error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendMessage();
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      await sendMessage();
    }
  };

  const resetConversation = () => {
    const newSessionId = crypto.randomUUID();
    localStorage.setItem("smartdex_chat_session_id", newSessionId);
    setSessionId(newSessionId);
    setMessages([
      { id: crypto.randomUUID(), role: "assistant", content: DEFAULT_ASSISTANT_MESSAGE },
    ]);
    setInput("");
    setDevisResult(null);
    setDevisError("");
    setIsGeneratingDevis(false);
  };

  const handleGenerateDevis = async () => {
    if (isGeneratingDevis || isLoading) return;
    const payload = buildDevisPayload(messages);

    if (!payload.messages.length) {
      setDevisError("Ajoutez quelques détails sur votre projet avant de générer un devis.");
      setDevisResult(null);
      return;
    }

    setIsGeneratingDevis(true);
    setDevisError("");

    try {
      const response = await generateDevisFromChat(payload);
      const normalizedResponse =
        response?.status || response?.estimate || response?.quote || response?.clarification_questions
          ? {
              ...response,
              status:
                response?.status ||
                (response?.clarification_questions?.length ? "needs_clarification" : "processed"),
            }
          : { status: "failed" };

      setDevisResult(normalizedResponse);
    } catch (error) {
      console.error("Generate devis error:", error);
      setDevisResult({ status: "failed" });
      setDevisError("Impossible de générer le devis. Veuillez réessayer.");
    } finally {
      setIsGeneratingDevis(false);
    }
  };

  return (
    <>
      {/* Tabler Icons CDN */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.10.0/dist/tabler-icons.min.css"
      />

      {!isOpen && (
        <button
          className={styles.floatingButton}
          onClick={() => setIsOpen(true)}
          aria-label="Ouvrir le chatbot SmartDex"
        >
          <i className="ti ti-message-chatbot" aria-hidden="true" />
          <span className={styles.floatingButtonText}>SmartDex AI</span>
        </button>
      )}

      {isOpen && (
        <div className={styles.chatWidget}>
          {/* ── Header ── */}
          <div className={styles.chatHeader}>
            <div className={styles.chatHeaderLeft}>
              <div className={styles.chatAvatar}>
                <i className="ti ti-robot" aria-hidden="true" />
              </div>
              <div>
                <h3 className={styles.chatTitle}>SmartDex Assistant</h3>
                <p className={styles.chatSubtitle}>
                  Solutions web · SaaS · Automation · IA
                </p>
              </div>
            </div>

            <div className={styles.headerActions}>
              <button
                type="button"
                onClick={resetConversation}
                className={styles.headerButton}
                aria-label="Réinitialiser la conversation"
                title="Réinitialiser"
              >
                <i className="ti ti-refresh" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className={styles.headerButton}
                aria-label="Fermer le chatbot"
                title="Fermer"
              >
                <i className="ti ti-x" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* ── Messages ── */}
          <div className={styles.messagesContainer}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`${styles.messageRow} ${
                  message.role === "user" ? styles.userMessageRow : styles.assistantMessageRow
                }`}
              >
                <div
                  className={`${styles.messageBubble} ${
                    message.role === "user" ? styles.userBubble : styles.assistantBubble
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className={`${styles.messageRow} ${styles.assistantMessageRow}`}>
                <div className={`${styles.messageBubble} ${styles.assistantBubble}`}>
                  <div className={styles.typingIndicator}>
                    <span /><span /><span />
                  </div>
                </div>
              </div>
            )}

            {(isGeneratingDevis || devisError || devisResult) && (
              <div className={`${styles.messageRow} ${styles.assistantMessageRow}`}>
                <div className={`${styles.messageBubble} ${styles.assistantBubble} ${styles.devisBubble}`}>
                  {isGeneratingDevis && (
                    <div className={styles.devisState}>
                      <strong>Génération du devis...</strong>
                    </div>
                  )}

                  {!isGeneratingDevis && devisError && (
                    <div className={styles.devisStateError}>{devisError}</div>
                  )}

                  {!isGeneratingDevis && devisResult?.status === "needs_clarification" && (
                    <div className={styles.devisResultCard}>
                      <strong>Il nous manque quelques informations pour générer un devis précis.</strong>
                      {clarificationQuestions.length > 0 && (
                        <ul className={styles.devisList}>
                          {clarificationQuestions.map((question, index) => (
                            <li key={`${question}-${index}`}>{question}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}

                  {!isGeneratingDevis && devisResult?.status === "processed" && (
                    <div className={styles.devisResultCard}>
                      <strong>Devis généré</strong>

                      <div className={styles.devisSection}>
                        <span className={styles.devisLabel}>Estimation</span>
                        <p className={styles.devisValue}>
                          {formatCurrency(generatedEstimate?.range_min, generatedEstimate?.currency || "MAD")}
                          {" — "}
                          {formatCurrency(generatedEstimate?.range_max, generatedEstimate?.currency || "MAD")}
                        </p>
                      </div>

                      {costDrivers.length > 0 && (
                        <div className={styles.devisSection}>
                          <span className={styles.devisLabel}>Facteurs de coût</span>
                          <ul className={styles.devisList}>
                            {costDrivers.map((driver, index) => (
                              <li key={`${driver?.label || driver}-${index}`}>
                                {typeof driver === "string"
                                  ? driver
                                  : driver?.label || driver?.name || driver?.description || "Facteur"}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {generatedIncludedGroups.length > 0 && (
                        <div className={styles.devisSection}>
                          <span className={styles.devisLabel}>Lots inclus</span>
                          <ul className={styles.devisList}>
                            {generatedIncludedGroups.map((group, index) => (
                              <li key={`group-${group?.key || group?.label || index}`}>
                                {group?.label || group?.key || "Lot"}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {generatedLineItems.length > 0 && (
                        <div className={styles.devisSection}>
                          <span className={styles.devisLabel}>Détail du devis</span>
                          <ul className={styles.devisList}>
                            {generatedLineItems.map((item, index) => (
                              <li key={`line-item-${item?.label || item?.name || index}`}>
                                <span>{item?.label || item?.name || "Poste"}</span>
                                {(item?.price_min || item?.price_max || item?.amount) && (
                                  <span className={styles.inlinePrice}>
                                    {item?.amount
                                      ? formatCurrency(item.amount, generatedEstimate?.currency || "MAD")
                                      : `${formatCurrency(item?.price_min, generatedEstimate?.currency || "MAD")} — ${formatCurrency(item?.price_max, generatedEstimate?.currency || "MAD")}`}
                                  </span>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {generatedQuote?.recommendation && (
                        <div className={styles.devisSection}>
                          <span className={styles.devisLabel}>Recommandation</span>
                          <p className={styles.devisValue}>{generatedQuote.recommendation}</p>
                        </div>
                      )}

                      {pdfUrl && (
                        <a href={pdfUrl} target="_blank" rel="noreferrer" className={styles.devisPdfLink}>
                          <i className="ti ti-file-download" aria-hidden="true" />
                          Télécharger le devis PDF
                        </a>
                      )}
                    </div>
                  )}

                  {!isGeneratingDevis && devisResult?.status === "failed" && (
                    <div className={styles.devisStateError}>
                      Impossible de générer le devis. Veuillez réessayer.
                    </div>
                  )}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* ── Input ── */}
          <form onSubmit={handleSubmit} className={styles.inputArea}>
            <textarea
              ref={textareaRef}
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Décrivez votre besoin..."
              className={styles.textarea}
              rows={1}
              maxLength={2000}
            />
            <button
              type="submit"
              className={styles.sendButton}
              disabled={isLoading || !input.trim()}
              aria-label="Envoyer"
            >
              <i className="ti ti-send-2" aria-hidden="true" />
            </button>
          </form>

          {/* ── Footer ── */}
          <div className={styles.footer}>
            <button
              type="button"
              className={styles.quickAction}
              onClick={() => setInput("Je veux un site web pour mon activité")}
            >
              <i className="ti ti-world" aria-hidden="true" /> Site web
            </button>
            <button
              type="button"
              className={styles.quickAction}
              onClick={() => setInput("J'ai besoin d'une solution SaaS")}
            >
              <i className="ti ti-cloud" aria-hidden="true" /> SaaS
            </button>
            <button
              type="button"
              className={styles.quickAction}
              onClick={() => setInput("Je veux automatiser mon activité")}
            >
              <i className="ti ti-settings-automation" aria-hidden="true" /> Automation
            </button>
            <button
              type="button"
              className={`${styles.quickAction} ${styles.generateDevisButton}`}
              onClick={handleGenerateDevis}
              disabled={isGeneratingDevis || isLoading || userMessages.length === 0}
            >
              <i className="ti ti-calculator" aria-hidden="true" />
              {isGeneratingDevis ? "Génération..." : "Obtenir une estimation"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
