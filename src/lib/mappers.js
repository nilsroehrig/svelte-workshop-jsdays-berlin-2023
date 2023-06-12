export const categories = [
  "Food",
  "Housing",
  "Salary",
  "Freelance",
  "Entertainment",
  "Investments",
  "Personal",
  "Fitness",
];

export function mapCategoryToEmoji(category) {
  const categoryMappings = {
    Food: "🍔",
    Housing: "🏠",
    Salary: "💰",
    Freelance: "💼",
    Entertainment: "🎉",
    Investments: "📈",
    Personal: "👤",
    Fitness: "💪",
  };
  return categoryMappings[category] || "❓";
}
