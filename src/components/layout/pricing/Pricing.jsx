import "./Pricing.scss"

const plans = [
  {
    name: "TIER 1",
    subtitle: "Basic",
    price: "Rp 50.000",
    period: "/month",
    features: [
      "Record incoming goods",
      "Record outgoing goods",
      "Record profit",
    ],
  },
  {
    name: "TIER 2",
    subtitle: "Business",
    price: "Rp 100.000",
    period: "/month",
    features: [
      "Record incoming and outgoing goods",
      "Track profit",
      "Analyze sales performance with charts",
      "24/7 Support",
    ],
    popular: true,
  },
  {
    name: "TIER 3",
    subtitle: "Entrepreneur",
    price: "Rp 150.000",
    period: "/month",
    features: [
      "Record incoming and outgoing goods",
      "Track profit",
      "Analyze sales performance with charts",
      "24/7 Support",
      "Export data to Excel",
      "AI-powered income prediction",
    ],
  },
]

export default function Pricing() {
  return (
    <div className="pricing-container">
      <h2 className="pricing-title">Pricing</h2>
      <p className="pricing-description">
        Choose the plan that fits your business needs.
      </p>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <div className={`pricing-card ${plan.popular ? "popular" : ""}`} key={plan.name}>

            {plan.popular && <div className="popular-badge">POPULAR</div>}

            <div className="tier-label">{plan.name}</div>

            <h3 className="plan-subtitle">{plan.subtitle}</h3>

            <div className="price">
              {plan.price}
              <span>{plan.period}</span>
            </div>

            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>✓ {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
