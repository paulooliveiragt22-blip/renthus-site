import { companyLegal } from "./company";

/**
 * Textos do fluxo de exclusão de dados (LGPD / Meta).
 * Dados cadastrais alinhados a `companyLegal`.
 */
export const exclusaoDadosContent = {
  empresaLegal: companyLegal.razaoSocial.replace(/\.$/, ""),
  cnpj: companyLegal.cnpj,
  telefoneExibicao: companyLegal.telefoneExibicao,
  whatsappNumero: companyLegal.whatsappNumero,
  emailPrivacidade: companyLegal.emailPrivacidade,
  whatsappMensagemExclusao:
    "Olá! Quero solicitar a exclusão dos meus dados da plataforma Renthus.",
  horarioAtendimento:
    "Atendemos de segunda a sexta, das 8h às 18h (horário de Brasília)",
  emailPrazoResposta: "resposta em até 2 dias úteis",
  anpdUrl: companyLegal.anpdUrl,
} as const;

export function getWhatsAppExclusaoUrl() {
  const q = encodeURIComponent(exclusaoDadosContent.whatsappMensagemExclusao);
  return `https://wa.me/${exclusaoDadosContent.whatsappNumero}?text=${q}`;
}
