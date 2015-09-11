//by thel3l.
#include <stdio.h>
#define MAX_LEN 1024

void print_image(FILE *fptr);
//ascii art for "DPS East"
int main(void)
{
    char *filename = "asciilel.txt";      //Open a text file called asciilel.txt
    FILE *fptr = NULL;

    if((fptr = fopen(filename,"r")) == NULL)
    {
        fprintf(stderr,"error opening %s\n",filename);  //If there is no file by the name, then whine.
        return 1337;      //geddit?
    }

    print_image(fptr);

    fclose(fptr);

    return 0;
}

void print_image(FILE *fptr)
{
    char read_geniass[1024];

    while(fgets(read_geniass,sizeof(read_geniass),fptr) != NULL)
        printf("%s",read_geniass);
      //bLEK.
int option;
      scanf("%d", &option);
if ( option == 1) {
      printf("\n1. You can have a maximum of 5 members in a team.");
      printf("\n2. To ensure a level field for all contestants, all code, design, art, music and assets MUST be created during the duration of the Hackathon. \n   We want to ensure that all participants start off on the same footing and we also want \n   to preserve the true nature of a hackathon. The only exception to this rule would include material that is freely available to the public like\n");
      printf("   Creative Commons Images and third party apis.");
      printf("\n3. Winning submissions may be subject to code review.");
      printf("\n   Be kind to others. Do not insult or put down other attendees. Behave professionally. Remember that harassment and racist, sexist, or exclusionary \n   jokes are not appropriate for this event.");
      printf("\n   Hack, meet new people, get creative, and have a good time. Getting something meaningful done within such a short amount of time can be stressful, \n   but we'd like to encourage everyone to take a break every now and then to relax and enjoy the event.\n \r");    }

}
