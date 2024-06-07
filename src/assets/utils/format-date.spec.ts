import { formatDate } from "./formatData";

describe('formatDate', () => {
  it('should format date correctly for "Date" type', () => {
    const isoDateString = '2023-06-07T14:30:00Z';
    const result = formatDate(isoDateString, 'Date');
    expect(result).toBe('07/06/2023');
  });

  it('should format date and time correctly for "DateTime" type', () => {
    const isoDateString = '2023-06-07T14:30:00Z';
    const result = formatDate(isoDateString, 'DateTime');
    expect(result).toBe('07/06/2023 às 11:30h');
  });

  it('should format date correctly for a different date', () => {
    const isoDateString = '2022-12-25T08:15:00Z';
    const result = formatDate(isoDateString, 'Date');
    expect(result).toBe('25/12/2022');
  });

  it('should format date and time correctly for a different date and time', () => {
    const isoDateString = '2022-12-25T08:15:00Z';
    const result = formatDate(isoDateString, 'DateTime');
    expect(result).toBe('25/12/2022 às 05:15h');
  });
});
