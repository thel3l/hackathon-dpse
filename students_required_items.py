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
'''
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
'''
def instructions_end_user():
    print t.green("[*] Enter '1' for items to be brought by you.")
    print t.green("[*] Enter '2' to view the timetable for the event.")
    print t.green("[*] Enter '3' to view the rules and guidelines for the event.")

instructions_end_user()
invalid_input = True
def heart():
    usr_input = input("Option: ")
    while (usr_input != 1) and (usr_input != 2) and (usr_input != 3):
        usr_input = input("Option: ")
    if usr_input == 1:
        cleardeadbodies()
        print("For the Hackathon, you will be expected to bring the following items:\n")
        print("1. Laptops\n2. Smartphones\n3. Chargers\n4. Internet Dongle\n5. Ideas\n6. A backpack\n7. Headphones\n8. Extension board\n9. Notebook & Pen\n10. Flash Drives\n")
        invalid_input = False
        instructions_end_user()
    elif usr_input == 2:
        cleardeadbodies()
        print t.green("[*] The timings for the programme will be as follows:\n")
        print("0700 to 0800 hours  - Schools arrive.\n0800 hours   -   Registration closes\n0800 to 0825 hours   -   Prinicipal's Keynote\n0830 to 1230 hours  -   Coding.\n1230 hours   -   Lunch will be available.\n1230 to 1800 hours  -   Coding.\n1800 hours onwards -   Judging begins.\n")
        instructions_end_user()
        invalid_input = False
    elif usr_input == 3:
        cleardeadbodies()
        print t.green("[*] The rules for the programme are:\n")
        print("1. You can have a maximum of 5 members in a team.\n2. To ensure a level field for all contestants, all code, design, art, music and assets MUST be created during the duration of the Hackathon.\n  We want to ensure that all participants start off on the same footing and we also want \n  to preserve the true nature of a hackathon. The only exception to this rule would include material that is freely available to the public like\n  Creative Commons Images and third party apis.\n3. Winning submissions may be subject to code review.\n4. Be kind to others. Do not insult or put down other attendees. Behave professionally. Remember that harassment and racist, sexist, or exclusionary \n  jokes are not appropriate for this event.\n5. Hack, meet new people, get creative, and have a good time. Getting something meaningful done within such a short amount of time can be stressful, \n  but we'd like to encourage everyone to take a break every now and then to relax and enjoy the event.\n")
        instructions_end_user()
        invalid_input = False
    else:
        cleardeadbodies()
        print t.red("Sorry, that was an invalid option")
        instructions_end_user()
while invalid_input:
        # print t.red("Sorry, that was an invalid option")
        heart()
