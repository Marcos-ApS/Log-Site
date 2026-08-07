import Card from "../components/Card";

const pageConfig = {
  Estoque: { subtitle: "Visão geral dos produtos armazenados", columns: ["Produto", "Categoria", "Localização", "Quantidade", "Status"], stats: ["Produtos", "Estoque baixo", "Categorias", "Ocupação"] },
  "Movimentações": { subtitle: "Entradas, saídas e movimentações internas", columns: ["Código", "Tipo", "Produto", "Origem", "Destino"], stats: ["Entradas", "Saídas", "Internas", "Total"] },
  Pedidos: { subtitle: "Acompanhamento dos pedidos", columns: ["Pedido", "Cliente", "Data", "Prioridade", "Status"], stats: ["Pendentes", "Separando", "Transporte", "Concluídos"] },
  "Robôs": { subtitle: "Frota de robôs autônomos", columns: ["Robô", "Status", "Bateria", "Localização", "Missão"], stats: ["Online", "Carregando", "Manutenção", "Offline"] },
  Alertas: { subtitle: "Central de alertas operacionais", columns: ["Nível", "Tipo", "Mensagem", "Data", "Status"], stats: ["Críticos", "Altos", "Médios", "Informativos"] },
  "Relatórios": { subtitle: "Indicadores e análises do sistema", columns: ["Relatório", "Período", "Categoria", "Formato", "Status"], stats: ["Movimentações", "Eficiência", "Pedidos", "Tempo médio"] },
  "Configurações": { subtitle: "Preferências gerais do sistema", columns: ["Configuração", "Descrição", "Categoria", "Valor", "Status"], stats: ["Empresa", "Usuários", "Integrações", "Sistema"] },
};

export default function PageContent({ page }) {
  const config = pageConfig[page];
  return (
    <div className="page-stack">
      <div className="page-heading"><div>
        <span>Início / {page}</span>
          <h1>{page}</h1><p>{config.subtitle}</p>
          </div>
            <button className="primary-button">Adicionar</button>
          </div>
      <div className="stat-grid">{config.stats.map((item) => 
        <Card key={item} className="stat">
          <span>{item}</span>
            <strong>--</strong>
            <small>Aguardando dados</small>
          </Card>)}
      </div>
      <Card title={`Lista de ${page.toLowerCase()}`} subtitle="Estrutura visual preparada para receber dados reais">
        <div className="toolbar">
          <input placeholder="Pesquisar..." />
            <select defaultValue="Todos">
              <option>Todos</option>
            </select>
        </div>
        <div className="table-wrap"><table>
          <thead>
            <tr>{config.columns.map((col) => <th key={col}>{col}</th>)}</tr>
          </thead>
          <tbody>{[1, 2, 3].map((row) => <tr key={row}>{config.columns.map((col, i) => <td key={col} data-label={col}>{i === 0 ? "—" : <span className="skeleton" />}</td>)}</tr>)}</tbody>
          </table>
          </div>
      </Card>
    </div>
  );
}
