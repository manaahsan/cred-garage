// components
import BenefitCard from "@/components/shared/BenefitCard";

// helper
import { benefits } from "@/lib/helper";

export default function BenefitsSection() {
  return (
    <section className="p">
      <h2 className="text-lg font-bold text-foreground mb-6">Your Benefits</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {benefits.map((b, index) => (
          <BenefitCard
            key={index}
            icon={b.icon}
            title={b.title}
            description={b.description}
            cta={b.cta}
          />
        ))}
      </div>
    </section>
  );
}
