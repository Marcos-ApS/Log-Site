import { containerCount, containerTemplate } from "./map";

export default function Map({ count = containerCount }) {
  const containers = Array.from({ length: Math.max(0, count) }, (_, index) => index + 1);

  return (
    <div className="map-editor" aria-label="Mapa de containers com ruas e modulos">
      <div className="map-container-list">
        {containers.map((number) => (
          <section className="map-container" key={number} aria-label={`Container ${number}`}>
            <div className="map-container-street" style={{ flexBasis: `${containerTemplate.street.share}%` }}>
              <span>{containerTemplate.street.label} {number}</span>
            </div>
            <div className="map-container-module" style={{ flexBasis: `${containerTemplate.module.share}%` }}>
              <span>{containerTemplate.module.label} {number}</span>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
