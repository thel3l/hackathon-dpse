#thel3l
#      Installing Requirements:                                #
#        pip install git+https://github.com/pwaller/pyfiglet   #
#        pip install colorama                                  #
#        pip install termcolor                                 #
#       pip install blessings                                  #

import sys
import os
from colorama import init
init(strip=not sys.stdout.isatty())
from termcolor import cprint
from pyfiglet import figlet_format
import time
from blessings import Terminal
t = Terminal()

def cleardeadbodies():
    if (os.name == "posix"):
        os.system("clear")
    else:
        os.system("cls")

cleardeadbodies()

print("You are about to be shown the Guidelines for the DPS Hackathon..")
time.sleep (3)
cleardeadbodies()
print("Prepare well young 'un, for this will not be easy.")
time.sleep(3)
cleardeadbodies()
time.sleep(4)
cprint(figlet_format('         DPS              EAST     ', font='starwars'),
       'yellow', 'on_red', attrs=['bold'])
print("PRESENTS:")
time.sleep(4)
cleardeadbodies()
cprint(figlet_format(' <0d3 f3st', font='starwars'),
       'green', 'on_grey', attrs=['bold'])

def instructions_end_user():
    print t.green("[*] Enter '1' for items to be brought by you.")
    print t.green("[*] Enter '2' to view the timetable for the event.")
    print t.green("[*] Enter '3' to view the rules and guidelines for the event.")

instructions_end_user()

usr_input = input("Option: ")
while (usr_input != 1) and (usr_input != 2) and (usr_input != 3):
    usr_input = input("Option: ")
if usr_input == 1:
    cleardeadbodies()
    print("For the Hackathon, you will be expected to bring the following items:\n")
    print("1. Laptops\n2. Smartphones\n3. Chargers\n4. Internet Dongle\n5. Ideas\n6. A backpack\n7. Headphones\n8. Extension board\n9. Notebook & Pen\n10. Flash Drives")
if usr_input == 2:
    cleardeadbodies()
    print t.green("[*] The timings for the programme will be as follows:\n")
    print("0700 to 0800 hours  - Schools arrive.\n0800 hours   -   Registration closes\n0800 to 0825 hours   -   Prinicipal's Keynote\n0830 to 1230 hours  -   Coding.\n1230 hours   -   Lunch will be available.\n1230 to 1800 hours  -   Coding.\n1800 hours onwards -   Judging begins.")
if usr_input == 3:

elif:
    cleardeadbodies()
    print t.red("Follow the instructions!")
    
