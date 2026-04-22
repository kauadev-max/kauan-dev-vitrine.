import './App.css'
import vibexImg from './assets/vibex-print.png'
import logoImg from './assets/logo-cauadev.png' // Pode manter sua logo aqui se quiser

function App() {
  
  // Função para dúvidas gerais
  const abrirWhatsApp = () => {
    const numero = "5515996207611";
    const mensagem = encodeURIComponent("Olá, Cauã! Vi a vibes KS e gostaria de conversar sobre a melhor solução para o meu negócio. Podemos fazer um orçamento rápido?");
    window.open(`https://wa.me/${numero}?text=${mensagem}`, '_blank', 'noopener,noreferrer');
  };

  // Função focada em fechar venda (Pix)
  const abrirWhatsAppPlano = (plano, valor) => {
    const numero = "5515996207611";
    const mensagem = encodeURIComponent(`Olá, Cauã! Quero fechar o Plano ${plano} (${valor}) com a vibes KS. Pode me passar a sua chave Pix para darmos início?`);
    window.open(`https://wa.me/${numero}?text=${mensagem}`, '_blank', 'noopener,noreferrer');
  };

  // Função focada em solicitar o teste do portfólio (VIBEX)
  const solicitarTesteApp = () => {
    const numero = "5515996207611";
    const mensagem = encodeURIComponent("Olá, Cauã! Vi o VIBEX no portfólio da vibes KS e gostaria de testar o aplicativo na prática.");
    window.open(`https://wa.me/${numero}?text=${mensagem}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="container-dark">
      {/* LUZES DE FUNDO (Efeito Neon Premium) */}
      <div className="glow-bg glow-purple"></div>
      <div className="glow-bg glow-green"></div>

      {/* 1. MENU DE NAVEGAÇÃO */}
      <nav className="navbar animar-cascata atraso-1">
        <div className="logo-vibes">
          vibes<span className="neon-text-roxo">.</span>KS
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#portfolio">Projetos</a></li>
          <li><a href="#planos">Planos</a></li>
        </ul>
        <button className="btn-nav-outline" onClick={abrirWhatsApp}>Contato</button>
      </nav>

      {/* 2. SEÇÃO PRINCIPAL (HERO) */}
      <header className="hero" id="home">
        <div className="badge-estudio animar-cascata atraso-1">Estúdio de Criação Digital</div>
        <h1 className="animar-cascata atraso-2">
          Design de <span className="neon-text-roxo">Alta Performance.</span><br />
          Tecnologia que Converte.
        </h1>
        <p className="animar-cascata atraso-3">
          Esqueça o padrão corporativo engessado. Gerenciamos e desenvolvemos plataformas disruptivas, automação de pedidos e interfaces com foco total no seu lucro.
        </p>
        <div className="hero-btns animar-cascata atraso-4">
          <button className="btn-neon-roxo" onClick={abrirWhatsApp}>Iniciar Projeto</button>
          <a href="#portfolio" className="btn-neon-outline">Ver Portfólio</a>
        </div>
      </header>

      {/* 3. SEÇÃO DE SERVIÇOS */}
      <section className="services" id="servicos">
        <h3 className="section-title animar-cascata atraso-1">Soluções de Alto Nível</h3>
        <div className="cards-container">
          <div className="card-dark animar-cascata atraso-2">
            <div className="card-icon">🍔</div>
            <h4>Cardápios & Delivery</h4>
            <p>O cliente escolhe pela interface fluida e você recebe o pedido 100% organizado no WhatsApp, sem erros na produção.</p>
          </div>
          <div className="card-dark animar-cascata atraso-3">
            <div className="card-icon">🚀</div>
            <h4>Landing Pages Premium</h4>
            <p>Páginas agressivas focadas em conversão, com carregamento ultrarrápido e design de exportação.</p>
          </div>
          <div className="card-dark animar-cascata atraso-4">
            <div className="card-icon">📱</div>
            <h4>Apps & PWA</h4>
            <p>Desenvolvimento mobile sob medida para operações complexas que exigem escalabilidade e gestão.</p>
          </div>
        </div>
      </section>

      {/* 4. PORTFÓLIO & CONCEITOS (A sua vitrine turbinada) */}
      <section className="portfolio" id="portfolio">
        <h3 className="section-title animar-cascata atraso-1">Projetos & Arquitetura</h3>
        <div className="portfolio-grid">
          
          <div className="portfolio-card animar-cascata atraso-2">
            <div className="portfolio-img-box">
              <span className="badge-tech">APP NATIVO</span>
            </div>
            <h4>VIBEX - Relíquias & Frases</h4>
            <p>Aplicativo mobile desenvolvido do zero com sistema de monetização e banco de dados isolado.</p>
            <button className="btn-small-neon" onClick={solicitarTesteApp}>Testar App</button>
          </div>

          <div className="portfolio-card animar-cascata atraso-3">
            <div className="portfolio-img-box">
              <span className="badge-tech">WEB APP PWA</span>
            </div>
            <h4>Plataforma Zei</h4>
            <p>MVP hiperlocal de preços de varejo. Algoritmos de geolocalização e interface fluida sem necessidade de app store.</p>
          </div>

          <div className="portfolio-card animar-cascata atraso-4">
            <div className="portfolio-img-box">
              <span className="badge-tech">DASHBOARD</span>
            </div>
            <h4>Painel Corporativo IMTC</h4>
            <p>Gestão de dados complexos com arquitetura multilocatário, focado em clareza visual e Dark Mode imersivo.</p>
          </div>

        </div>
      </section>

      {/* 5. PLANOS - AGORA COM MAIS DETALHES E CONFIANÇA */}
      <section className="pricing" id="planos">
        <h3 className="section-title animar-cascata atraso-1">Planos & Investimento</h3>
        <div className="pricing-container">
          
          {/* PLANO 1 */}
          <div className="pricing-card-dark animar-cascata atraso-2">
            <h4>Página Inicial (Landing Page)</h4>
            <div className="price">R$ 497<span>/único</span></div>
            <p className="pricing-desc">Ideal para prestadores de serviço e profissionais liberais que precisam de presença digital.</p>
            <ul className="pricing-features">
              <li>✔️ Layout adaptado para celular (Responsivo)</li>
              <li>✔️ Botão direto para seu WhatsApp</li>
              <li>✔️ Inclusão de fotos, serviços e depoimentos</li>
              <li>✔️ Otimização de velocidade (Carregamento rápido)</li>
              <li>✔️ Configuração do seu domínio (.com.br)</li>
            </ul>
            <button className="btn-nav-outline w-full mt-4" onClick={() => abrirWhatsAppPlano('Página Inicial', 'R$ 497')}>Quero esse plano</button>
          </div>

          {/* PLANO 2 - O DESTAQUE */}
          <div className="pricing-card-dark destaque-neon animar-cascata atraso-3">
            <div className="badge-pop">O MAIS VENDIDO</div>
            <h4>Delivery Organizado</h4>
            <div className="price">R$ 897<span>/único</span></div>
            <p className="pricing-desc">A solução completa para quem vende comida e quer parar de errar pedidos no chat.</p>
            <ul className="pricing-features">
              <li>✔️ Site Completo + Catálogo de Produtos</li>
              <li>✔️ Sistema de Pedidos Inteligente via WhatsApp</li>
              <li>✔️ Painel Administrativo para trocar preços e fotos</li>
              <li>✔️ Registro de domínio incluso por 1 ano</li>
              <li>✔️ Suporte técnico e manual de uso</li>
            </ul>
            <button className="btn-neon-roxo w-full mt-4" onClick={() => abrirWhatsAppPlano('Delivery Organizado', 'R$ 897')}>Montar meu Delivery</button>
          </div>

        </div>
      </section>
      
      {/* 6. RODAPÉ */}
      <footer className="footer-dark">
        <div className="logo-vibes-small">vibes<span className="neon-text-roxo">.</span>KS</div>
        <p>© {new Date().getFullYear()} Gerenciamento e Tecnologia. Sorocaba / SP.</p>
      </footer>
    </div>
  )
}

export default App