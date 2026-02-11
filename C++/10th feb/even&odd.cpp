#include <iostream>
using namespace std;

int main() {
    int num;
    cout << "Enter a number:";
    cin >> num;

    if (num > 0)
        cout << "The number is Positive" << endl;
    else if (num < 0)
        cout << "The number is Negative" << endl;
    else
        cout << "The number is Zero" << endl;

    if (num != 0) {
        if (num % 2 == 0)
            cout << "The number is Even" << endl;
        else
            cout << "The number is Odd" << endl;
    }
    return 0;
}
