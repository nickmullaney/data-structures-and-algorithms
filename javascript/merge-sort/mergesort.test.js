const { MergeSort } = require('./index');

describe('MergeSort', () => {
  let mergeSort;

  beforeEach(() => {
    mergeSort = new MergeSort();
  });

  describe('mergeSort', () => {
    it('should sort the array in ascending order', () => {
      const arr = [5, 3, 8, 4, 2];
      mergeSort.mergeSort(arr);
      expect(arr).toEqual([2, 3, 4, 5, 8]);
    });

    it('should handle an empty array', () => {
      const arr = [];
      mergeSort.mergeSort(arr);
      expect(arr).toEqual([]);
    });

    it('should handle an array with a single element', () => {
      const arr = [1];
      mergeSort.mergeSort(arr);
      expect(arr).toEqual([1]);
    });

    it('should handle an array with duplicate elements', () => {
      const arr = [5, 3, 8, 4, 2, 3, 8, 4, 2];
      mergeSort.mergeSort(arr);
      expect(arr).toEqual([2, 2, 3, 3, 4, 4, 5, 8, 8]);
    });
  });
});
