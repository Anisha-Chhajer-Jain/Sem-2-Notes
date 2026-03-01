#include <iostream>
#include <map>
#include <fstream>
using namespace std;

// Base class
class Numbers {
protected:
    float a, b;

public:
    void getNumbers() {
        cout << "Enter first number: ";
        cin >> a;
        cout << "Enter second number: ";
        cin >> b;
    }
};

// Operation classes
class Add : virtual public Numbers {
public:
    float addition(map<string,int>& counter, ofstream& file) {
        counter["add"]++;
        float result = a + b;
        file << "ADD: " << a << " + " << b << " = " << result << endl;
        return result;
    }
};

class Sub : virtual public Numbers {
public:
    float subtraction(map<string,int>& counter, ofstream& file) {
        counter["sub"]++;
        float result = a - b;
        file << "SUB: " << a << " - " << b << " = " << result << endl;
        return result;
    }
};

class Mul : virtual public Numbers {
public:
    float multiplication(map<string,int>& counter, ofstream& file) {
        counter["mul"]++;
        float result = a * b;
        file << "MUL: " << a << " * " << b << " = " << result << endl;
        return result;
    }
};

class Div : virtual public Numbers {
public:
    float division(map<string,int>& counter, ofstream& file) {
        counter["div"]++;
        if (b != 0) {
            float result = a / b;
            file << "DIV: " << a << " / " << b << " = " << result << endl;
            return result;
        } else {
            cout << "Cannot divide by zero!" << endl;
            file << "DIV: Division by zero attempted (" << a << "/" << b << ")" << endl;
            return 0;
        }
    }
};

// Final Calculator class
class Calculator : public Add, public Sub, public Mul, public Div {
};

int main() {
    Calculator calc;
    map<string,int> counter;
    ofstream file("result.txt");   // File created

    if (!file) {
        cout << "Error opening file!" << endl;
        return 1;
    }

    calc.getNumbers();

    cout << "Addition = " << calc.addition(counter, file) << endl;
    cout << "Subtraction = " << calc.subtraction(counter, file) << endl;
    cout << "Multiplication = " << calc.multiplication(counter, file) << endl;
    cout << "Division = " << calc.division(counter, file) << endl;

    file << "\nFunction Call Count:\n";
    file << "Add called: " << counter["add"] << " times\n";
    file << "Sub called: " << counter["sub"] << " times\n";
    file << "Mul called: " << counter["mul"] << " times\n";
    file << "Div called: " << counter["div"] << " times\n";

    file.close();   // Close file

    cout << "\nResults saved in result.txt file" << endl;

    return 0;
}