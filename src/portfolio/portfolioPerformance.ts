interface PortfolioPerformance {
    initialInvestment: number;
    currentValue: number;
    profitOrLoss: number;
    percentageChange: number;
    performanceSummary: string
}

export function calculatePortfolioPerformance(initialInvestment: number, currentValue: number): PortfolioPerformance {

	const profitOrLoss: number = currentValue - initialInvestment;

	const percentageChange: number = (profitOrLoss / initialInvestment) * 100;

    // Used Object Lookup to do preformance summary conditionals.
    type SummaryKey =
    "gainSignificant" |
    "gainModerate" |
    "gainSlightly" |
    "noChange" |
    "lossSlightly"|
    "lossModerate" |
    "lossSignificant";

    const summaries: Record<SummaryKey, string> = {
        gainSignificant: `The portfolio has gained significantly with a profit of $${profitOrLoss}.`,
        gainModerate: `The portfolio has gained moderately with a profit of $${profitOrLoss}.`,
        gainSlightly: `The portfolio has gained slightly with a profit of $${profitOrLoss}.`,
        noChange: `The portfolio has not changed.`,
        lossSlightly: `The portfolio has lossed slightly with a loss of $${profitOrLoss}.`,
        lossModerate: `The portfolio has lossed moderately with a loss of $${profitOrLoss}.`,
        lossSignificant: `The portfolio has lossed significantly with a loss of $${profitOrLoss}.`
    };

    let performanceSummary =
    percentageChange > 20 ? summaries.gainSignificant :
    percentageChange > 10 ? summaries.gainModerate :
    percentageChange > 0.1 ? summaries.gainSlightly :
    percentageChange === 0 ? summaries.noChange :
    percentageChange < -20 ? summaries.lossSignificant :
    percentageChange < -10 ? summaries.lossModerate :
    percentageChange < -0.1 ? summaries.lossSlightly :
    summaries.noChange;

	const portfolioPerformance: PortfolioPerformance = {
		initialInvestment,
		currentValue,
		profitOrLoss,
		percentageChange,
		performanceSummary,
	}

    return portfolioPerformance;
}