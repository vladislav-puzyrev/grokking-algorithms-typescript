import binarySearch from './binarySearch';
import dumpSearch from './dumpSearch';
import benchmark from '../benchmark';

// Большой отсортированный массив - [0, 1, 2, 3, 4, ... 9999999]
const array = Array.from(new Array(10000000).keys());

// Бинарный поиск работает только с сортированными массивами!!!
// Поэтому при добавлении каких-то данных в массив придется каждый раз
// обеспечивать целостность сортировки

benchmark(binarySearch, [array, 9999999]); // O(n)     ~2мс
benchmark(dumpSearch, [array, 9999999]);   // O(log n) ~76мс
