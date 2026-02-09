"use client";

import React from "react";
import { showToast } from "nextjs-toast-notify";
import { contactUseAction } from "@/app/actions";
import { getCaptchaToken } from "@/utils/captcha";
import { ContactFormData } from "@/config/interfaces";

function ContactForm() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});

  // Función para limpiar error específico
  const clearError = (fieldName: string) => {
    if (errors[fieldName]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[fieldName];
        return newErrors;
      });
    }
  };

  // Manejadores de cambio para cada campo
  const handleNameChange = () => {
    clearError("name");
  };

  const handleEmailChange = () => {
    clearError("email");
  };

  const handleMessageChange = () => {
    clearError("message");
  };

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    setIsLoading(true);
    setErrors({});

    const form = event.currentTarget;
    const nameInput = form.elements.namedItem("name") as HTMLInputElement;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    const messageInput = form.elements.namedItem(
      "message",
    ) as HTMLTextAreaElement;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    const data: ContactFormData = {
      name,
      email,
      message,
    };

    // Validaciones mejoradas
    const newErrors: { [key: string]: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) newErrors.name = "El nombre es requerido";
    else if (name.length > 50)
      newErrors.name = "El nombre no puede exceder 50 caracteres";

    if (!email) newErrors.email = "El email es requerido";
    else if (email.length > 100)
      newErrors.email = "El email no puede exceder 100 caracteres";
    else if (!emailRegex.test(email))
      newErrors.email = "Formato de email inválido";

    if (!message) newErrors.message = "El mensaje es requerido";
    else if (message.length > 500)
      newErrors.message = "El mensaje no puede exceder 500 caracteres";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    try {
      const token = await getCaptchaToken();
      const res = await contactUseAction(token, data);

      if (res.success) {
        // Limpiar campos
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";

        handleShowToastSuccess();
      } else {
        handleShowToastFailed();
      }
    } catch (error) {
      console.error("Error en el envío:", error);
      handleShowToastFailed();
    } finally {
      setIsLoading(false);
    }
  }

  const handleShowToastSuccess = () => {
    showToast.success("¡Mensaje enviado correctamente!", {
      duration: 4000,
      progress: true,
      position: "bottom-right",
      transition: "popUp",
      icon: "",
      sound: false,
    });
  };

  const handleShowToastFailed = () => {
    showToast.error("Error al enviar el mensaje. Inténtalo nuevamente.", {
      duration: 4000,
      progress: true,
      position: "bottom-right",
      transition: "popUp",
      icon: "",
      sound: false,
    });
  };

  return (
    <form
      className="mx-auto mt-8 max-w-xl flex flex-col items-center justify-center gap-4 w-full"
      onSubmit={handleSubmit}
      aria-label="Formulario de contacto"
      noValidate
    >
      <fieldset className="fieldset w-full">
        <legend className="fieldset-legend">Nombre y apellido</legend>
        <input
          type="text"
          name="name"
          id="name"
          className={`input w-full ${errors.name ? "input-error" : ""}`}
          placeholder="Nombre y apellido"
          autoComplete="name"
          required
          maxLength={50}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "nombre-error" : undefined}
          onChange={handleNameChange}
        />
        {errors.name && (
          <div
            id="nombre-error"
            className="text-error text-sm mt-1"
            role="alert"
          >
            {errors.name}
          </div>
        )}
      </fieldset>

      <fieldset className="fieldset w-full">
        <legend className="fieldset-legend">Email</legend>
        <input
          type="email"
          name="email"
          id="email"
          className={`input w-full ${errors.email ? "input-error" : ""}`}
          placeholder="mail@ejemplo.com"
          autoComplete="email"
          required
          maxLength={100}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          onChange={handleEmailChange}
        />
        {errors.email && (
          <div
            id="email-error"
            className="text-error text-sm mt-1"
            role="alert"
          >
            {errors.email}
          </div>
        )}
      </fieldset>

      <fieldset className="fieldset w-full">
        <legend className="fieldset-legend">Mensaje</legend>
        <textarea
          name="message"
          id="message"
          className={`textarea h-24 w-full ${
            errors.message ? "textarea-error" : ""
          }`}
          placeholder="Tu mensaje"
          required
          maxLength={500}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "mensaje-error" : undefined}
          onChange={handleMessageChange}
        />
        {errors.message && (
          <div
            id="mensaje-error"
            className="text-error text-sm mt-1"
            role="alert"
          >
            {errors.message}
          </div>
        )}
      </fieldset>

      <button
        type="submit"
        className="btn btn-secondary mt-4 hover:scale-105 transition-transform flex items-center gap-2 duration-200"
        disabled={isLoading}
        aria-label={isLoading ? "Enviando mensaje..." : "Enviar mensaje"}
      >
        {isLoading && (
          <span className="loading loading-spinner" aria-hidden="true"></span>
        )}
        {isLoading ? "Enviando mensaje..." : "Enviar mensaje"}
      </button>
    </form>
  );
}

export default ContactForm;
