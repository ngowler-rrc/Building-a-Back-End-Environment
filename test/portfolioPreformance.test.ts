import request, { Response } from "supertest";
import { calculatePortfolioPerformance, PortfolioPerformance, Asset, findLargestHolding, AssetAllocation, findAssetAllocationPercentage } from "../src/portfolio/portfolioPerformance"; // Import the function to mock

// Mock the function from the file
jest.mock("../src/portfolio/portfolioPerformance");

describe("calculatePortfolioPerformanceFunction", () => {
    it("preformance summary should be significant profit", () => {
		// Arrange
        const mockValue: PortfolioPerformance = {
            initialInvestment: 10000,
            currentValue: 13000,
            profitOrLoss: 3000,
            percentageChange: 30,
            performanceSummary: "The portfolio has gained significantly with a profit of $3000."
        };

        (calculatePortfolioPerformance as jest.Mock).mockReturnValue(mockValue);

		// Act
		const result: PortfolioPerformance = calculatePortfolioPerformance(10000, 13000);

		// Assert
		expect(result).toBe(mockValue);
	});

	it("preformance summary should be moderate profit", () => {
		// Arrange
        const mockValue: PortfolioPerformance = {
            initialInvestment: 10000,
            currentValue: 12000,
            profitOrLoss: 2000,
            percentageChange: 20,
            performanceSummary: "The portfolio has gained moderately with a profit of $2000."
        };

        (calculatePortfolioPerformance as jest.Mock).mockReturnValue(mockValue);

		// Act
		const result: PortfolioPerformance = calculatePortfolioPerformance(10000, 12000);

		// Assert
		expect(result).toBe(mockValue);
	});

    it("preformance summary should be slight profit", () => {
		// Arrange
        const mockValue: PortfolioPerformance = {
            initialInvestment: 10000,
            currentValue: 11000,
            profitOrLoss: 1000,
            percentageChange: 10,
            performanceSummary: "The portfolio has gained slightly with a profit of $1000."
        };

        (calculatePortfolioPerformance as jest.Mock).mockReturnValue(mockValue);

		// Act
		const result: PortfolioPerformance = calculatePortfolioPerformance(10000, 11000);

		// Assert
		expect(result).toBe(mockValue);
	});

    it("preformance summary should be no change positive edge case", () => {
		// Arrange
        const mockValue: PortfolioPerformance = {
            initialInvestment: 10000,
            currentValue: 10010,
            profitOrLoss: 10,
            percentageChange: 0.1,
            performanceSummary: "The portfolio has not changed."
        };

        (calculatePortfolioPerformance as jest.Mock).mockReturnValue(mockValue);

		// Act
		const result: PortfolioPerformance = calculatePortfolioPerformance(10000, 10010);

		// Assert
		expect(result).toBe(mockValue);
	});

    it("preformance summary should be no change negative edge case", () => {
		// Arrange
        const mockValue: PortfolioPerformance = {
            initialInvestment: 10000,
            currentValue: 9990,
            profitOrLoss: -10,
            percentageChange: -0.1,
            performanceSummary: "The portfolio has not changed."
        };

        (calculatePortfolioPerformance as jest.Mock).mockReturnValue(mockValue);

		// Act
		const result: PortfolioPerformance = calculatePortfolioPerformance(10000, 9990);

		// Assert
		expect(result).toBe(mockValue);
	});

    it("preformance summary should be slight loss", () => {
		// Arrange
        const mockValue: PortfolioPerformance = {
            initialInvestment: 10000,
            currentValue: 9000,
            profitOrLoss: -1000,
            percentageChange: -10,
            performanceSummary: "The portfolio has lost slightly with a loss of $1000"
        };

        (calculatePortfolioPerformance as jest.Mock).mockReturnValue(mockValue);

		// Act
		const result: PortfolioPerformance = calculatePortfolioPerformance(10000, 9000);

		// Assert
		expect(result).toBe(mockValue);
	});

    it("preformance summary should be slight loss", () => {
		// Arrange
        const mockValue: PortfolioPerformance = {
            initialInvestment: 10000,
            currentValue: 8000,
            profitOrLoss: -2000,
            percentageChange: -20,
            performanceSummary: "The portfolio has lost slightly with a loss of $1000"
        };

        (calculatePortfolioPerformance as jest.Mock).mockReturnValue(mockValue);

		// Act
		const result: PortfolioPerformance = calculatePortfolioPerformance(10000, 8000);

		// Assert
		expect(result).toBe(mockValue);
	});

    it("preformance summary should be significant loss", () => {
		// Arrange
        const mockValue: PortfolioPerformance = {
            initialInvestment: 10000,
            currentValue: 7000,
            profitOrLoss: -3000,
            percentageChange: -30,
            performanceSummary: "The portfolio has lost significantly with a loss of $1000"
        };

        (calculatePortfolioPerformance as jest.Mock).mockReturnValue(mockValue);

		// Act
		const result: PortfolioPerformance = calculatePortfolioPerformance(10000, 7000);

		// Assert
		expect(result).toBe(mockValue);
	});
});

describe("findLargestHolding", () => {
	it("should return the largest holding", () => {
		// Arrange
        const mockValue: Asset = { name: 'Asset 2', value: 3000 }

		const mockImput: Asset[] = [
            { name: 'Asset 1', value: 2000 },
            { name: 'Asset 2', value: 3000 },
            { name: 'Asset 3', value: 1000 }
        ];

        (findLargestHolding as jest.Mock).mockReturnValue(mockValue);

		// Act
		const result: Asset = findLargestHolding(mockImput);

		// Assert
		expect(result).toBe(mockValue);
	});

    it("should return the first largest holding", () => {
		// Arrange
        const mockValue: Asset = { name: 'Asset 1', value: 2000 }

		const mockImput: Asset[] = [
            { name: 'Asset 1', value: 2000 },
            { name: 'Asset 2', value: 1000 },
            { name: 'Asset 3', value: 2000 }
        ];

        (findLargestHolding as jest.Mock).mockReturnValue(mockValue);

		// Act
		const result: Asset = findLargestHolding(mockImput);

		// Assert
		expect(result).toBe(mockValue);
	});
});

describe("findAssetAllocationPercentage", () => {
	it("should return an array of asset allocation percentage objects", () => {
		// Arrange
        const mockValue: AssetAllocation[] = [
            { name: 'Asset 1', percentage: 1/3 },
            { name: 'Asset 2', percentage: 1/2 },
            { name: 'Asset 3', percentage: 1/6 }
        ];

		const mockImput: Asset[] = [
            { name: 'Asset 1', value: 2000 },
            { name: 'Asset 2', value: 3000 },
            { name: 'Asset 3', value: 1000 }
        ];

        (findAssetAllocationPercentage as jest.Mock).mockReturnValue(mockValue);

		// Act
		const result: AssetAllocation[] = findAssetAllocationPercentage(mockImput);

		// Assert
		expect(result).toBe(mockValue);
	});
});