/* global React, ReactDOM, STORIES */

const SECTIONS = ['Foundations', 'Brand', 'Components', 'App Shell', 'Home', 'Cart', 'Prototype'];

function Sidebar({ activeId, onSelect }) {
  const grouped = React.useMemo(() => {
    const g = {};
    Object.entries(STORIES).forEach(([id, s]) => {
      (g[s.section] = g[s.section] || []).push({ id, ...s });
    });
    return g;
  }, []);
  return (
    <>
      {SECTIONS.map(sec => grouped[sec] && (
        <div key={sec}>
          <h4>{sec}</h4>
          {grouped[sec].map(item => (
            <div key={item.id}
              className={'item ' + (item.id === activeId ? 'active' : '')}
              onClick={() => onSelect(item.id)}>
              <span className="glyph">▸</span>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

function PropsTable({ rows }) {
  if (!rows || !rows.length) return null;
  return (
    <div className="props">
      <div className="head">Props</div>
      <table>
        <thead><tr>
          <th style={{ width: '20%' }}>Name</th>
          <th style={{ width: '30%' }}>Type</th>
          <th style={{ width: '15%' }}>Default</th>
          <th>Description</th>
        </tr></thead>
        <tbody>
          {rows.map(([name, type, def, desc]) => (
            <tr key={name}>
              <td><code>{name}</code></td>
              <td><code>{type}</code></td>
              <td>{def === '–' ? <span style={{ color: '#9aa1ad' }}>—</span> : <code>{def}</code>}</td>
              <td style={{ color: '#5b6373' }}>{desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function StoryView({ storyId }) {
  const story = STORIES[storyId];
  if (!story) return null;
  return (
    <div className="docs">
      <h1>{story.name}</h1>
      <p className="desc">{story.desc}</p>
      <div className="row center" style={{ padding: 0, overflow: 'hidden' }}>
        {story.iframe ? (
          <iframe src={story.iframe} style={{ width: '100%', height: story.height || 300, border: 'none' }} />
        ) : (
          <div style={{ padding: 28, width: '100%', display: 'flex', justifyContent: 'center' }}>
            {story.render()}
          </div>
        )}
      </div>
      <PropsTable rows={story.props} />
    </div>
  );
}

function App() {
  const initial = (location.hash || '').replace('#', '') || 'foundations/colors-pink';
  const [activeId, setActiveId] = React.useState(STORIES[initial] ? initial : 'foundations/colors-pink');

  React.useEffect(() => {
    location.hash = activeId;
    const story = STORIES[activeId];
    document.getElementById('crumb-section').textContent = story.section;
    document.getElementById('crumb-name').textContent = story.name;
  }, [activeId]);

  React.useEffect(() => {
    const onHash = () => {
      const id = (location.hash || '').replace('#', '');
      if (STORIES[id]) setActiveId(id);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return (
    <>
      {ReactDOM.createPortal(<Sidebar activeId={activeId} onSelect={setActiveId} />, document.getElementById('nav'))}
      {ReactDOM.createPortal(<StoryView storyId={activeId} />, document.getElementById('canvas'))}
    </>
  );
}

ReactDOM.createRoot(document.createElement('div')).render(<App />);
