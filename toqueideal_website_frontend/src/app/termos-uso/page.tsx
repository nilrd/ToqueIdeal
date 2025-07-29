
import React from 'react';

const TermosUso: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container-luxury max-w-4xl mx-auto px-4">
        <h1 className="text-4xl lg:text-5xl font-display font-bold text-accent-950 mb-8 text-center">
          Termos de <span className="text-gradient-gold">Uso</span>
        </h1>

        <section className="mb-10">
          <h2 className="text-2xl font-display font-semibold text-accent-950 mb-4">1. Aceitação dos Termos</h2>
          <p className="text-lg text-secondary-700 leading-relaxed mb-4">
            Bem-vindo ao website da Toque Ideal. Ao acessar ou utilizar nosso website, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, você não deve utilizar nosso website.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-display font-semibold text-accent-950 mb-4">2. Uso do Website</h2>
          <p className="text-lg text-secondary-700 leading-relaxed mb-4">
            O website da Toque Ideal é fornecido para seu uso pessoal e não comercial. Você concorda em não usar o website para qualquer finalidade ilegal ou proibida por estes Termos de Uso.
          </p>
          <ul className="list-disc list-inside text-lg text-secondary-700 leading-relaxed mb-4">
            <li className="mb-2">Você não deve usar o website de qualquer forma que possa danificar, desabilitar, sobrecarregar ou prejudicar o website ou interferir no uso e aproveitamento de qualquer outra parte.</li>
            <li className="mb-2">Você não deve obter ou tentar obter quaisquer materiais ou informações por quaisquer meios não intencionalmente disponibilizados ou fornecidos através do website.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-display font-semibold text-accent-950 mb-4">3. Propriedade Intelectual</h2>
          <p className="text-lg text-secondary-700 leading-relaxed mb-4">
            Todo o conteúdo presente no website, incluindo textos, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais, compilações de dados e software, é propriedade da Toque Ideal ou de seus fornecedores de conteúdo e é protegido pelas leis de direitos autorais e outras leis de propriedade intelectual.
          </p>
          <p className="text-lg text-secondary-700 leading-relaxed mb-4">
            Você não pode modificar, copiar, distribuir, transmitir, exibir, executar, reproduzir, publicar, licenciar, criar trabalhos derivados, transferir ou vender qualquer informação, software, produtos ou serviços obtidos no website.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-display font-semibold text-accent-950 mb-4">4. Links para Sites de Terceiros</h2>
          <p className="text-lg text-secondary-700 leading-relaxed mb-4">
            Nosso website pode conter links para outros sites operados por terceiros. Esses links são fornecidos apenas para sua conveniência. Não temos controle sobre esses sites e não somos responsáveis por seu conteúdo ou por suas práticas de privacidade. A inclusão de quaisquer links não implica endosso por parte da Toque Ideal do site ou de qualquer associação com seus operadores.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-display font-semibold text-accent-950 mb-4">5. Isenção de Garantias</h2>
          <p className="text-lg text-secondary-700 leading-relaxed mb-4">
            O website é fornecido "como está" e "conforme disponível" sem garantias de qualquer tipo, expressas ou implícitas. A Toque Ideal não garante que o website será ininterrupto, livre de erros ou que os defeitos serão corrigidos.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-display font-semibold text-accent-950 mb-4">6. Limitação de Responsabilidade</h2>
          <p className="text-lg text-secondary-700 leading-relaxed mb-4">
            Em nenhuma circunstância a Toque Ideal será responsável por quaisquer danos diretos, indiretos, incidentais, especiais, consequenciais ou punitivos, incluindo, sem limitação, perda de lucros, dados, uso, boa vontade ou outras perdas intangíveis, resultantes do uso ou incapacidade de usar o website.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-display font-semibold text-accent-950 mb-4">7. Modificações dos Termos</h2>
          <p className="text-lg text-secondary-700 leading-relaxed mb-4">
            A Toque Ideal reserva-se o direito de modificar estes Termos de Uso a qualquer momento. As modificações entrarão em vigor imediatamente após a publicação no website. Seu uso continuado do website após tais modificações constituirá sua aceitação dos novos termos.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-display font-semibold text-accent-950 mb-4">8. Lei Aplicável</h2>
          <p className="text-lg text-secondary-700 leading-relaxed mb-4">
            Estes Termos de Uso serão regidos e interpretados de acordo com as leis do Brasil. Qualquer disputa decorrente destes termos será submetida à jurisdição exclusiva dos tribunais brasileiros.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-display font-semibold text-accent-950 mb-4">9. Contato</h2>
          <p className="text-lg text-secondary-700 leading-relaxed mb-4">
            Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco:
          </p>
          <ul className="list-disc list-inside text-lg text-secondary-700 leading-relaxed">
            <li>Por e-mail: contato@toqueideal.com.br</li>
            <li>Pelo formulário de contato em nosso website.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TermosUso;

