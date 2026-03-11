import Image from "next/image";
import styles from "./card.module.css";

export default function Card() {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1200&q=80"
          alt="Decorated indoor event venue"
          fill
          unoptimized
          className={styles.image}
          sizes="(max-width: 768px) 100vw, 420px"
        />
      </div>
      <div className={styles.content}>
        <p className={styles.label}>Featured venue</p>
        <h2 className={styles.title}>Grand Horizon Hall</h2>
        <p className={styles.description}>
          A stylish venue for receptions, gala dinners, seminars, and private
          events with curated lighting, catering, and guest support.
        </p>
      </div>
    </article>
  );
}
