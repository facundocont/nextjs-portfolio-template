export function dateToString(date: Date): string {
  const year = date.getUTCFullYear();
  const monthIndex = date.getUTCMonth();
  const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];
  const month = meses[monthIndex];
  return `${month}/${year}`;
}
