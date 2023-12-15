// Algorithm pattern: FREQUENZY LOOP
// Time complexity: O(N)
// Space complexity: O(N)

const isAnagram = (str1: string, str2: string): boolean => {
  // Check if two strings have same amount of same characters: "iceman" = "cinema"
  // create arrays for both strings
  const str1Arr = str1.split("");
  const str2Arr = str2.split("");
  // Create character object from first array and store its characters as keys with initial value of 1
  const str1Obj = {};
  // in case character object contains character already, increment its value by 1
  for (let ch1 in str1Arr) {
    str1Arr[ch1] in str1Obj
      ? (str1Obj[str1Arr[ch1]] += 1)
      : (str1Obj[str1Arr[ch1]] = 1);
  }
  // Loop thorough second string array characters to see if they exist in character object
  // if exists, decrement it from the character object
  for (let ch2 in str2Arr) {
    str2Arr[ch2] in str1Obj ? (str1Obj[str1Arr[ch2]] -= 1) : null;
  }
  // Create a new Set with unique values of the character object
  // create an array from the object values
  // if all values in the set are 0, then its size is 1, so return true
  const str1ObjArr = Array.from(Object["values"]<number>(str1Obj));
  const str1Set = new Set<number>(str1ObjArr);
  return str1Set.size === 1;
};

isAnagram("icemxn", "cinema");
