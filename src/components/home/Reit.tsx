import { motion } from "framer-motion";

const Reit = () => {
  return (
    <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto space-y-14 text-gray-800">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-center mb-4">What is a REIT?</h2>
        <p className="text-lg text-center max-w-3xl mx-auto leading-relaxed text-gray-600">
          A <strong>REIT</strong> (Real Estate Investment Trust) is a company
          that owns, operates, or finances income-generating real estate. It
          allows individuals to invest in large-scale, income-producing real
          estate without having to buy or manage properties directly.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="space-y-8"
      >
        <h3 className="text-3xl font-semibold text-center">
          REITs vs Traditional Real Estate
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              custom={i + 2}
              className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              {i === 0 ? (
                <>
                  <h4 className="text-xl font-semibold text-indigo-600 mb-4">
                    REITs
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
                    <li>Highly liquid – traded like stocks</li>
                    <li>Low capital required to invest</li>
                    <li>No property management needed</li>
                    <li>Regular dividend income</li>
                    <li>Diversified portfolio of real estate</li>
                  </ul>
                </>
              ) : (
                <>
                  <h4 className="text-xl font-semibold text-rose-600 mb-4">
                    Traditional Real Estate
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
                    <li>Illiquid – takes time to sell</li>
                    <li>High upfront investment cost</li>
                    <li>Requires active property management</li>
                    <li>Rental income and resale gains</li>
                    <li>Usually limited to fewer properties</li>
                  </ul>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Reit;
