#!/bin/bash
NOW=$(date +"%m-%d-%y-%H%M%S")    #Date format
############### MAIN MENU ###############
cat asciiArt.txt
f_mainMenu(){
clear
cat asciiArt.txt
echo "[*] Enter '1' for items to be brought by you."
echo "[*] Enter '2' to view the timetable for the event."
echo "[*] Enter '3' to view the rules and guidelines for the event."
}
