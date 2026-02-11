#include <iostream>
using namespace std;

int main() {
   int num, og, rev=0;
    cout << "Enter a number: ";
    cin >> num;

    og = num;

    while (num > 0) {
        rev = rev * 10 +(num%10);
        num /= 10;
    }

    if(og==rev)
    cout << "Palindrome number";
    else
    cout << "Not a palindrome number";

    return 0;
}
