function pad(val) {
  return String(val).padStart(2, "0");
}

function getCurrentAndLastThreeMonths(date) {
  const currentMonth = date.getMonth(); // Add 1 since month indices start from 0
  const currentYear = date.getFullYear();

  const lastFourMonths = [];
  for (let i = 4; i >= 0; i--) {
    const month = (currentMonth - i + 11) % 11; // Wrap around to the previous year if necessary
    const year = month > currentMonth ? currentYear - 1 : currentYear;
    lastFourMonths.push({ month: pad(month + 1), year });
  }

  return lastFourMonths;
}

const today = new Date();
const monthsWithYear = getCurrentAndLastThreeMonths(today);

const transactions = [
  {
    id: "37f8628f-870a-4e6a-bf2c-eea0743aed9c",
    title: "Salary",
    amount: 3000,
    type: "income",
    category: "Salary",
    date: `${monthsWithYear[0].year}-${monthsWithYear[0].month}-01`,
  },
  {
    id: "981e4400-d07b-4e29-8198-fd2df9f7ca57",
    title: "Rent",
    amount: 1000,
    type: "expense",
    category: "Housing",
    date: `${monthsWithYear[0].year}-${monthsWithYear[0].month}-03`,
  },
  {
    id: "88675ce4-4c54-4c97-ad7d-8e1abd447fbf",
    title: "Website",
    amount: 381,
    type: "income",
    category: "Freelance",
    date: `${monthsWithYear[0].year}-${monthsWithYear[0].month}-10`,
  },
  {
    id: "e0903efe-860d-493b-a340-f1c6b2e16d75",
    title: "Theater Play",
    amount: 50,
    type: "expense",
    category: "Entertainment",
    date: `${monthsWithYear[0].year}-${monthsWithYear[0].month}-10`,
  },
  {
    id: "939223bf-8ddb-4c64-8c74-d03d57ca5da1",
    title: "Rock Concert",
    amount: 148,
    type: "expense",
    category: "Entertainment",
    date: `${monthsWithYear[0].year}-${monthsWithYear[0].month}-11`,
  },
  {
    id: "b7e2d9d0-c7b8-4f3c-9f1c-e7c8d7c9c4f3",
    title: "Mevlana",
    amount: 196,
    type: "expense",
    category: "Food",
    date: `${monthsWithYear[0].year}-${monthsWithYear[0].month}-16`,
  },
  {
    id: "95732de2-a6cb-468a-aad6-43496ca31e0e",
    title: "Salary",
    amount: 3000,
    type: "income",
    category: "Salary",
    date: `${monthsWithYear[1].year}-${monthsWithYear[1].month}-01`,
  },
  {
    id: "703cb2ed-88c5-410c-87d4-e90c54b4850a",
    title: "Rent",
    amount: 1000,
    type: "expense",
    category: "Housing",
    date: `${monthsWithYear[1].year}-${monthsWithYear[1].month}-03`,
  },
  {
    id: "d108810b-2bb8-4743-b8d9-b28e3dafe87f",
    title: "Video Games",
    amount: 65,
    type: "expense",
    category: "Entertainment",
    date: `${monthsWithYear[1].year}-${monthsWithYear[1].month}-13`,
  },
  {
    id: "31186eb1-0d0d-4125-91c5-f783f451c8db",
    title: "Purino",
    amount: 40,
    type: "expense",
    category: "Food",
    date: `${monthsWithYear[1].year}-${monthsWithYear[1].month}-22`,
  },
  {
    id: "3d5d1569-316d-4740-b411-e005f7e99b1f",
    title: "Web App",
    amount: 416,
    type: "income",
    category: "Freelance",
    date: `${monthsWithYear[1].year}-${monthsWithYear[1].month}-25`,
  },
  {
    id: "da5711a7-0e10-4081-b59e-36f214ed9d2f",
    title: "Gift",
    amount: 58,
    type: "income",
    category: "Personal",
    date: `${monthsWithYear[1].year}-${monthsWithYear[1].month}-26`,
  },
  {
    id: "553c6eb6-c56f-41cb-ac1f-bf2da727fd79",
    title: "Salary",
    amount: 3000,
    type: "income",
    category: "Salary",
    date: `${monthsWithYear[2].year}-${monthsWithYear[2].month}-01`,
  },
  {
    id: "04d98baf-597f-4bc7-be15-283f3d854f1f",
    title: "Rent",
    amount: 1000,
    type: "expense",
    category: "Housing",
    date: `${monthsWithYear[2].year}-${monthsWithYear[2].month}-03`,
  },
  {
    id: "8e80557a-6717-4ec3-8473-8d7766a86df3",
    title: "Investment",
    amount: 984,
    type: "expense",
    category: "Investments",
    date: `${monthsWithYear[2].year}-${monthsWithYear[2].month}-05`,
  },
  {
    id: "3841ee6d-5615-48db-8c66-a9a00d64e152",
    title: "Theater Play",
    amount: 38,
    type: "expense",
    category: "Entertainment",
    date: `${monthsWithYear[2].year}-${monthsWithYear[2].month}-06`,
  },
  {
    id: "8b5b0a47-ac99-46ba-a0c6-2155602731d5",
    title: "Gym",
    amount: 67,
    type: "expense",
    category: "Fitness",
    date: `${monthsWithYear[2].year}-${monthsWithYear[2].month}-08`,
  },
  {
    id: "fe968bc4-7322-4e8b-86ca-99b59ce6120c",
    title: "Investment",
    amount: 1726,
    type: "expense",
    category: "Investments",
    date: `${monthsWithYear[2].year}-${monthsWithYear[2].month}-08`,
  },
  {
    id: "77582341-8940-4be4-a49e-2efdaeefe10b",
    title: "Rock Concert",
    amount: 158,
    type: "expense",
    category: "Entertainment",
    date: `${monthsWithYear[2].year}-${monthsWithYear[2].month}-24`,
  },
  {
    id: "1efc4cdf-729e-4f09-a486-45843fe6b5b6",
    title: "Groceries",
    amount: 88,
    type: "expense",
    category: "Food",
    date: `${monthsWithYear[2].year}-${monthsWithYear[2].month}-26`,
  },
  {
    id: "8c05b9f4-157a-4ba0-a550-6b5b5e07b79b",
    title: "Salary",
    amount: 3000,
    type: "income",
    category: "Salary",
    date: `${monthsWithYear[3].year}-${monthsWithYear[3].month}-01`,
  },
  {
    id: "18cae2a0-c1d8-45df-981a-5b04207317bc",
    title: "Rent",
    amount: 1000,
    type: "expense",
    category: "Housing",
    date: `${monthsWithYear[3].year}-${monthsWithYear[3].month}-03`,
  },
  {
    id: "e676c2ec-9220-4213-a98a-99b00c35b283",
    title: "Video Games",
    amount: 66,
    type: "expense",
    category: "Entertainment",
    date: `${monthsWithYear[3].year}-${monthsWithYear[3].month}-09`,
  },
  {
    id: "a6dde827-e0a9-44ec-bc31-1ab75a22367c",
    title: "Consulting Fee",
    amount: 960,
    type: "income",
    category: "Freelance",
    date: `${monthsWithYear[3].year}-${monthsWithYear[3].month}-15`,
  },
  {
    id: "8ac36bbe-bac2-4e80-8710-63846a5b0c56",
    title: "Gift",
    amount: 59,
    type: "expense",
    category: "Personal",
    date: `${monthsWithYear[3].year}-${monthsWithYear[3].month}-16`,
  },
  {
    id: "a5a1c370-891e-42f1-a875-3aac2fc8bc3a",
    title: "Investment Fees",
    amount: 96,
    type: "expense",
    category: "Investments",
    date: `${monthsWithYear[3].year}-${monthsWithYear[3].month}-17`,
  },
  {
    id: "8b67deab-3570-41b6-81aa-22b3b9538211",
    title: "Investment",
    amount: 1047,
    type: "expense",
    category: "Investments",
    date: `${monthsWithYear[3].year}-${monthsWithYear[3].month}-27`,
  },
  {
    id: "5cbeb406-8cfc-4a7e-a72c-cfdf858a274c",
    title: "Movie Tickets",
    amount: 28,
    type: "expense",
    category: "Entertainment",
    date: `${monthsWithYear[3].year}-${monthsWithYear[3].month}-28`,
  },
  {
    id: "53e10062-a1c1-436a-967d-9424f48f621e",
    title: "Workshop Fee",
    amount: 1200,
    type: "income",
    category: "Freelance",
    date: `${monthsWithYear[3].year}-${monthsWithYear[3].month}-29`,
  },
  {
    id: "13901d03-930b-47c6-9859-8e658716d1dc",
    title: "Dividends",
    amount: 90,
    type: "income",
    category: "Investments",
    date: `${monthsWithYear[3].year}-${monthsWithYear[3].month}-29`,
  },
  {
    id: "2c13c80a-3711-4f7f-9e55-1a9840a0400f",
    title: "Salary",
    amount: 3000,
    type: "income",
    category: "Salary",
    date: `${monthsWithYear[4].year}-${monthsWithYear[4].month}-01`,
  },
];

