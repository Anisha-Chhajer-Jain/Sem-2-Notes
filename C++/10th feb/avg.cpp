#include <iostream>
#include <cstdio>
using namespace std;

int main() {
    int marks[5];
    int s=0;
    float avg;

    printf("Likh na bhaii marks:\n");
    for (int i = 0; i < 5; i++) {
        scanf("%d", &marks[i]);
        s=s+marks[i];
    }

    avg = s/5.0;

    printf("Average marks = %.2f\n", avg);

    printf("Marks >= average\n");
    for (int i = 0; i < 5; i++) {
        if (marks[i] >= avg) {
            printf("%d",marks[i]);
        }
    }
    return 0;
}

