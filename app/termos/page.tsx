import type { Metadata } from "next";
import Link from "next/link";
import {
  LegalCrossLinks,
  LegalDocBody,
  LegalH2,
  LegalH3,
  LegalHeader,
  LegalHighlight,
  LegalP,
  LegalUl,
} from "@/components/legal/LegalBlocks";
import { companyLegal } from "@/lib/legal/company";

export const metadata: Metadata = {
  title: "Termos de Uso — Renthus",
  description:
    "Termos de Uso das plataformas Renthus. Renthus Tecnologia da Informação Ltda.",
};

export default function TermosPage() {
  const meta = `${companyLegal.documentoVersao} · ${companyLegal.razaoSocial} · CNPJ ${companyLegal.cnpj}`;

  return (
    <LegalDocBody>
      <LegalHeader label="Documento legal" title="Termos de Uso" meta={meta} />

      <LegalHighlight>
        <p>
          Ao utilizar qualquer produto ou serviço da Renthus, você declara ter
          lido, compreendido e concordado integralmente com estes Termos de Uso.
          O aceite eletrônico tem validade jurídica equivalente a uma
          assinatura, nos termos do Código Civil Brasileiro e do Marco Civil da
          Internet (Lei 12.965/2014).
        </p>
      </LegalHighlight>

      <LegalH2>1. Aceitação dos Termos</LegalH2>
      <LegalP>
        Ao criar uma conta ou utilizar qualquer produto da plataforma Renthus —
        incluindo o app Renthus Serviços e o sistema de chatbot para disk bebidas
        — você (&quot;Usuário&quot;) declara ter lido e concordado com estes
        Termos de Uso.
      </LegalP>
      <LegalP>
        Caso não concorde com qualquer disposição aqui presente, não utilize
        nossos produtos ou serviços.
      </LegalP>

      <LegalH2>2. Sobre a Renthus</LegalH2>
      <LegalP>
        A <strong className="font-medium text-gray-900">{companyLegal.razaoSocial}</strong>, inscrita no CNPJ sob o nº{" "}
        {companyLegal.cnpj}, com sede na {companyLegal.enderecoCompleto}, é uma
        empresa de tecnologia que desenvolve e opera plataformas digitais para
        negócios locais brasileiros.
      </LegalP>
      <LegalP>
        A Renthus atua como intermediária tecnológica. No caso do app Renthus
        Serviços, não é empregadora nem fornecedora direta dos serviços
        contratados entre clientes e prestadores.
      </LegalP>

      <LegalH2>3. Cadastro e Conta</LegalH2>
      <LegalP>Para utilizar nossas plataformas, o usuário deve:</LegalP>
      <LegalUl>
        <li>Ter pelo menos 18 anos de idade ou ser emancipado legalmente;</li>
        <li>Fornecer informações verdadeiras, completas e atualizadas;</li>
        <li>Manter a confidencialidade de suas credenciais de acesso;</li>
        <li>
          Notificar imediatamente a Renthus em caso de uso não autorizado da
          conta.
        </li>
      </LegalUl>
      <LegalP>
        A Renthus reserva-se o direito de suspender ou excluir contas com
        informações falsas ou que violem estes termos, sem aviso prévio.
      </LegalP>

      <LegalH2>4. Produtos e Serviços</LegalH2>
      <LegalH3>4.1 Renthus Serviços</LegalH3>
      <LegalP>
        Marketplace que conecta clientes a prestadores de serviços locais. A
        Renthus facilita a conexão mas não garante a qualidade, prazo ou
        resultado dos serviços contratados entre as partes.
      </LegalP>
      <LegalH3>4.2 Chatbot Disk Bebidas</LegalH3>
      <LegalP>
        Sistema de automação de pedidos via WhatsApp para estabelecimentos do
        segmento de bebidas. A Renthus fornece a tecnologia; o estabelecimento é
        responsável pelo cumprimento dos pedidos, qualidade dos produtos e
        entrega.
      </LegalP>

      <LegalH2>5. Pagamentos</LegalH2>
      <LegalP>
        Os pagamentos realizados nas plataformas Renthus são processados por
        gateways de pagamento parceiros. Ao realizar um pagamento, o usuário
        concorda também com os termos do gateway utilizado.
      </LegalP>
      <LegalP>
        A Renthus não armazena dados de cartão de crédito. Todas as transações
        são criptografadas e processadas pelos parceiros de pagamento.
      </LegalP>

      <LegalH2>6. Propriedade Intelectual</LegalH2>
      <LegalP>
        Todo o conteúdo disponível nas plataformas Renthus — incluindo código,
        design, textos, logotipos e interfaces — é propriedade exclusiva da{" "}
        {companyLegal.razaoSocial} e está protegido pela legislação brasileira de
        propriedade intelectual.
      </LegalP>
      <LegalP>
        É vedada a reprodução, distribuição ou modificação de qualquer elemento
        sem autorização prévia e expressa da Renthus.
      </LegalP>

      <LegalH2>7. Cancelamento e Reembolso</LegalH2>
      <LegalP>
        As políticas de cancelamento e reembolso variam conforme o produto
        contratado e são comunicadas no momento da contratação. Em caso de
        dúvidas, entre em contato pelo WhatsApp{" "}
        <strong className="font-medium text-gray-900">
          {companyLegal.telefoneExibicao}
        </strong>{" "}
        ou pelo e-mail{" "}
        <strong className="font-medium text-gray-900">
          {companyLegal.emailContato}
        </strong>
        .
      </LegalP>

      <LegalH2>8. Limitação de Responsabilidade</LegalH2>
      <LegalP>A Renthus não se responsabiliza por:</LegalP>
      <LegalUl>
        <li>
          Danos causados por falhas de terceiros (provedores de internet,
          gateways de pagamento, Meta/WhatsApp);
        </li>
        <li>
          Perda de dados por falha de hardware ou software fora do controle da
          Renthus;
        </li>
        <li>Atos praticados por usuários da plataforma contra outros usuários;</li>
        <li>
          Lucros cessantes decorrentes de indisponibilidade temporária dos
          sistemas.
        </li>
      </LegalUl>

      <LegalH2>9. Privacidade e LGPD</LegalH2>
      <LegalP>
        O tratamento de dados pessoais pela Renthus é regido pela nossa{" "}
        <Link href="/privacidade">Política de Privacidade</Link>, em conformidade
        com a Lei Geral de Proteção de Dados (LGPD — Lei 13.709/2020).
      </LegalP>

      <LegalH2>10. Alterações nos Termos</LegalH2>
      <LegalP>
        A Renthus pode atualizar estes Termos a qualquer momento. Alterações
        relevantes serão comunicadas com antecedência mínima de 15 dias por
        e-mail ou notificação no app. O uso continuado após a comunicação
        implica aceitação dos novos termos.
      </LegalP>

      <LegalH2>11. Foro e Legislação</LegalH2>
      <LegalP>
        Estes Termos são regidos pela legislação brasileira. Fica eleito o foro
        da{" "}
        <strong className="font-medium text-gray-900">
          Comarca de Sorriso/MT
        </strong>{" "}
        para dirimir quaisquer controvérsias, com renúncia expressa a qualquer
        outro, por mais privilegiado que seja.
      </LegalP>

      <LegalH2>12. Contato</LegalH2>
      <LegalP>Para dúvidas sobre estes Termos de Uso:</LegalP>
      <LegalUl>
        <li>
          <strong>E-mail:</strong> {companyLegal.emailContato}
        </li>
        <li>
          <strong>WhatsApp:</strong> {companyLegal.telefoneExibicao}
        </li>
        <li>
          <strong>Endereço:</strong> {companyLegal.enderecoResumido}
        </li>
      </LegalUl>

      <LegalCrossLinks>
        <p>
          © {new Date().getFullYear()} {companyLegal.razaoSocial} · CNPJ{" "}
          {companyLegal.cnpj} ·{" "}
          <Link href="/privacidade" className="text-renthus-orange hover:underline">
            Política de Privacidade
          </Link>{" "}
          ·{" "}
          <Link
            href="/exclusao-de-dados"
            className="text-renthus-orange hover:underline"
          >
            Exclusão de dados
          </Link>
        </p>
      </LegalCrossLinks>
    </LegalDocBody>
  );
}
