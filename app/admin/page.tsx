import Link from 'next/link';
import styles from './admin.module.css';

const notices = [
  ['Gestão de tráfego para negócios locais', 'Serviços', 'Dourados, MS', '18h'],
  ['Procuro designer para meu projeto', 'Procuro', 'Campo Grande, MS', '10h'],
  ['Planner 2026 para empreendedoras', 'Produtos', 'Online', '6h'],
  ['Canva Designer para sua marca', 'Serviços', 'Dourados, MS', '3h'],
];

export default function AdminPage() {
  return <main className={styles.shell}>
    <aside className={styles.sidebar}><Link href="/" className={styles.brand}>📌 <span>Mural<br />dos Aliados</span></Link><p>ADMINISTRAÇÃO</p><nav><a className={styles.selected} href="#resumo">⌂ Resumo</a><a href="#avisos">▤ Avisos</a><a href="#moderacao">⚑ Moderação</a><a href="#promocoes">♨ Promoções</a><a href="#patrocinios">✦ Patrocínios</a><a href="#metricas">◔ Métricas</a></nav><Link className={styles.back} href="/">← Ver o mural público</Link></aside>
    <section className={styles.content}><header><div><p>PAINEL ADMINISTRATIVO</p><h1>Bom dia, Camilla.</h1><span>Acompanhe o que está acontecendo no mural.</span></div><div className={styles.profile}>CB</div></header>
      <div className={styles.stats} id="resumo"><article><span>📌</span><small>AVISOS ATIVOS</small><strong>24</strong><em>↑ 12% hoje</em></article><article><span>◷</span><small>EXPIRAM EM BREVE</small><strong>6</strong><em>nas próximas 3h</em></article><article><span>⚑</span><small>AGUARDANDO REVISÃO</small><strong>3</strong><em className={styles.alert}>atenção necessária</em></article><article><span>⌕</span><small>BUSCAS HOJE</small><strong>186</strong><em>designer é o mais buscado</em></article></div>
      <section className={styles.panel} id="avisos"><div className={styles.panelHead}><div><p>AVISOS</p><h2>Atividade recente</h2></div><button>Ver todos →</button></div><div className={styles.table}><div className={styles.tableHead}><span>AVISO</span><span>CATEGORIA</span><span>LOCAL</span><span>EXPIRA EM</span><span>STATUS</span></div>{notices.map(([title, category, place, time]) => <div className={styles.row} key={title}><b>{title}</b><span><i>{category}</i></span><span>{place}</span><span>{time}</span><span className={styles.live}>● Ativo</span></div>)}</div></section>
      <div className={styles.bottom}><section className={styles.panel} id="moderacao"><div className={styles.panelHead}><div><p>MODERAÇÃO</p><h2>Precisa da sua atenção</h2></div><button>Ver fila →</button></div><div className={styles.review}><span>⚑</span><div><b>3 avisos aguardam revisão</b><p>Verifique conteúdo sinalizado ou denúncias recebidas.</p></div><button>Revisar agora</button></div></section><section className={`${styles.panel} ${styles.highlight}`} id="promocoes"><p>♨ PROMOÇÕES</p><h2>Crie uma promoção<br />para hoje.</h2><span>Destaque oportunidades e ofertas da comunidade.</span><button>+ Nova promoção</button></section></div>
      <footer id="metricas">Os controles administrativos são gerenciados no seu ambiente Cloudflare.</footer>
    </section>
  </main>;
}

