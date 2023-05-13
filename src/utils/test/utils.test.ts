import { Contacts } from 'models/interfaces';
import {
  generateFullname,
  generateId,
  fetchMockUsers,
  createContactList,
} from 'utils/global';

describe('generateId function', () => {
  it('should generate a string with a default length of 10', () => {
    const result = generateId();
    expect(result.length).toEqual(10);
  });

  it('should generate a string with the specified length', () => {
    const result = generateId(5);
    expect(result.length).toEqual(5);
  });

  it('should generate a string with only numbers when containNumbers is true', () => {
    const result = generateId(10, {
      containNumbers: true,
      containAlphabet: false,
    });
    expect(result).toMatch(/^[0-9]{10}$/);
  });

  it('should generate a string with only alphabets when containAlphabet is true', () => {
    const result = generateId(10, {
      containNumbers: false,
      containAlphabet: true,
    });
    expect(result).toMatch(/^[A-Za-z]{10}$/);
  });

  it('should generate a string with both numbers and alphabets when containNumbers and containAlphabet are true', () => {
    const result = generateId(10, {
      containNumbers: true,
      containAlphabet: true,
    });
    expect(result).toMatch(/^[A-Za-z0-9]{10}$/);
  });
});

describe('generateFullname', () => {
  it('returns the correct full name', async () => {
    const users = await fetchMockUsers();
    expect(generateFullname(users[0])).toBe('Jayden, CLARK');
  });
});

describe('createContactList', () => {
  it('should return an empty object when passed an empty array', () => {
    const result = createContactList([]);
    expect(result).toEqual({});
  });

  it('should group users by the first letter of their last name', async () => {
    const users = await fetchMockUsers();
    const result: Contacts = createContactList(users);

    // Write some example
    const contact_c = Object.keys(result['c']);
    const contact_r = Object.keys(result['r']);
    const contact_t = Object.keys(result['t']);

    expect(contact_c).toEqual(['Jayden,Clark', 'Noah,Christensen']);
    expect(contact_r).toEqual(['Beatrice,Roy']);
    expect(contact_t).toEqual(['Archie,Thomas', 'Alfred,Thomsen']);
  });
});
