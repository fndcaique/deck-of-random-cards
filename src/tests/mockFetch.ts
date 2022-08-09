import { mockResponseData } from './mockData';
const mockFetch = () =>
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockResponseData),
  } as unknown as Response);

export default mockFetch;
