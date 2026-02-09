import Link from "next/link";
import { syne } from "@/fonts/fonts";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full overflow-hidden flex flex-col justify-center items-center text-center p-4 gap-4">
      <h2 className={`text-2xl font-bold ${syne.className}`}>
        Página no encontrada
      </h2>
      <p className="text-lg">Parece que la página que buscas no existe.</p>
      <Link href="/" className="btn btn-primary">
        Volver al inicio
      </Link>
    </div>
  );
}
