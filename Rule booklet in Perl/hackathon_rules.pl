#!/usr/bin/perl -w
use warnings;
use Term::ANSIColor;

########## DEFINING THE OPTIONS FOR THE BOOKLET ##########
$option1 = "[*] For the Hackathon, you will be expected to bring the following items:\n1. Laptops\n2. Smartphones\n3. Chargers\n4. Internet Dongle\n5. Ideas\n6. A backpack\n7. Headphones\n8. Extension board\n9. Notebook & Pen\n10. Flash Drives\n";
$option2 = "[*] The timings for the programme will be as follows:\n0700 to 0800 hours    Schools arrive.\n0800 hours            Registration closes\n0800 to 0825 hours    Prinicipal's Keynote\n0830 to 1230 hours   Coding.\n1230 hours            Lunch will be available.\n1230 to 1800 hours    Coding.\n1800 hours onwards    Judging begins.\n";
$option3 = "[*] The rules for the programme are:\n\n1. You can have a maximum of 5 members in a team.\n2. To ensure a level field for all contestants, all code, design, art, music and assets MUST be created during the duration of the Hackathon. \n   We want to ensure that all participants start off on the same footing and we also want \n   to preserve the true nature of a hackathon. The only exception to this rule would include material that is freely available to the public like\n   Creative Commons Images and third party apis.\n3. Winning submissions may be subject to code review.\n   Be kind to others. Do not insult or put down other attendees. Behave professionally. Remember that harassment and racist, sexist, or exclusionary \n   jokes are not appropriate for this event.\n   Hack, meet new people, get creative, and have a good time. Getting something meaningful done within such a short amount of time can be stressful, \n   but we'd like to encourage everyone to take a break every now and then to relax and enjoy the event.\n \r";

print "\033[2J";           #clear the screen
print "\033[0;0H";         #jump to 0,0

my $acciiArt = 'asciiArt.txt';
open(my $fh, '<:encoding(UTF-8)', $asciiArt.txt)
  or die "ascii Art not available.";

  while (my $row = <$fh>) {
    chomp $row;
    print "$row\n";
  }

print color('green');      #print subsequent text in green until a reset.
print "[*] Enter '1' for items to be brought by you.\n";
print "[*] Enter '2' to view the timetable for the event.\n";
print "[*] Enter '3' to view the rules and guidelines for the event.\n";
print color('reset');      #reset the text color.
print "Option:";
my $option = <STDIN>;     #accept integer type user-input.
chomp $option;
  if ($option == 1) {     #execute this if the user chooses option 1
    print "\033[2J";       #clear the screen
    print "\033[0;0H";     #jump to 0,0
    print "$option1"
  }
  elsif ($option == 2) {  #execute this if the user chooses option 1
    print "\033[2J";       #clear the screen
    print "\033[0;0H";     #jump to 0,0
    print "$option2";
  }
  elsif ($option == 3) {  #execute this if the user chooses option 1
    print "\033[2J";       #clear the screen
    print "\033[0;0H";     #jump to 0,0
    print "$option3";
  }
# exit 0 if $option != 1 | $option != 2 | $option != 3;
