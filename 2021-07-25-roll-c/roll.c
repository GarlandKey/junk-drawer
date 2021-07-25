/* Roll
 * https://garlandkey.com
 * license: GPL 3.0
 */

#include <ctype.h>
#include <fcntl.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

void c(void);
void check_args(int, char *[]);
void d(int, char *[]);
void get_seed(void);
void help(void);
void p(void);
int roll(int, int);

int main (int argc, char *argv[])
{
    check_args(argc, argv);
}

void c(void)
{
    int n = roll(1, 2);
    
    if (n == 1)
    {
        printf("\n  Coin Flip: Heads\n\n");
    }
    else
    {
        printf("\n Coin Flip: Tails\n\n");
    }
}

void check_args(int argc, char *argv[])
{
    int s = 0;

    for (int i = 1, n = argc - 1; i <= n; i++ )
    {
        if ((argc == 2) &&
           (strcmp(argv[i], "-c") == 0) ||
           (strcmp(argv[i], "-C") == 0) ||
           (strcmp(argv[i], "--coin") == 0))
        {
            c();
        }
        else if ((argc == 4) &&
                (strcmp(argv[i], "-d") == 0) ||
                (strcmp(argv[i], "-D") == 0) ||
                (strcmp(argv[i], "--dice") == 0))
        {
            d(i + 1, argv);
        }
        else if ((argc == 2) &&
            (strcmp(argv[i], "-h") == 0) ||
            (strcmp(argv[i], "-H") == 0) ||
            (strcmp(argv[i], "--help") == 0))
        {
            help();
        }
        else if ((argc == 2) &&
                (strcmp(argv[i], "-p") == 0) ||
                (strcmp(argv[i], "-P") == 0) ||
                (strcmp(argv[i], "--perc") == 0))
        {
            p();
        }
        else
        {
            printf("\n  Invalid input. For help:\n"
                   "    roll --help\n\n");
        }
    }
}

/* This function provides the logic for rolling a set of dice according
 * to the provided elements passed to it.
 */

void d(int element, char *argv[])
{
    for (int i = 0, n = strlen(argv[element]); i < n; i++)
    {
        if(!isdigit(argv[element][i]))
        {
            help();
        }
    }

    for (int i = 0, n = strlen(argv[element + 1]); i < n; i++)
    {
        if(!isdigit(argv[element + 1][i]))
        {
            help();
        }
    }

    int count = atoi(argv[element + 1]);
    int sides = atoi(argv[element]);
    int total = 0;

    printf("\n  D%d: ", sides);

    for (int i = 0; i < count; i++)
    {
        int n = roll(1, sides);
        total += n;

        if( i < count - 1)
        {
            printf("%i, ", n);
        }
        else
        {
            printf("%i\n", n);
        }
    }
    if (count > 1)
    {
        printf("  Total:%i\n\n", total);
    }
    else
    {
        printf("\n");
    }
    exit(0);
}

void help(void) // works
{
    printf("\n  Roll\n"
           "    -c, --coin  Flips a coin\n"
           "\n"
           "    -d, --dice  Rolls dice based on user input\n"
           "                  Usage:\n"
           "                    roll [-d] <number of sides> <number of dice>\n"
           "\n"
           "    -h, --help  Show help options\n"
           "\n"
           "    -p, --perc  Rolls a pair of percentiles\n"
           "\n");
    exit(0);
}

void p(void)
{
    int p = roll(0, 100);

    printf("\n  Percentiles: %d\%\n\n", p);
    exit(0);
}

int roll(int min, int max)
{
    get_seed(); // necessary to get random numbers each time roll is called.

    int random = min + rand() % (max + 1 - min);
    //int random = rand() % (max + 1 - min) + min;

    return random;
}

void get_seed(void)
{
    unsigned int seed;
    int fp = open("/dev/random", O_RDONLY);
    if( fp )
    {
        read(fp, &seed, sizeof(seed));
        close(fp);
        srand(seed);
    }
}