if (today.getDate() >= 1) {
  transactions.push({
    id: "e3bf6556-5b18-482a-8766-9450268f520d",
    title: "Movie Tickets",
    amount: 28,
    type: "expense",
    category: "Entertainment",
    date: `${monthsWithYear[4].year}-${monthsWithYear[4].month}-01`,
  });
}

if (today.getDate() >= 2) {
  transactions.push({
    id: "52ce5a57-59a3-44eb-aae4-435872d2d27f",
    title: "Investment Fees",
    amount: 96,
    type: "expense",
    category: "Investments",
    date: `${monthsWithYear[4].year}-${monthsWithYear[4].month}-02`,
  });
}

if (today.getDate() >= 3) {
  transactions.push({
    id: "045f88f0-335e-4f1b-b228-7b5d73e90c61",
    title: "Rent",
    amount: 1000,
    type: "expense",
    category: "Housing",
    date: `${monthsWithYear[4].year}-${monthsWithYear[4].month}-03`,
  });
}

if (today.getDate() >= 7) {
  transactions.push(
    ...[
      {
        id: "f8391ea6-3bfc-4f7f-af08-54ec123b61bd",
        title: "Video Games",
        amount: 66,
        type: "expense",
        category: "Entertainment",
        date: `${monthsWithYear[4].year}-${pad(monthsWithYear[4].month)}-${pad(
          today.getDate() - 3,
        )}`,
      },
      {
        id: "05374021-1ec8-42f5-9632-bd6296246f69",
        title: "Website",
        amount: 457,
        type: "income",
        category: "Freelance",
        date: `${monthsWithYear[4].year}-${pad(monthsWithYear[4].month)}-${pad(
          today.getDate() - 1,
        )}`,
      },
      {
        id: "d23f31c4-acb8-4241-a624-63a07a6713e6",
        title: "Gift",
        amount: 59,
        type: "expense",
        category: "Personal",
        date: `${monthsWithYear[4].year}-${pad(monthsWithYear[4].month)}-${pad(
          today.getDate(),
        )}`,
      },
    ],
  );
}

export default transactions.reverse();
