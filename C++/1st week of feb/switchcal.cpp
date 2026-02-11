#include <iostream>
using namespace std;

float add(float a, float b);
float subtract(float a, float b);
float multiply(float a, float b);
float divide(float a, float b);

int main() {
    float num1, num2;
    int choice;

    cout << "likh first no. jaldi: ";
    cin >> num1;
    cout << "second bhi likh de chup chap: ";
    cin >> num2;

    cout << "\nChoose operation:\n";
    cout << "1.\n";
    cout << "2.\n";
    cout << "3.\n";
    cout << "4.\n";
    cout << "choice likho jaldi:-";
    cin >> choice;

    switch (choice) {
        case 1:
            cout << "Result = " << add(num1, num2);
            cout << "Yayyyyy 7 crore";
            break;
        case 2:
            cout << "Result = " << subtract(num1, num2);
            cout << "Yayyyyy 7 crore";
            break;
        case 3:

            cout << "Result = " << multiply(num1, num2);
            cout << "Yayyyyy 7 crore";
            break;
        case 4:
            if (num2 != 0){
                cout << "Result = " << divide(num1, num2);
                cout << "Yayyyyy 7 crore";
            }
            else
                cout << "Error! Division by zero.";
            break;
        default:
            cout << "\nInvalid choice!";
            cout << "Chal bhag";
    }

    return 0;
}

float add(float a, float b) {
    return a + b;
}

float subtract(float a, float b) {
    return a - b;
}

float multiply(float a, float b) {
    return a * b;
}

float divide(float a, float b) {
    return a / b;
}
