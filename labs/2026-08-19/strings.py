first_name = "Harsh"
print(first_name)
print(type(first_name))

last_name = "Singh"
print(first_name + " " + last_name)
print(f"{first_name} {last_name}")

full_name = first_name + " " + last_name
print(len(full_name))
print(full_name[0])
print(full_name[-1])
print(full_name[len(full_name) - 1])
#print(full_name[50])

messy = "   senior engineer, azure   "
print(messy.strip())
print(messy.strip().upper())
print(messy.strip().replace("azure", "Azure"))
print(messy.count("e"))
print(messy.find("azure"))
print(messy.strip().find("azure"))

title = "python developer"
title = title.upper()
print(title)
#title[0] = "P"

item = "mechanical keyboard"
qty = 3
price = 4499.50
print(f"{qty} x {item} @ {price:.2f} = {qty * price:.2f}")
print("*" * 44)

#first = "  harsh  "
first = "  rahul  "
last = "  singh  "
role = "Senior Engineer, Azure"

print("=" * 40)
print(f"{first.strip().upper()} {last.strip().upper()}")
print(f"Initials: {first.strip().replace('harsh', 'H.')}{last.strip().replace('singh', 'S.')}")
print(f"Role: {role}")
print(f"Full name is {len(full_name)} characters long")
print("=" * 40)
