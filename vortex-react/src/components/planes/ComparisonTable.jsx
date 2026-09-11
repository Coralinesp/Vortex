import { Fragment } from 'react';
import Reveal from '../common/Reveal.jsx';
import { COMPARISON_COLUMNS, COMPARISON_GROUPS } from '../../data/plans.js';

function ComparisonCell({ value, planName }) {
  if (value === 'yes') {
    return (
      <td>
        <span className="cmp-yes" role="img" aria-label={`Incluido en ${planName}`}>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </td>
    );
  }

  if (value === 'no') {
    return (
      <td>
        <span className="cmp-no" role="img" aria-label={`No incluido en ${planName}`}>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
        </span>
      </td>
    );
  }

  return (
    <td>
      <span className="cmp-val">{value}</span>
    </td>
  );
}

export default function ComparisonTable() {
  return (
    <section className="section comparativa" id="comparativa">
      <div className="container">
        <Reveal as="header" className="cmp-head">
          <span className="eyebrow">Comparativa</span>
          <h2>
            Qué incluye <em>cada plan</em>
          </h2>
          <p>Compara función por función qué trae cada plan. Cambias de plan cuando quieras, sin penalización.</p>
        </Reveal>

        <Reveal as="div" className="cmp-wrap">
          <table className="cmp-table">
            <caption className="sr-only">Comparación de funciones por plan de Vortex</caption>
            <thead>
              <tr>
                <td></td>
                {COMPARISON_COLUMNS.map((col) => (
                  <th scope="col" className={col.popular ? 'is-popular' : undefined} key={col.name}>
                    <b>{col.name}</b>
                    <i>{col.price}</i>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON_GROUPS.map((group) => (
                <Fragment key={group.title}>
                  <tr className="cmp-group">
                    <th colSpan="4" scope="colgroup">
                      {group.title}
                    </th>
                  </tr>
                  {group.rows.map((row) => (
                    <tr key={row.label}>
                      <th scope="row">{row.label}</th>
                      {row.values.map((value, i) => (
                        <ComparisonCell value={value} planName={COMPARISON_COLUMNS[i].name} key={COMPARISON_COLUMNS[i].name} />
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </Reveal>

        <Reveal as="p" className="cmp-note">
          Los planes son acumulativos: el Profesional contiene todas las funciones del Básico y el Empresarial
          contiene todas las del Profesional.
        </Reveal>
      </div>
    </section>
  );
}
