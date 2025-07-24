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
        <h2 className="text-4xl font-bold  mb-4">What is a REIT?</h2>
        <p className="text-lg  max-w-3xl leading-relaxed text-gray-600">
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

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="relative overflow-hidden p-8 rounded-3xl border border-gray-200 bg-white/80 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-tr from-indigo-100 to-indigo-300 rounded-full blur-3xl opacity-40 pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-pink-100 to-pink-300 rounded-full blur-2xl opacity-30 pointer-events-none" />

              <h4
                className={`text-2xl font-bold mb-4 ${
                  i === 0 ? "text-indigo-600" : "text-rose-600"
                }`}
              >
                {i === 0 ? "REITs" : "Traditional Real Estate"}
              </h4>

              <ul className="space-y-3 text-gray-800 text-[15px] leading-relaxed">
                {i === 0 ? (
                  <>
                    <li>✅ Highly liquid – traded like stocks</li>
                    <li>💰 Low capital required to invest</li>
                    <li>🛠 No property management needed</li>
                    <li>📈 Regular dividend income</li>
                    <li>🏙 Diversified real estate portfolio</li>
                  </>
                ) : (
                  <>
                    <li>❌ Illiquid – selling takes time</li>
                    <li>💸 High upfront investment</li>
                    <li>🔧 Requires active management</li>
                    <li>🏠 Income through rent or resale</li>
                    <li>📍 Limited to fewer properties</li>
                  </>
                )}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Reit;
