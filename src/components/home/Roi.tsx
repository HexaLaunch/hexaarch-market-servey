import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
const DEFAULTS = {
  mode: "Normal",
  amount: 0,
  years: 0,
  months: 0,
  days: 0,
};

const Roi = () => {
  const [mode, setMode] = useState(DEFAULTS.mode);
  const [amount, setAmount] = useState(DEFAULTS.amount);
  const [years, setYears] = useState(DEFAULTS.years);
  const [months, setMonths] = useState(DEFAULTS.months);
  const [days, setDays] = useState(DEFAULTS.days);

  const interestRate = 3.5; // annual rate (p.a.)

  // Total tenure in years
  const totalMonths = years * 12 + months + days / 30;
  const totalYears = totalMonths / 12;

  let interestAmount = 0;
  let maturityAmount = amount;

  if (mode === "Compound") {
    const rateDecimal = interestRate / 100;
    const n = 1; // compounding yearly; change to 12 if monthly
    maturityAmount = Math.round(
      amount * Math.pow(1 + rateDecimal / n, n * totalYears)
    );
    interestAmount = maturityAmount - amount;
  } else {
    interestAmount = Math.round((amount * interestRate * totalYears) / 100);
    maturityAmount = amount + interestAmount;
  }

  // Maturity date (simple calculation from today)
  const today = new Date();
  const maturityDate = new Date(today);
  maturityDate.setFullYear(today.getFullYear() + years);
  maturityDate.setMonth(today.getMonth() + months);
  maturityDate.setDate(today.getDate() + days);

  const formatDate = (date: Date) =>
    date.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });

  return (
    <section className="lg:py-12 px-4 lg:px-24 py-6" id="roi">
      {/* Header */}
      <p className="uppercase text-base font-medium text-[#2A3342] underline underline-offset-2 pb-9 flex items-center gap-2">
        <img src="/logo.svg" alt="Hexaarch" className="w-5 h-5" />
        ROI Calculator
      </p>

      {/* Toggle Mode */}
      <RadioGroup
        defaultValue={mode}
        onValueChange={(value) => setMode(value)}
        className="flex items-center gap-6 mb-8"
      >
        {["Normal", "Compound"].map((type) => (
          <label
            key={type}
            htmlFor={type}
            className="flex items-center gap-2 text-base font-bold text-[#3A3A3A] font-dmSans leading-relaxed cursor-pointer"
          >
            <RadioGroupItem
              id={type}
              value={type}
              className={`w-4 h-4 rounded-full border-2 ${
                mode === type ? "border-[#304087]" : "border-gray-400"
              }`}
            />
            {type}
          </label>
        ))}
      </RadioGroup>

      {/* Calculator */}
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Inputs */}
        <div className="col-span-2 space-y-6 bg-[#F3F4F6] p-4">
          {/* Amount */}
          <div>
            <div className="flex justify-between items-center mb-5">
              {/* Left: General Option */}

              <RadioGroup defaultValue="general" className="flex items-center">
                <div>
                  {/* Option */}
                  <label
                    htmlFor="general"
                    className="flex items-center gap-2 text-base font-bold text-[#3A3A3A] font-dmSans"
                  >
                    <RadioGroupItem
                      value="general"
                      id="general"
                      className="border-[#304087] border-2"
                    />
                    <span>General</span>
                  </label>
                </div>
              </RadioGroup>
              {/* Reset Button */}
              <button
                className="text-sm text-[#0061A6] font-medium underline cursor-pointer font-dmSans"
                onClick={() => {
                  setMode(DEFAULTS.mode);
                  setAmount(DEFAULTS.amount);
                  setYears(DEFAULTS.years);
                  setMonths(DEFAULTS.months);
                  setDays(DEFAULTS.days);
                }}
              >
                Reset
              </button>
            </div>

            <div className="flex justify-between items-center">
              <label className="text-base text-gray-700 font-medium font-dmSans">
                <span className="font-bold">Amount</span> (Rs.)
              </label>
              <div className="flex justify-between items-center w-fit border border-[#DBDBDD] rounded px-2 py-1">
                <span className="text-gray-500 border-r border-[#DBDBDD] pr-3">
                  ₹
                </span>
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (/^\d*$/.test(val)) {
                      setAmount(Number(val));
                    }
                  }}
                  className="w-24 text-right text-[#0061A6] font-bold font-dmSans outline-none border-none bg-transparent"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 mt-2 ">
              <input
                type="range"
                min={5000}
                max={10000000}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full accent-[#304087] custom-thumb"
              />
            </div>
            <div className="flex justify-between text-xs text-[#909090] mt-1  font-bold">
              <span>₹ 5K</span>
              <span>₹ 1Cr</span>
            </div>
          </div>

          {/* Tenure */}
          <div>
            <label className="text-sm text-gray-700 font-medium">
              Tenure (7 Days to 10 months)
            </label>
            <div className="grid lg:grid-cols-3 gap-4 mt-4 grid-cols-1">
              {[
                { label: "Years", value: years, setter: setYears, max: 10 },
                { label: "Months", value: months, setter: setMonths, max: 10 },
                { label: "Days", value: days, setter: setDays, max: 31 },
              ].map(({ label, value, setter, max }, index, array) => (
                <div
                  key={label}
                  className={`pr-4 ${
                    index !== array.length - 1
                      ? "lg:border-r border-dashed border-[#CBD5E1]"
                      : ""
                  }`}
                >
                  <div className="flex justify-between items-center lg:pr-5 pb-3">
                    <label className="block text-sm font-medium mb-1">
                      {label}
                    </label>
                    <input
                      type="number"
                      value={value}
                      onChange={(e) => setter(Number(e.target.value))}
                      className="border px-1 py-1 rounded  bg-white text-right w-15"
                    />
                  </div>
                  <div className="flex items-center gap-2 lg:pr-5">
                    <input
                      type="range"
                      min={0}
                      max={max}
                      value={value}
                      onChange={(e) => setter(Number(e.target.value))}
                      className="w-full accent-[#304087] custom-thumb"
                    />
                  </div>
                  <div className="flex justify-between text-xs text-[#909090] mt-1 font-dmSans font-bold pr-5">
                    <span>0</span>
                    <span>{max}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-[#EEF1FF] rounded-xs overflow-hidden grid grid-cols-2  text-sm font-medium text-gray-800 divide-x divide-y divide-dashed divide-[#CBD5E1]">
          {/* Top Left */}
          <div className="p-6 flex items-center justify-center flex-col text-[13px]">
            <p className="text-[#707070] font-dmSans font-medium leading-relaxed mb-1">
              Interest Amount*
            </p>
            <p className="text-lg font-semibold text-black">
              ₹ {interestAmount.toLocaleString()}
            </p>
          </div>

          {/* Top Right */}
          <div className="p-6 flex items-center justify-center flex-col text-[13px]">
            <p className="text-[#707070] font-dmSans font-medium leading-relaxed mb-1">
              Interest Rate*
            </p>
            <p className="text-lg font-semibold text-black">
              {interestRate.toFixed(2)}% * p.a.
            </p>
          </div>

          {/* Bottom Left */}
          <div className="p-6 flex items-center justify-center flex-col text-[13px]">
            <p className="text-[#707070] font-dmSans font-medium leading-relaxed mb-1">
              Maturity Amount*
            </p>
            <p className="text-lg font-semibold text-black">
              ₹ {maturityAmount.toLocaleString()}
            </p>
          </div>

          {/* Bottom Right */}
          <div className="p-6 flex items-center justify-center flex-col text-[13px]">
            <p className="text-[#707070] font-dmSans font-medium leading-relaxed mb-1">
              Maturity Date
            </p>
            <p className="text-lg font-semibold text-black">
              {formatDate(maturityDate)}
            </p>
          </div>
        </div>
      </div>

      {/* Terms */}
      <p className="text-[13px] text-[#3A3A3A] mt-4 font-dmSans font-medium leading-relaxed tracking-wider">
        *Terms and conditions apply. For detailed information, click here
      </p>
    </section>
  );
};

export default Roi;
