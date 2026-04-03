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
  RightsGrid,
} from "@/components/legal/LegalBlocks";
import { companyLegal } from "@/lib/legal/company";

export const metadata: Metadata = {
  title: "Política de Privacidade — Renthus",
  description:
    "Política de Privacidade e LGPD. Renthus Tecnologia da Informação Ltda.",
};

const rights = [
  {
    title: "Acesso",
    description: "Solicitar confirmação e acesso aos seus dados",
  },
  {
    title: "Correção",
    description: "Atualizar dados incompletos ou desatualizados",
  },
  {
    title: "Exclusão",
    description: "Solicitar remoção de dados desnecessários",
  },
  {
    title: "Portabilidade",
    description: "Exportar seus dados em formato estruturado",
  },
  {
    title: "Revogação",
    description: "Retirar consentimento dado a qualquer momento",
  },
  {
    title: "Oposição",
    description: "Opor-se ao tratamento por legítimo interesse",
  },
] as const;

export default function PrivacidadePage() {
  const meta = `${companyLegal.documentoVersao} · ${companyLegal.razaoSocial} · CNPJ ${companyLegal.cnpj}`;

  return (
    <LegalDocBody>
      <LegalHeader
        label="Documento legal"
        title="Política de Privacidade"
        meta={meta}
      />

      <LegalHighlight>
        <p>
          A Renthus está comprometida com a proteção dos seus dados pessoais em
          conformidade com a{" "}
          <strong>Lei Geral de Proteção de Dados (LGPD — Lei 13.709/2020)</strong>{" "}
          e o Marco Civil da Internet (Lei 12.965/2014).
        </p>
      </LegalHighlight>

      <LegalH2>1. Quem somos</LegalH2>
      <LegalP>
        A <strong className="font-medium text-gray-900">{companyLegal.razaoSocial}</strong>, CNPJ {companyLegal.cnpj}, com sede na{" "}
        {companyLegal.enderecoCompleto}, é a controladora dos dados pessoais
        tratados em nossas plataformas.
      </LegalP>

      <LegalH2>2. Dados que coletamos</LegalH2>
      <LegalH3>2.1 Dados fornecidos pelo usuário</LegalH3>
      <LegalUl>
        <li>Nome completo e CPF (para prestadores de serviço);</li>
        <li>Endereço de e-mail e número de telefone/WhatsApp;</li>
        <li>Endereço para entrega ou prestação de serviços;</li>
        <li>
          Dados de pagamento (processados pelo gateway parceiro — não armazenamos
          dados de cartão);
        </li>
        <li>Fotos e descrições de serviços (no app Renthus Serviços).</li>
      </LegalUl>

      <LegalH3>2.2 Dados coletados automaticamente</LegalH3>
      <LegalUl>
        <li>Endereço IP e informações de dispositivo;</li>
        <li>Logs de acesso e uso das plataformas;</li>
        <li>Localização geográfica aproximada (quando autorizada pelo usuário);</li>
        <li>Histórico de pedidos e transações.</li>
      </LegalUl>

      <LegalH2>3. Como utilizamos seus dados</LegalH2>
      <LegalUl>
        <li>Prestação dos serviços contratados e gestão de pedidos;</li>
        <li>Comunicação sobre pedidos, atualizações e suporte;</li>
        <li>Processamento de pagamentos com nossos parceiros;</li>
        <li>Melhoria contínua das plataformas com base no uso;</li>
        <li>Cumprimento de obrigações legais e regulatórias;</li>
        <li>Prevenção de fraudes e garantia da segurança da plataforma.</li>
      </LegalUl>

      <LegalH2>4. Base legal do tratamento</LegalH2>
      <LegalP>
        Tratamos seus dados com base nas seguintes hipóteses previstas na LGPD:
      </LegalP>
      <LegalUl>
        <li>
          <strong>Execução de contrato</strong> — para fornecer os serviços
          contratados;
        </li>
        <li>
          <strong>Legítimo interesse</strong> — para melhorias de produto e
          segurança;
        </li>
        <li>
          <strong>Consentimento</strong> — para comunicações de marketing
          (revogável a qualquer momento);
        </li>
        <li>
          <strong>Cumprimento de obrigação legal</strong> — quando exigido por
          lei.
        </li>
      </LegalUl>

      <LegalH2>5. Compartilhamento de dados</LegalH2>
      <LegalP>Seus dados podem ser compartilhados com:</LegalP>
      <LegalUl>
        <li>
          <strong>Gateways de pagamento</strong> — para processamento de
          transações financeiras;
        </li>
        <li>
          <strong>Meta (WhatsApp Business API)</strong> — para envio de mensagens
          no chatbot;
        </li>
        <li>
          <strong>Supabase</strong> — infraestrutura de banco de dados em nuvem;
        </li>
        <li>
          <strong>Autoridades públicas</strong> — quando exigido por lei ou ordem
          judicial.
        </li>
      </LegalUl>
      <LegalP>
        Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros
        para fins de marketing sem seu consentimento explícito.
      </LegalP>

      <LegalH2>6. Segurança dos dados</LegalH2>
      <LegalP>Adotamos medidas técnicas e organizacionais para proteger seus dados:</LegalP>
      <LegalUl>
        <li>Criptografia em trânsito (TLS/HTTPS) e em repouso;</li>
        <li>Controle de acesso baseado em funções (RLS no banco de dados);</li>
        <li>Autenticação segura via Supabase Auth;</li>
        <li>Backups automáticos diários com retenção de 30 dias;</li>
        <li>Monitoramento de acessos suspeitos.</li>
      </LegalUl>

      <LegalH2>7. Retenção de dados</LegalH2>
      <LegalP>
        Mantemos seus dados pelo tempo necessário para a prestação dos serviços
        e cumprimento de obrigações legais. Dados de transações financeiras são
        retidos por 5 anos conforme exigência fiscal. Após o encerramento da
        conta, os dados são anonimizados ou excluídos em até 90 dias.
      </LegalP>

      <LegalH2>8. Seus direitos como titular (LGPD)</LegalH2>
      <RightsGrid items={rights} />
      <LegalP>
        Para exercer qualquer direito, entre em contato pelo e-mail{" "}
        <strong className="font-medium text-gray-900">
          {companyLegal.emailPrivacidade}
        </strong>
        . Responderemos em até 15 dias úteis.
      </LegalP>

      <LegalH2>9. Cookies e tecnologias similares</LegalH2>
      <LegalP>
        Nosso site utiliza cookies essenciais para funcionamento e cookies
        analíticos para entender o uso. Você pode gerenciar as preferências de
        cookies no seu navegador. O app mobile utiliza tokens de sessão
        armazenados de forma segura no dispositivo.
      </LegalP>

      <LegalH2>10. Transferência internacional</LegalH2>
      <LegalP>
        Parceiros como Supabase e Google (Firebase) podem processar dados em
        servidores fora do Brasil. Garantimos que tais transferências seguem
        padrões de proteção equivalentes aos exigidos pela LGPD.
      </LegalP>

      <LegalH2>11. Menores de idade</LegalH2>
      <LegalP>
        Nossas plataformas não são destinadas a menores de 18 anos. Não coletamos
        dados de menores intencionalmente. Se identificarmos tal situação, a
        conta será suspensa e os dados excluídos.
      </LegalP>

      <LegalH2>12. Encarregado de Dados (DPO)</LegalH2>
      <LegalP>
        O encarregado pelo tratamento de dados pessoais na Renthus pode ser
        contactado pelo e-mail:{" "}
        <strong className="font-medium text-gray-900">
          {companyLegal.emailPrivacidade}
        </strong>
      </LegalP>

      <LegalH2>13. Alterações nesta Política</LegalH2>
      <LegalP>
        Esta Política pode ser atualizada periodicamente. Alterações relevantes
        serão comunicadas com antecedência de 15 dias. O uso continuado após a
        comunicação implica concordância com a versão atualizada.
      </LegalP>

      <LegalH2>14. Contato</LegalH2>
      <LegalUl>
        <li>
          <strong>E-mail privacidade:</strong> {companyLegal.emailPrivacidade}
        </li>
        <li>
          <strong>E-mail geral:</strong> {companyLegal.emailContato}
        </li>
        <li>
          <strong>WhatsApp:</strong> {companyLegal.telefoneExibicao}
        </li>
        <li>
          <strong>Endereço:</strong> {companyLegal.enderecoResumido}
        </li>
        <li>
          <strong>ANPD:</strong>{" "}
          <a
            href={companyLegal.anpdUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-renthus-orange hover:underline"
          >
            www.gov.br/anpd
          </a>
        </li>
      </LegalUl>

      <LegalCrossLinks>
        <p>
          © {new Date().getFullYear()} {companyLegal.razaoSocial} · CNPJ{" "}
          {companyLegal.cnpj} ·{" "}
          <Link href="/termos" className="text-renthus-orange hover:underline">
            Termos de Uso
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
