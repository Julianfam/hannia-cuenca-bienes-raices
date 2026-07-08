import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { PropertySearch } from "@/components/PropertySearch";
import { PropertyCard } from "@/components/PropertyCard";
import { SanIsidroFeature } from "@/components/SanIsidroFeature";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { properties } from "@/data/properties";

export default function HomePage() {
  const featured = properties.filter((p) => p.featured);

  return (
    <>
      <Hero />
      <SanIsidroFeature />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PropertySearch />
      </div>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
                Destacadas
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink-950 sm:text-4xl">
                Propiedades seleccionadas
              </h2>
            </div>
            <Link
              href="/propiedades"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900"
            >
              Ver todas
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      <Services />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
}