#include <iostream>
using namespace std;

float add(float a,float b) {
    return a + b;
}

float subtract(float a,float b) {
    return a - b;
}

float multiply(float a,float b) {
    return a * b;
}

float divide(float a,float b) {
    return a / b;
}

int main() {
    float num1, num2;

    cout << "likh do number chup chap: ";
    cin >> num1 >> num2;


    cout << "\nAddition:" << add(num1, num2);
    cout << "\nSubtraction:" << subtract(num1, num2);
    cout << "\nMultiplication:" << multiply(num1, num2);

    if (num2 != 0)
        cout << "\nDivision:" << divide(num1, num2);
    else
        cout << "\ndivision by zero";

    return 0;
}
