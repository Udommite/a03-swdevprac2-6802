import Image from "next/image";
import styles from "./banner.module.css";

export default function Banner() {
  return (
    <section className={styles.banner}>
      <Image
        src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=80"
        alt="Elegant event venue prepared for a celebration"
        fill
        priority
        unoptimized
        className={styles.image}
        sizes="100vw"
      />
      <div className={styles.overlay}>
        <p className={styles.kicker}>Premium event venue service</p>
        <h1 className={styles.title}>where every event finds its venue</h1>
        <p className={styles.description}>
          Discover elegant spaces for weddings, conferences, parties, and
          special celebrations with full-service venue support.
        </p>
      </div>
    </section>
  );
}
