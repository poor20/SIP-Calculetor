import { db } from "@/db";
import { sql } from "drizzle-orm";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Menu } from "@/components/Menu";
import { BestSellers } from "@/components/BestSellers";
import { Gallery } from "@/components/Gallery";
import { Reviews } from "@/components/Reviews";
import { Location } from "@/components/Location";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  await db.execute(sql`select 1`);

  return (
    <main className="min-h-screen bg-cream-50">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <BestSellers />
      <Gallery />
      <Reviews />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}
