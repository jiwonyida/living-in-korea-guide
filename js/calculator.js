// Korea Rent Wiki - Rental Cost Calculator
// Korean Statutory Brokerage Commission, Move-in Cash, and True Monthly Cost Simulator
// Multi-currency support: KRW, USD, CNY, JPY

const KRW_PER_USD = 1380;
const KRW_PER_CNY = 190;
const KRW_PER_JPY = 9.2; // 1 JPY ≈ 9.2 KRW

const calculatorState = {
  deposit: 10000000, // 10,000,000 KRW
  rent: 700000,      // 700,000 KRW
  maintenance: 80000,// 80,000 KRW
  realtorFeeMode: "auto", // "auto" or "manual"
  manualRealtorFee: 300000,
  utilities: {
    water: true,
    internet: true,
    cleaning: true,
    elevator: false,
    gas: false,
    electricity: false
  },
  setupBuffer: 150000 // Move-in cleaning / garbage bags / basic supplies
};

/**
 * Calculates the statutory maximum brokerage commission in Korea (주택임대차 중개보수 법정 요율)
 */
function calculateStatutoryRealtorFee(deposit, rent) {
  let convertedAmount = deposit + (rent * 100);
  if (convertedAmount < 50000000) {
    convertedAmount = deposit + (rent * 70);
  }

  let fee = 0;
  let rate = 0;
  let cap = Infinity;

  if (convertedAmount < 50000000) {
    rate = 0.005;
    cap = 200000;
  } else if (convertedAmount < 100000000) {
    rate = 0.004;
    cap = 300000;
  } else if (convertedAmount < 600000000) {
    rate = 0.003;
    cap = Infinity;
  } else if (convertedAmount < 1200000000) {
    rate = 0.004;
    cap = Infinity;
  } else {
    rate = 0.005;
    cap = Infinity;
  }

  fee = Math.min(convertedAmount * rate, cap);
  // Add 10% VAT
  const vat = Math.round(fee * 0.1);
  const total = Math.round(fee + vat);

  return {
    convertedAmount,
    baseFee: fee,
    vat,
    total,
    ratePercent: (rate * 100).toFixed(1) + "%",
    hasCap: cap !== Infinity,
    capAmount: cap
  };
}

/**
 * Calculates the entire cost model
 */
function computeRentalCosts() {
  const deposit = Number(calculatorState.deposit) || 0;
  const rent = Number(calculatorState.rent) || 0;
  const maintenance = Number(calculatorState.maintenance) || 0;

  // Realtor Fee
  const statutory = calculateStatutoryRealtorFee(deposit, rent);
  const effectiveRealtorFee = calculatorState.realtorFeeMode === "auto" 
    ? statutory.total 
    : (Number(calculatorState.manualRealtorFee) || 0);

  // Unincluded utilities estimate
  let estimatedExtraUtilities = 0;
  if (!calculatorState.utilities.electricity) estimatedExtraUtilities += 25000; // avg power
  if (!calculatorState.utilities.gas) estimatedExtraUtilities += 30000; // avg gas/heating
  if (!calculatorState.utilities.water) estimatedExtraUtilities += 12000; // avg water
  if (!calculatorState.utilities.internet) estimatedExtraUtilities += 25000; // avg wifi

  // 1. Total Move-In Cash Needed
  const totalMoveIn = deposit + rent + maintenance + effectiveRealtorFee + calculatorState.setupBuffer;

  // 2. True Monthly Housing Cost
  const trueMonthly = rent + maintenance + estimatedExtraUtilities;

  return {
    deposit,
    rent,
    maintenance,
    effectiveRealtorFee,
    statutory,
    setupBuffer: calculatorState.setupBuffer,
    estimatedExtraUtilities,
    totalMoveIn,
    trueMonthly,
    currencyEstimates: {
      moveInUSD: Math.round(totalMoveIn / KRW_PER_USD),
      moveInCNY: Math.round(totalMoveIn / KRW_PER_CNY),
      moveInJPY: Math.round(totalMoveIn / KRW_PER_JPY),
      monthlyUSD: Math.round(trueMonthly / KRW_PER_USD),
      monthlyCNY: Math.round(trueMonthly / KRW_PER_CNY),
      monthlyJPY: Math.round(trueMonthly / KRW_PER_JPY),
      depositUSD: Math.round(deposit / KRW_PER_USD),
      depositCNY: Math.round(deposit / KRW_PER_CNY),
      depositJPY: Math.round(deposit / KRW_PER_JPY),
      rentUSD: Math.round(rent / KRW_PER_USD),
      rentCNY: Math.round(rent / KRW_PER_CNY),
      rentJPY: Math.round(rent / KRW_PER_JPY)
    }
  };
}

function formatKRW(val) {
  return new Intl.NumberFormat('ko-KR').format(val) + " ₩";
}

function formatUSD(val) {
  return "$" + new Intl.NumberFormat('en-US').format(val);
}

function formatCNY(val) {
  return "¥" + new Intl.NumberFormat('zh-CN').format(val);
}

function formatJPY(val) {
  return "¥" + new Intl.NumberFormat('ja-JP').format(val);
}

// Preset applier
function applyPreset(presetType) {
  if (presetType === "student") {
    calculatorState.deposit = 5000000;
    calculatorState.rent = 500000;
    calculatorState.maintenance = 50000;
    calculatorState.utilities = {
      water: true,
      internet: true,
      cleaning: true,
      elevator: false,
      gas: false,
      electricity: false
    };
  } else if (presetType === "officetel") {
    calculatorState.deposit = 10000000;
    calculatorState.rent = 800000;
    calculatorState.maintenance = 120000;
    calculatorState.utilities = {
      water: false,
      internet: false,
      cleaning: true,
      elevator: true,
      gas: false,
      electricity: false
    };
  } else if (presetType === "tworoom") {
    calculatorState.deposit = 20000000;
    calculatorState.rent = 1250000;
    calculatorState.maintenance = 150000;
    calculatorState.utilities = {
      water: false,
      internet: false,
      cleaning: true,
      elevator: true,
      gas: false,
      electricity: false
    };
  }
}

window.calculator = {
  state: calculatorState,
  computeRentalCosts,
  calculateStatutoryRealtorFee,
  applyPreset,
  formatKRW,
  formatUSD,
  formatCNY,
  formatJPY
};
