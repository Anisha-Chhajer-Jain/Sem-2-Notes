#include <iostream>
#include <string>
#include <fstream>

using namespace std;

int main() {
    ofstream file;
    string msg;

    file.open("sample.txt");

    if (!file) {
        cout << "Error aagya pls check" << endl;
        return 1;
    }

    cout << "Likh message chup chap: ";
    getline(cin, msg);

    file << msg;
    file.close();
    cout << "likh diya msg -- sample.txt" << endl;

    return 0;
}
