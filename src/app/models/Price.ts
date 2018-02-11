export interface Price {
  cakePricePerPound?: number;
  cakePricePerKg?: number;
  pricePerSet?: PricePerSet[];
}
export interface PricePerSet {
  id?: number;
  setPrice: number;
  setSize: number;
}
