import React, { useEffect, useState, useContext } from "react";
import { useLoaderData } from "react-router";
import axios from "axios";
import {
  FaArrowLeft,
  FaMoneyBillWave,
  FaRegCalendarAlt,
  FaTag,
} from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext/ThemeContext";
import { AuthContext } from "../../context/AuthContext";

const TransactionDetails = () => {
  const { user } = useContext(AuthContext);
  const transaction = useLoaderData();
  const { isDarkMode } = useTheme();
  const [categoryTotal, setCategoryTotal] = useState(0);

  useEffect(() => {
    const sameCategoryTotal = async () => {
      if (!user) return;

      try {
        const token = await user.getIdToken();
        const res = await axios.get(
          `https://personal-finance-management-server-g8bc0yuye.vercel.app/category-total?email=${user.email}&category=${transaction.category}`,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
        setCategoryTotal(res.data.totalAmount);
      } catch (error) {
        console.error("Error same category total:", error);
      }
    };

    sameCategoryTotal();
  }, [transaction.category, user]);

  return (
    <div
      className={`min-h-screen flex justify-center items-center px-4 py-16 transition-colors duration-500 ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-green-50 to-teal-50"
      }`}
    >
      <div
        className={`rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden border transition-all duration-500 ${
          isDarkMode
            ? "bg-gray-800 border-gray-700"
            : "bg-white border-gray-200"
        }`}
      >
        <div
          className={`px-10 py-8 ${
            isDarkMode
              ? "bg-gradient-to-r from-yellow-600 via-yellow-600 to-yellow-500"
              : "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400"
          }`}
        >
          <h1 className="text-4xl font-extrabold text-white tracking-wide mb-1">
            Transaction Details
          </h1>
          <p className="text-green-100 text-sm font-medium">
            Detailed view of your transaction
          </p>
        </div>

        <div className="p-8 space-y-8">
          <div className="flex justify-between items-center">
            <h2
              className={`text-2xl font-bold flex items-center gap-2 ${
                isDarkMode ? "text-gray-100" : "text-gray-700"
              }`}
            >
              <FaTag className=" text-gray-300" /> {transaction.category}
            </h2>
            <span
              className={`px-4 py-1 rounded-full text-sm font-semibold ${
                transaction.type === "Income"
                  ? "bg-gray-100 text-black-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {transaction.type}
            </span>
          </div>

          <div className="text-center space-y-2">
            <p
              className={`text-5xl font-extrabold flex justify-center items-center gap-2 ${
                transaction.type === "Income"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              <FaMoneyBillWave /> ৳{categoryTotal}
            </p>
            <p
              className={`flex justify-center items-center gap-1 ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              <FaRegCalendarAlt />{" "}
              {new Date(transaction.date).toLocaleDateString("en-GB")}
            </p>
          </div>

          {transaction.description && (
            <div
              className={`rounded-xl p-6 shadow-sm border transition-all duration-500 ${
                isDarkMode
                  ? "bg-gray-700 border-gray-600"
                  : "bg-blue-50 border-gray-100"
              }`}
            >
              <h3
                className={`text-lg font-semibold mb-2 ${
                  isDarkMode ? "text-gray-100" : "text-gray-800"
                }`}
              >
                Description
              </h3>
              <p
                className={`leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {transaction.description}
              </p>
            </div>
          )}

          <div
            className={`grid grid-cols-2 gap-6 pt-6 border-t ${
              isDarkMode ? "border-gray-700" : "border-gray-100"
            }`}
          >
            <div className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
              <p
                className={`font-semibold ${
                  isDarkMode ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Category
              </p>
              <p>{transaction.category}</p>
            </div>
            <div className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
              <p
                className={`font-semibold ${
                  isDarkMode ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Type
              </p>
              <p>{transaction.type}</p>
            </div>
            <div className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
              <p
                className={`font-semibold ${
                  isDarkMode ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Amount
              </p>
              <p>৳{transaction.amount}</p>
            </div>
            <div className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
              <p
                className={`font-semibold ${
                  isDarkMode ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Date
              </p>
              <p>{new Date(transaction.date).toLocaleDateString()}</p>
            </div>
          </div>
        </div>

        <div
          className={`px-8 py-6 flex justify-center transition-all duration-500 ${
            isDarkMode
              ? "bg-gradient-to-r from-gray-700 to-gray-800"
              : "bg-gradient-to-r from-blue-100 to-blue-50"
          }`}
        >
          <button
            onClick={() => window.history.back()}
            className={`text-3xl font-bold mb-2 text-center ${
              isDarkMode
                ? "text-white px-5 py-3 bg-yellow-600 text-white rounded-full font-semibold text-sm hover:scale-105 transform transition-all duration-300 flex items-center gap-2 cursor-pointer"
                : "text-blue-600 px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full font-semibold text-sm hover:scale-105 transform transition-all duration-300 flex items-center gap-2 cursor-pointer"
            }`}
          >
            <FaArrowLeft /> Back to Transactions
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;
