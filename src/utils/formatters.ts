// Função provisória para formatar datas no padrão (dd/mm/yyyy)
export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return "00/00/0000";
  }
  return date.toLocaleDateString("pt-BR");
}

// Função provisória para formatar números de telefone no padrão +55 (XX) XXXXX-XXXX
export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, "");

  const countryCode = "+55";
  const ddd = `(${cleaned.slice(0, 2)})`;
  const firstPart = cleaned.slice(2, 7);
  const secondPart = cleaned.slice(7, 11);

  return `${countryCode} ${ddd} ${firstPart}-${secondPart}`;
}
