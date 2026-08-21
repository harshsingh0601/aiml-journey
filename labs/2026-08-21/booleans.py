is_learning = True
print(is_learning)
print(type(is_learning))

score = 78
print(score == 78)
print(score >= 80)
print(score != 100)


temp = 34
humid = True
print(temp > 30 and humid)
print(temp > 30 or humid)
print(temp > 30 and not humid)

#True
print(True or False and False)
#False
print((True or False) and False)
#False
print(not True and False)
#True
print(not (True and False))

print(bool("0"))
print(bool("False"))

username = "  Harsh  "
password = ""
age = 43
print(f"name given: {bool(username.strip())}")
print(f"password given: {bool(password)}")
print(f"adult: {bool(age > 18)}")