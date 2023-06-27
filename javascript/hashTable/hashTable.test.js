const HashTable = require('./HashTable.js');

describe('HashTable', () => {
  test('Setting a key/value to the hashtable should store the value', () => {
    const table = new HashTable();
    table.set('key', 'value');
    expect(table.get('key')).toEqual('value');
  });

  test('Retrieving based on a key should return the stored value', () => {
    const table = new HashTable();
    table.set('key', 'value');
    expect(table.get('key')).toEqual('value');
  });

  test('Retrieving a key that does not exist should return null', () => {
    const table = new HashTable();
    expect(table.get('nonexistent')).toBeUndefined();
  });

  test('Getting all unique keys in the hashtable should return an array of keys', () => {
    const table = new HashTable();
    table.set('key1', 'value1');
    table.set('key2', 'value2');
    table.set('key3', 'value3');
    const keys = table.keys();
    expect(keys).toEqual(expect.arrayContaining(['key1', 'key2', 'key3']));
  });

  test('Handling collision within the hashtable should store both values', () => {
    const table = new HashTable(1); // Set size to 1 to force a collision
    table.set('key1', 'value1');
    table.set('key2', 'value2');
    expect(table.get('key1')).toEqual('value1');
    expect(table.get('key2')).toEqual('value2');
  });

  test('Retrieving a value from a bucket with collision should return the correct value', () => {
    const table = new HashTable(1); // Set size to 1 to force a collision
    table.set('key1', 'value1');
    table.set('key2', 'value2');
    expect(table.get('key1')).toEqual('value1');
    expect(table.get('key2')).toEqual('value2');
  });

  test('Hashing a key should return an in-range value', () => {
    const table = new HashTable(100); // Set size to 100
    const hash = table.hash('key');
    expect(hash).toBeGreaterThanOrEqual(0);
    expect(hash).toBeLessThan(100);
  });
});
