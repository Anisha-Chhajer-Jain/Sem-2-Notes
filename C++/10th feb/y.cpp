#include <iostream>
#include <string>
using namespace std;

struct students {
    int ID;
    string name;
    int salary;
};

int main() {

    students stud[5];
    int n = 2;   
    int maxIndex = 0;

    for (int i = 0; i < n; i++) {
        cout << "Enter your ID: " << endl;
        cin >> stud[i].ID;

        cout << "Enter your NAME: " << endl;
        cin >> stud[i].name;

        cout << "Enter your salary: " << endl;
        cin >> stud[i].salary;
    }

    for (int i = 1; i < n; i++) {
        if (stud[i].salary > stud[maxIndex].salary) {
            maxIndex = i;
        }
    }

    cout << "\nGIVEN DATA OF STUDENTS ARE:\n";
    for (int i = 0; i < n; i++) {
        cout << "ID: " << stud[i].ID << endl;
        cout << "Name: " << stud[i].name << endl;
        cout << "Salary: " << stud[i].salary << endl << endl;
    }

    cout << "STUDENT WITH HIGHEST SALARY:\n";
    cout << "ID: " << stud[maxIndex].ID << endl;
    cout << "Name: " << stud[maxIndex].name << endl;
    cout << "Salary: " << stud[maxIndex].salary << endl;

    return 0;
}