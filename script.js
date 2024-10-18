import { inject } from '@vercel/analytics';
inject();


function calculate() {
    // Get input values (prices for Grey, Green, Blue, Purple, Red, Yellow ranks)
    const grey = parseFloat(document.getElementById('num1').value);
    const green = parseFloat(document.getElementById('num2').value);
    const blue = parseFloat(document.getElementById('num3').value);
    const purple = parseFloat(document.getElementById('num4').value);
    const red = parseFloat(document.getElementById('num5').value);
    const yellow = parseFloat(document.getElementById('num6').value);

    // Ensure all values are valid numbers
    if (isNaN(grey) || isNaN(green) || isNaN(blue) || isNaN(purple) || isNaN(red) || isNaN(yellow)) {
        document.getElementById('result').innerHTML = "Please enter valid numbers for all ranks.";
        return;
    }

    // Define rank-up costs in URP
    const rankUpCosts = [0, 1, 1, 2, 5, 10]; // grey -> green -> blue -> purple -> red -> yellow
    const prices = [grey, green, blue, purple, red, yellow]; // prices for each rank
    const sellTax = 0.1; // 10% selling tax

    let bestInvestment = {
        buyRank: null,
        sellRank: null,
        profitPerURP: -Infinity,
        totalProfit: 0,
        totalURP: 0
    };

    // Loop over each buy-sell pair of ranks
    for (let i = 0; i < prices.length; i++) { // buy rank
        for (let j = i + 1; j < prices.length; j++) { // sell rank
            const buyPrice = prices[i];
            const sellPrice = prices[j];
            const urpCost = rankUpCosts.slice(i + 1, j + 1).reduce((a, b) => a + b, 0); // Total URP cost from rank i to rank j
            const netSellPrice = sellPrice * (1 - sellTax); // Net price after selling tax
            const profit = netSellPrice - buyPrice; // Total profit
            const profitPerURP = profit / urpCost; // Profit per URP

            // Check if this is the best investment so far
            if (profitPerURP > bestInvestment.profitPerURP) {
                bestInvestment = {
                    buyRank: i,
                    sellRank: j,
                    profitPerURP: profitPerURP,
                    totalProfit: profit,
                    totalURP: urpCost
                };
            }
        }
    }

    // Format numbers with commas and no decimals
    function formatNumber(num) {
        return Math.floor(num).toLocaleString('en-US');
    }

    // Display the result with images
    const rankNames = ["Grey", "Green", "Blue", "Purple", "Red", "Yellow"];
    const rankImages = [
        "grey-rank.png",
        "green-rank.png",
        "blue-rank.png",
        "purple-rank.png",
        "red-rank.png",
        "yellow-rank.png"
    ];

    if (bestInvestment.profitPerURP > 0) {
        const buyImage = `<img src="${rankImages[bestInvestment.buyRank]}" alt="${rankNames[bestInvestment.buyRank]} Rank" style="width: 40px; height: 40px;">`;
        const sellImage = `<img src="${rankImages[bestInvestment.sellRank]}" alt="${rankNames[bestInvestment.sellRank]} Rank" style="width: 40px; height: 40px;">`;
        
        document.getElementById('result').innerHTML = `
            Best investment: Buy at ${buyImage} and sell at ${sellImage}.<br>
            Profit per URP: <strong>${formatNumber(bestInvestment.profitPerURP)} FC Coins</strong><br>
            Total Profit: <strong>${formatNumber(bestInvestment.totalProfit)} FC Coins</strong> with <strong>${bestInvestment.totalURP} URP</strong>.
        `;
    } else {
        document.getElementById('result').innerHTML = "No profitable investment found.";
    }
}
