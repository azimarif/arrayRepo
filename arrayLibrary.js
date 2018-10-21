const isEven = function(number) {
  return number % 2 == 0;
}

const complementFunction = function(functionToCompliment) {
  return function(args) {
    return !functionToCompliment(args);
  }
}

const isOdd = complementFunction(isEven);

const filterOddNumbers = function(numbers) {
  return numbers.filter(isOdd);
}

const filterEvenNumbers = function(numbers) {
  return numbers.filter(isEven);
}

const sumOfTwoNumbers = function(sum, value) {
  return sum + value;
}

const calculateSum = function(numbers) {
  return numbers.reduce(sumOfTwoNumbers, 0);
}

const reverseArray = function(numbers) {
  return numbers.reduce(function(array, number) {
    array.unshift(number);
    return array;
  }, []);
}

const selectEverySecondNumber = function(numbers) {
  let filteredArray = [];
  for (let index = 0; index < numbers.length; index = index + 2) {
    filteredArray.push(numbers[index]);
  }
  return filteredArray;
}

const reverseFibonacciSeries = function(numberOfTerms) {
  let fibonacciTerms = [];
  let firstNumber = 0;
  let secondNumber = 1;
  let nextNumber = firstNumber + secondNumber;
  for (let count = 1; count < numberOfTerms; count++) {
    fibonacciTerms[count] = nextNumber;
    nextNumber = firstNumber + secondNumber;
    let temp = secondNumber;
    secondNumber = firstNumber + secondNumber;
    firstNumber = temp;
  }
  fibonacciTerms[0] = 0;
  return reverseArray(fibonacciTerms);
}

const maxNumberInAList = function(numbers) {
  return numbers.reduce(function(maxNumber, number) {
    if (number > maxNumber) {
      return number;
    }
    return maxNumber;
  });
}

const minNumberInAList = function(numbers) {
  return numbers.reduce(function(minNumber, number) {
    if (number > minNumber) {
      return minNumber;
    }
    return number;
  });
}

const averageOfArray = function(numbers) {
  let sum = calculateSum(numbers);
  let numberOfTerms = numbers.length;
  let average = sum / numberOfTerms;
  return average.toFixed(2);
}

const mappingNamesLengthToArray = function(names) {
  return names.map(function(name) {
    return name.length;
  });
}

const countOddNumbers = function(numbers) {
  return filterOddNumbers(numbers).length;
}

const countEvenNumbers = function(numbers) {
  return filterEvenNumbers(numbers).length;
}

const countNumbersAboveValue = function(numbers, thresholdValue) {
  return (numbers.filter(function(number) {
    return number > thresholdValue;
  })).length;
}

const countNumbersBelowValue = function(numbers, thresholdValue) {
  return (numbers.filter(function(number) {
    return number < thresholdValue;
  })).length;
}

const findIndexOfNumber = function(numbers, value) {
  return numbers.indexOf(value);
}
const isGreaterNumber = function(number1, number2) {
  return number1 >= number2;
}

const isLowerNumber = function(number1, number2) {
  return number1 <= number2;
}

const isAscending = function(numbers) {
  return isInOrder(numbers, isGreaterNumber);
}

const isInOrder = function(array, comparer) {
  return array.reduce(function(previousComparison, current) {
    let { element, order } = previousComparison;
    previousComparison.order = comparer(current, element) && order;
    previousComparison.element = current;
    return previousComparison;
  }, { element: array[0], order: true }).order;
}

const isDescending = function(numbers) {
  return isInOrder(numbers, isLowerNumber);
}

const extractDigits = function(number) {
  let digits = [];
  let numberToExtract = number;
  while (numberToExtract != 0) {
    digits.push(numberToExtract % 10);
    numberToExtract = Math.floor(numberToExtract / 10);
  }
  return reverseArray(digits);
}

const uniqueArrayElements = function(numbers) {
  return numbers.reduce(function(uniqueElements, number) {
    if (uniqueElements.includes(number)) {
      return uniqueElements;
    }
    uniqueElements.push(number);
    return uniqueElements;
  }, []);
}

const unionOfTwoArrays = function(firstElements, secondElements) {
  return uniqueArrayElements(firstElements.concat(secondElements));
}

const arrayIntersection = function(firstSet, secondSet) {
  return firstSet.reduce(function(set, number) {
    if (secondSet.includes(number)) {
      set.push(number);
      return set;
    }
    return set;
  }, []);
}

const uniqueElementsFromFirstSet = function(firstSet, secondSet) {
  return firstSet.reduce(function(set, number) {
    if (secondSet.includes(number)) {
      return set;
    }
    set.push(number);
    return set;
  }, []);
}

const isSubSet = function(superSetElements, subSetElements) {
  return subSetElements.every(function(element) {
    return superSetElements.includes(element);
  });
}

const zipArrayElements = function(firstElements, secondElements) {
  let zippedElements = [];
  for (let index = 0; index < firstElements.length; index++) {
    zippedElements[index] = [];
    zippedElements[index][0] = firstElements[index];
    zippedElements[index][1] = secondElements[index];
  }
  return zippedElements;
}

const rotateArray = function(elements, startingIndex) {
  let count = 0;
  for (let index = 0; index < startingIndex; index++) {
    elements.push(elements.shift());
  }
  return elements;
}

const partitionArray = function(elements, partitionElement) {
  return elements.reduce( function(array, element){
    if(element <= partitionElement){
      array[0].push(element);
      return array;
    }
    array[1].push(element);
    return array;
  }, [[],[]]);
}

exports.partitionArray = partitionArray;
exports.rotateArray = rotateArray;
exports.zipArrayElements = zipArrayElements;
exports.isSubSet = isSubSet;
exports.uniqueElementsFromFirstSet = uniqueElementsFromFirstSet;
exports.arrayIntersection = arrayIntersection;
exports.unionOfTwoArrays = unionOfTwoArrays;
exports.uniqueArrayElements = uniqueArrayElements;
exports.extractDigits = extractDigits;
exports.isDescending = isDescending;
exports.isAscending = isAscending;
exports.findIndexOfNumber = findIndexOfNumber;
exports.countNumbersBelowValue = countNumbersBelowValue;
exports.countNumbersAboveValue = countNumbersAboveValue;
exports.countEvenNumbers = countEvenNumbers;
exports.countOddNumbers = countOddNumbers;
exports.mappingNamesLengthToArray = mappingNamesLengthToArray;
exports.averageOfArray = averageOfArray;
exports.minNumberInAList = minNumberInAList;
exports.maxNumberInAList = maxNumberInAList;
exports.reverseFibonacciSeries = reverseFibonacciSeries;
exports.selectEverySecondNumber = selectEverySecondNumber;
exports.reverseArray = reverseArray;
exports.calculateSum = calculateSum;
exports.filterEvenNumbers = filterEvenNumbers;
exports.filterOddNumbers = filterOddNumbers;