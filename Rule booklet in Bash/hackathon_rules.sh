#!/bin/bash
NOW=$(date +"%m-%d-%y-%H%M%S")    #Date format
GREENCOL='\033[0;32m'
DEFAULTCOL='\033[0m'
BLUECOL='\033[0;36m'
REDCOL='\033[0;31m'
############### MAIN MENU ###############
function splashscreens {
clear
echo "Welcome. This is the rule booklet for the DPS East c0def3st"
sleep 3
clear
echo "Prepare well young 'un."
sleep 5
clear
echo -e "${GREENCOL}"
echo " ______   _______  _______        _______  _______  _______ _________
(  __  \ (  ____ )(  ____ \      (  ____ \(  ___  )(  ____ \\__   __/
| (  \  )| (    )|| (    \/      | (    \/| (   ) || (    \/   ) (   
| |   ) || (____)|| (_____       | (__    | (___) || (_____    | |   
| |   | ||  _____)(_____  )      |  __)   |  ___  |(_____  )   | |   
| |   ) || (            ) |      | (      | (   ) |      ) |   | |   
| (__/  )| )      /\____) |      | (____/\| )   ( |/\____) |   | |   
(______/ |/       \_______)      (_______/|/     \|\_______)   )_(   
                                                                     
"
echo -e "${DEFAULTCOL}"
echo "PRESENTS"
sleep 4
clear
echo -e "${BLUECOL}"
echo " _______  _______  ______   _______    _______  ______   _______ _________
(  ____ \(  __   )(  __  \ (  ____ \  (  ____ \/ ___  \ (  ____ \\__   __/
| (    \/| (  )  || (  \  )| (    \/  | (    \/\/   \  \| (    \/   ) (   
| |      | | /   || |   ) || (__      | (__       ___) /| (_____    | |   
| |      | (/ /) || |   | ||  __)     |  __)     (___ ( (_____  )   | |   
| |      |   / | || |   ) || (        | (            ) \      ) |   | |   
| (____/\|  (__) || (__/  )| (____/\  | )      /\___/  //\____) |   | |   
(_______/(_______)(______/ (_______/  |/       \______/ \_______)   )_(   
                                                                          "
echo -e "${DEFAULTCOL}"
}
function f_mainMenu {
echo -e "${GREENCOL}"
echo "[*] Enter '1' for items to be brought by you."
echo "[*] Enter '2' to view the timetable for the event."
echo "[*] Enter '3' to view the rules and guidelines for the event."
echo "[*] Enter 'quit' or 'exit' or Ctrl-C to exit the program."
echo -e "${DEFAULTCOL}"
}

############### OPTION 1  ###############
function f_option1 {
echo -e "${BLUECOL}"
echo "[*] For the Hackathon, you will be expected to bring the following items:"
echo -e "${DEFAULTCOL}"
echo "1. Laptops"
echo "2. Smartphones"
echo "3. Chargers"
echo "4. Internet Dongle"
echo "5. Ideas"
echo "6. A backpack"
echo "7. Headphones"
echo "8. Extension board"
echo "9. Notebook & Pen"
echo "10. Flash Drives"
}
function f_option2 {
	echo -e "${BLUECOL}[*] The timings for the programme will be as follows:\n${DEFAULTCOL}0700 to 0800 hours    Schools arrive.\n0800 hours            Registration closes\n0800 to 0825 hours    Prinicipal's Keynote\n0830 to 1230 hours   Coding.\n1230 hours            Lunch will be available.\n1230 to 1800 hours    Coding.\n1800 hours onwards    Judging begins.\n"
}
function f_option3 {
	echo -e "${BLUECOL}[*] The rules for the programme are:\n${DEFAULTCOL}1. You can have a maximum of 5 members in a team.\n2. To ensure a level field for all contestants, all code, design, art, music and assets MUST be created during the duration of the Hackathon.\n  We want to ensure that all participants start off on the same footing and we also want \n  to preserve the true nature of a hackathon. The only exception to this rule would include material that is freely available to the public like\n  Creative Commons Images and third party apis.\n3. Winning submissions may be subject to code review.\n4. Be kind to others. Do not insult or put down other attendees. Behave professionally. Remember that harassment and racist, sexist, or exclusionary \n  jokes are not appropriate for this event.\n5. Hack, meet new people, get creative, and have a good time. Getting something meaningful done within such a short amount of time can be stressful, \n  but we'd like to encourage everyone to take a break every now and then to relax and enjoy the event.\n"
}
function bashtrap {
	clear
	echo -e "${BLUECOL}"
	echo " _______  _______  _______  ______     _                 _______  _                                       
(  ____ \(  ___  )(  ___  )(  __  \   ( \      |\     /|(  ____ \| \    /\                                
| (    \/| (   ) || (   ) || (  \  )  | (      | )   ( || (    \/|  \  / /                                
| |      | |   | || |   | || |   ) |  | |      | |   | || |      |  (_/ /                                 
| | ____ | |   | || |   | || |   | |  | |      | |   | || |      |   _ (                                  
| | \_  )| |   | || |   | || |   ) |  | |      | |   | || |      |  ( \ \                                 
| (___) || (___) || (___) || (__/  )  | (____/\| (___) || (____/\|  /  \ \ _                              
(_______)(_______)(_______)(______/   (_______/(_______)(_______/|_/    \/( )                             
                                                                          |/                              
          _______  _______  _______   _________ _______                                                   
|\     /|(  ___  )(  ____ )(  ____ \  \__   __/(  ___  )                                                  
| )   ( || (   ) || (    )|| (    \/     ) (   | (   ) |                                                  
| (___) || |   | || (____)|| (__         | |   | |   | |                                                  
|  ___  || |   | ||  _____)|  __)        | |   | |   | |                                                  
| (   ) || |   | || (      | (           | |   | |   | |                                                  
| )   ( || (___) || )      | (____/\     | |   | (___) |                                                  
|/     \|(_______)|/       (_______/     )_(   (_______)                                                  
                                                                                                          
 _______  _______  _______             _______            _________          _______  _______  _______    
(  ____ \(  ____ \(  ____ \  |\     /|(  ___  )|\     /|  \__   __/|\     /|(  ____ \(  ____ )(  ____ \   
| (    \/| (    \/| (    \/  ( \   / )| (   ) || )   ( |     ) (   | )   ( || (    \/| (    )|| (    \/   
| (_____ | (__    | (__       \ (_) / | |   | || |   | |     | |   | (___) || (__    | (____)|| (__       
(_____  )|  __)   |  __)       \   /  | |   | || |   | |     | |   |  ___  ||  __)   |     __)|  __)      
      ) || (      | (           ) (   | |   | || |   | |     | |   | (   ) || (      | (\ (   | (         
/\____) || (____/\| (____/\     | |   | (___) || (___) |     | |   | )   ( || (____/\| ) \ \__| (____/\ _ 
\_______)(_______/(_______/     \_/   (_______)(_______)     )_(   |/     \|(_______/|/   \__/(_______/(_)
                                                                                                          "
	sleep 3
	clear
	echo -e "${DEFAULTCOL}"
	exit 0
}
function maincontrol {
	while true; do
		read -p "Option:" option
		case $option in 
			1) clear
				f_option1
				f_mainMenu
				;;
			2) clear
				f_option2
				f_mainMenu
				;;
			3) clear
				f_option3
				f_mainMenu
				;;
			quit) bashtrap
				;;
			exit) bashtrap
				;;
			* ) clear
				echo -e "${REDCOL}[*] Please enter one of the options mentioned below:"
				f_mainMenu
				;;
		esac
	done

}
trap bashtrap SIGINT
echo -e "${DEFAULTCOL}"
splashscreens
f_mainMenu
maincontrol