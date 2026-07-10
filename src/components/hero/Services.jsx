import {
  Code2,
  Database,
  BrainCircuit,
  Server,
} from "lucide-react";

import { motion } from "motion/react";

const services = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Building responsive and scalable web applications using the MERN Stack.",
  },

  {
    icon: Server,
    title: "REST API Development",
    description:
      "Creating secure and efficient APIs with Node.js and Express.js.",
  },

  {
    icon: Database,
    title: "Database Management",
    description:
      "Designing MongoDB schemas and optimizing database performance.",
  },

  {
    icon: BrainCircuit,
    title: "AI & ML Integration",
    description:
      "Integrating AI-powered features and machine learning solutions.",
  },
];

const Services = () => {
  return (
    <section className="py-16">

      <div className="mb-10">

        <h2 className="text-3xl font-bold text-[#0F172A]">
          What I Do
        </h2>

        <div className="w-20 h-1 bg-[#14B8A6] mt-3 rounded-full"></div>

      </div>

      <div className="grid md:grid-cols-2 gap-6">

        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -5,
              }}
              className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm"
            >
              <div className="w-14 h-14 rounded-xl bg-[#F0FDFA] flex items-center justify-center">

                <Icon
                  size={28}
                  className="text-[#14B8A6]"
                />

              </div>

              <h3 className="text-xl font-semibold text-[#0F172A] mt-5">
                {service.title}
              </h3>

              <p className="text-slate-600 mt-3 leading-7">
                {service.description}
              </p>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
};

export default Services;