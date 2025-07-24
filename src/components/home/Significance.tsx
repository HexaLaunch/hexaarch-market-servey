import { motion } from "framer-motion";

const features = [
  {
    title: "Fractional Ownership",
    desc: "Access to income generating real estate with as low as Rs. 300",
    icon: "/images/home/icon1.svg",
  },
  {
    title: "Regular Income",
    desc: "SEBI regulations require REITs to payout 90% of distributable cash flow",
    icon: "/images/home/icon2.svg",
  },
  {
    title: "Capital Appreciation",
    desc: "Arising from increase in value of underlying real estate over time",
    icon: "/images/home/icon3.svg",
  },
  {
    title: "Diversification",
    desc: "Across geographies & tenants. Eliminates concentration risk",
    icon: "/images/home/icon4.svg",
  },
  {
    title: "Easy Liquidity",
    desc: "Compared to physical real estate, REITs are listed & traded on exchanges",
    icon: "/images/home/icon5.svg",
  },
  {
    title: "Professional Management",
    desc: "Ensures optimal return on investment, transparency & accountability",
    icon: "/images/home/icon6.svg",
  },
];

const Significance = () => {
  return (
    <section className="py-10 px-4 lg:px-28">
      {/* Heading */}
      <p className="uppercase text-base font-medium text-[#2A3342]  underline underline-offset-2 pb-10">
        <img
          src="/logo.svg"
          alt="Hexaarch"
          className="inline-block w-5 h-5 mr-2"
        />
        Our Significance
      </p>

      <h2 className="text-center  font-medium text-black lg:text-[48px] text-[34px] leading-tight mb-4">
        Why we are different in Market
      </h2>

      {/* Underline */}
      <div className="h-1 w-[120px] bg-[#00EAA1] mx-auto rounded-full mb-12" />

      {/* Feature Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="text-center flex flex-col items-center px-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-[99px] h-[99px] mb-4"
            />
            <h3 className="text-[24px] text-[#676767] mb-2  font-medium leading-relaxed">
              {feature.title}
            </h3>
            <p className="text-base text-[#353535] leading-relaxed  font-normal">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Significance;
