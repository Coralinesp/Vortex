import { Link } from 'react-router-dom';
import Reveal from '../common/Reveal.jsx';
import { PLANS } from '../../data/plans.js';

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PricingPlans() {
  return (
    <section className="section section-first" id="precios">
      <div className="container">
        <Reveal as="header" className="pp-head">
          <div className="pp-head-copy">
            <span className="eyebrow">Precios</span>
            <h2>Planes y precios</h2>
            <p>
              Los planes son acumulativos: cada uno incluye todo lo del anterior y le suma nuevas funcionalidades.
              Al subir de plan no se pierde ninguna función, solo se agregan.
            </p>
          </div>
        </Reveal>

        <div className="pp-grid reveal">
          {PLANS.map((plan) => (
            <Reveal as="article" className={`pp-card${plan.popular ? ' pp-card--popular' : ''}`} delay={plan.delay} key={plan.key}>
              <div className="pp-body">
                <div className="pp-tagrow">{plan.tag && <span className="pp-tag">{plan.tag}</span>}</div>

                {plan.priceQuote ? (
                  <p className="pp-price pp-price--quote">
                    <b>A cotizar</b>
                  </p>
                ) : (
                  <p className="pp-price">
                    <span className="cur">{plan.price.cur}</span>
                    <b>{plan.price.amount}</b>
                    <span className="per">{plan.price.per}</span>
                  </p>
                )}

                <h3 className="pp-name">{plan.name}</h3>
                <p className="pp-desc">{plan.description}</p>

                <div className="pp-includes">
                  <h4>{plan.includesHeading}</h4>
                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <span className="pp-check">
                          <CheckIcon />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="pp-foot">
                {plan.ctaTo ? (
                  <Link className={`pp-btn pp-btn--${plan.ctaVariant}`} to={plan.ctaTo}>
                    {plan.ctaLabel}
                  </Link>
                ) : (
                  <a className={`pp-btn pp-btn--${plan.ctaVariant}`} href={plan.ctaHash}>
                    {plan.ctaLabel}
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
