

#include <iostream>
using namespace std;

class Person {
protected:
    string name;
    int age;

public:
    void inputPerson() {
        cout << "Likh naam jaldi: ";
        cin >> name;
        cout << "Likh age chup chap: ";
        cin >> age;
    }

    void displayPerson() {
        cout << "Le Name: " << name << endl;
        cout << "Le Age: " << age << endl;
    }
};

class Employee : public Person {
protected:
    int emp_id;
    float salary;

public:
    void inputEmployee() {
        inputPerson();  
        cout << "likh Employee ID: ";
        cin >> emp_id;
        cout << "aur Enter kar Salary: ";
        cin >> salary;
    }

    void displayEmployee() {
        displayPerson();
        cout << " le Employee ID: " << emp_id << endl;
        cout << "le teri Salary: " << salary << endl;
    }
};

class Manager : public Employee {
private:
    string department;

public:
    void inputManager() {
        inputEmployee();
        cout << "jaldi write your Department: ";
        cin >> department;
    }

    void displayManager() {
        displayEmployee();
        cout << "Department: " << department << endl;
    }
};

int main() {
    Manager m;

    cout << "Enter Manager Details\n";
    m.inputManager();

    cout << "\nManager Details\n";
    m.displayManager();

    return 0;
}


