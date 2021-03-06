
export enum SimulationResultType {
    DataResult = "DATA_RESULT"
}

export interface SimulationDataPoint {
    probability: number,
    completions: number
}

export interface DataSimulationResult {
    type: SimulationResultType.DataResult,
    iterations: number,
    attempts: number,
    dataPoints: SimulationDataPoint[]
}

export type SimulationResult = DataSimulationResult
