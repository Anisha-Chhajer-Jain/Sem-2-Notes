// // #include <iostream>
// // #include <fstream>

// // using namespace std;

// // int main(){

// //  ofstream file;

// //  file.open("sample.txt",ios::app);

// //  if(file.is_open()){
// //     file<< "Second time using the file operation"<<endl;
// //     file.close();
// //  }

// //     return 0;
// // }

// #include <iostream>
// #include <string>
// #include <fstream>

// using namespace std;

// int main(){

//     string onelinestatement;

//     ifstream file1;

//     file1.open("sample.txt");

//     if (filel.is_open()){
//         cout << "The actual data is gonnna print for a given file below: " << endl;
//         while (getline(file1, onelinestatement))
//         {
//             cout << onelinestatement << endl;

//         }
//             file1.close();
//         }

//         return 0;
//     }
#include <iostream>
#include <string>
#include <fstream>

using namespace std;

int main() {

    string onelinestatement;
    ifstream file1;

    file1.open("sample.txt");

    if (file1.is_open()) {
        cout << "The actual data is gonna print for the given file below:\n";

        while (getline(file1, onelinestatement)) {
            cout << onelinestatement << endl;
        }

        file1.close();
    }

    return 0;
}
