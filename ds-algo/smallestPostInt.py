def smallest_positive(in_list):
    # TODO: Define a control structure that finds the smallest positive
    # number in in_list and returns the correct smallest number.
    smallest_pos = None
    for num in in_list:
        if num > 0:
            # Note: we use a logical "or" in this solution to form
            # the conditional statement, although this was
            # not introduced above.
            if smallest_pos == None or num < smallest_pos:
                smallest_pos = num
    return smallest_pos


print(smallest_positive([4, -6, 7, 2, -4, 10]))
