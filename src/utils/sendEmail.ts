import { configWeb } from "@/config/configWeb.config";
import { ContactFormData } from "@/config/interfaces";

const enum ApiEndpoints {
  EmailAdmin = "/api/sendFormContact",
}

interface Props {
  data: ContactFormData;
}

export async function sendEmailAdmin(props: Props): Promise<string> {
  const isServer = typeof window === "undefined";
  const endpoint = isServer
    ? `${configWeb.urlWeb}/api/sendFormContact`
    : ApiEndpoints.EmailAdmin;

  return await dispatchNotificacion(endpoint, props.data);
}

export async function dispatchNotificacion<T extends object>(
  endpoint: string,
  data: T,
): Promise<string> {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const contentType = response.headers.get("content-type");
    if (contentType?.includes("application/json")) {
      const responseJson = await response.json();
      console.log(responseJson.message);
      return responseJson.message;
    }

    throw new Error("La respuesta no es JSON");
  } catch (err) {
    const mensaje =
      err instanceof Error ? err.message : "An unknown error occurred";
    console.log(mensaje);
    throw err;
  }
}
