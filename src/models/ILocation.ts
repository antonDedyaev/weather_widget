export default interface Location {
  id: number;
  order: number;
  name: string;
  country: string;
  date: string[];
  temperature: number;
  feelTemperature: number;
  image: string;
  description: string;
  windSpeed: number;
  windDirection: string;
  pressure: number;
  humidity: number;
  visibility: number;
}
