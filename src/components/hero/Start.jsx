import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const stats = [
  { number: 10, suffix: "+", title: "Projects Completed" },
  { number: 6,  suffix: "+", title: "Months Experience" },
  { number: 15, suffix: "+", title: "Technologies" },
  { number: 100, suffix: "%", title: "Dedication" },
];

function AnimatedNumber({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const steps = 60;
    const increment = target / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 1800 / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const Stats = () => {
  return (
    <section className="mt-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#14B8A6]">
              <AnimatedNumber target={item.number} suffix={item.suffix} />
            </h2>
            <p className="mt-2 text-sm md:text-base text-slate-600">{item.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
