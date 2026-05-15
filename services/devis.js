const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000";

function resolveApiUrl(path = "") {
  if (!path) return "";

  try {
    return new URL(path, API_BASE_URL).toString();
  } catch {
    return path;
  }
}

async function parseJsonResponse(response) {
  const contentType = response.headers.get("content-type") || "";

  if (!contentType.includes("application/json")) {
    return null;
  }

  return response.json();
}

export async function generateDevisFromChat(payload) {
  const response = await fetch(resolveApiUrl("/api/devis/generate-from-chat/"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await parseJsonResponse(response);

  if (!response.ok) {
    throw new Error(
      data?.detail ||
        data?.message ||
        "Impossible de generer le devis pour le moment."
    );
  }

  return data;
}

export { API_BASE_URL, resolveApiUrl };
