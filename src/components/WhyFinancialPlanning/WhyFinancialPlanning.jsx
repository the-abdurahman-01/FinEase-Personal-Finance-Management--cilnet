import React from "react";
import { FaBalanceScaleRight  } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import { GiStairsGoal } from "react-icons/gi";
import { useTheme } from "../../context/ThemeContext/ThemeContext";

const benefits = [
  {
    icon: <GiStairsGoal size={28} />,
    title: "Achieve Goals Faster",
    description:
      "Effectively plan your finances to reach short-term and long-term goals efficiently and stress-free.",
    bgColor: "bg-blue-500",
  },
  {
    icon: <FaBalanceScaleRight  size={28} />,
    title: "Minimize Debt",
    description:
      "Control your spending and reduce unnecessary debt through strategic financial planning.",
    bgColor: "bg-green-500",
  },
  {
    icon: <IoShieldCheckmark size={28} />,
    title: "Secure Your Future",
    description:
      "Build savings and investments wisely to ensure long-term financial stability and peace of mind.",
    bgColor: "bg-yellow-500",
  },
];

const WhyFinancialPlanning = () => {
  const { isDarkMode } = useTheme();
  return (
    <section
      className={`py-20 transition-colors duration-500 ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800"
      }`}
    >
      <div className="max-w-[1520px] mx-auto px-8 text-center">
        <h2
          className={`text-4xl font-bold mb-4 ${
            isDarkMode ? "text-yellow-500" : "text-blue-500"
          }`}
        >
          Why Financial Planning Matters
        </h2>
        <p
          className={`text-lg mb-12 max-w-3xl mx-auto ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Financial planning empowers you to manage your money wisely, achieve
          your goals, and secure your future. With a well-structured plan, you
          can minimize debt, maximize savings, and ensure peace of mind for
          yourself and your family.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col items-center text-center ${
                isDarkMode ? "bg-gray-700" : "bg-blue-50"
              }`}
            >
              <div className={`${benefit.bgColor} text-white p-5 rounded-full mb-5`}>
                {benefit.icon}
              </div>
              <h3
                className={`text-xl font-semibold mb-3 ${
                  isDarkMode ? "text-yellow-500" : "text-blue-500"
                }`}
              >
                {benefit.title}
              </h3>
              <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyFinancialPlanning;
