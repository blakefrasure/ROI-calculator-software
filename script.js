const salePriceInput = document.getElementById("salePrice");
const interestRateInput = document.getElementById("interestRate");
const loanTermInput = document.getElementById("loanTerm");

const loanTermValue = document.getElementById("loanTermValue");
const monthlyPaymentOutput = document.getElementById("monthlyPayment");
const totalReturnOutput = document.getElementById("totalReturn");
const extraProfitOutput = document.getElementById("extraProfit");

function formatCurrency(value) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0
    }).format(value);
}

function calculateSellerAdvantage() {
    const carValue = Math.max(Number(salePriceInput.value) || 0, 0);
    const interestRate = Math.max(Number(interestRateInput.value) || 0, 0);
    const loanTerm = Math.max(Number(loanTermInput.value) || 12, 1);
    const monthlyRate = interestRate / 100 / 12;

    let monthlyPayment = 0;

    if (monthlyRate === 0) {
        monthlyPayment = carValue / loanTerm;
    } else {
        monthlyPayment = (carValue * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -loanTerm));
    }

    const totalReturn = monthlyPayment * loanTerm;
    const extraProfit = totalReturn - carValue;

    loanTermValue.textContent = `${loanTerm} months`;
    monthlyPaymentOutput.textContent = formatCurrency(monthlyPayment);
    totalReturnOutput.textContent = formatCurrency(totalReturn);
    extraProfitOutput.textContent = formatCurrency(extraProfit);
}

[salePriceInput, interestRateInput, loanTermInput].forEach((input) => {
    input.addEventListener("input", calculateSellerAdvantage);
});

calculateSellerAdvantage();
