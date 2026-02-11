// #include <iostream>
// #include <fstream>
// using namespace std;

// int main() {
//     int n, a = 0, b = 1, c;

//     cout << "Enter number of terms: ";
//     cin >> n;

//     ofstream fout("fibonacci.txt");

//     if (!fout) {
//         cout << "Error opening file!" << endl;
//         return 1;
//     }

//     fout << "Fibonacci Series:\n";

//     for (int i = 1; i <= n; i++) {
//         fout << a << " ";
//         c = a + b;
//         a = b;
//         b = c;
//     }

//     fout.close();

//     ifstream fin("fibonacci.txt");

//     cout << "\nData read from file:\n";
//     char ch;
//     while (fin.get(ch)) {
//         cout << ch;
//     }

//     fin.close();

//     return 0;
// }
#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
    int n, a = 0, b = 1, next;

    cout << "Enter number of terms: ";
    cin >> n;

 
    ofstream fout;
    fout.open("fibonacci.txt");

    if (!fout) {
        cout << "File could not be opened!";
        return 1;
    }

    fout << "Fibonacci Series:\n";

    for (int i = 1; i <= n; i++) {
        fout << a << " ";
        next = a + b;
        a = b;
        b = next;
    }

    fout.close();

    ifstream fin;
    fin.open("fibonacci.txt");

    if (!fin) {
        cout << "File could not be opened!";
        return 1;
    }

    cout << "\nReading from file:\n";
    string line;
    while (getline(fin, line)) {
        cout << line << endl;
    }

    fin.close();

    return 0;
}