def reverse_Of_Str(str):
    """
   Reverse the input string

   Args:
      our_string(string): String to be reversed
   Returns:
      string: The reversed string
   """

    str_position = len(str) - 1
    reverse_str = ""
    while(str_position >= 0):
        reverse_str += str[str_position]
        str_position -= 1
    return reverse_str


print("Pass" if("hello" == reverse_Of_Str("olleh")) else "Faile")
print("Pass" if("string" == reverse_Of_Str("gnirts")) else "Faile")


def reverse_Of_Str1(str):
    res = ""
    str_length = len(str)
    for i in range(str_length):
        res += str[(str_length-1) - i]
    return res


print("Pass" if ('retaw' == reverse_Of_Str1('water')) else "Fail")
