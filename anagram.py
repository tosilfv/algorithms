# Algorithm pattern: FREQUENZY LOOP
# Time complexity: O(N)
# Space complexity: O(N)

def is_anagram(str_1, str_2):
    # See if both the strings contain an equal amount of the same characters, if not, return False
    if len(str_1) != len(str_2):
        return False
    # Create dictionary and save characters there as keys with initial value 1
    str_1_dict = {}
    # save first string's characters to array
    str_1_list = list(str_1)
    # in dictionary increment value by 1 if key already exists
    for ch_1 in str_1_list:
        if ch_1 not in str_1_dict:
            str_1_dict.update({ch_1: 1})
        else:
            str_1_dict[ch_1] += 1
    # Compare second string characters and values to first string and return False if they don't match
    # make array of second string
    str_2_list = list(str_2)
    # if character from second string array is found on dict, decrement it
    for ch_2 in str_2_list:
        if ch_2 in str_1_dict:
            str_1_dict[ch_2] -= 1
    # In dict if key contains value larger than 1, return False
    # make a set of dict values, and if they are all 0, then length of set is 1, else return False
    val_set = set(str_1_dict.values())
    return True if len(val_set) == 1 else False


def main():
    print(is_anagram("iceman", "cinema"))


if __name__ == '__main__':
    main()
