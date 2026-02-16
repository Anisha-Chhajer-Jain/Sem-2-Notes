// // create a vector of 10 elements take input form user then erase all even element, then print the remaining 
// // elements and totals size


// #include <iostream>
// #include <vector>

// using namespace std;

// int main() {
//     vector<int> v;
//     int num;

//     cout << "Enter 10 numbers:\n";

//     for(int i = 0; i < 10; i++) {
//         cin >> num;
//         v.push_back(num);
//     }


//     for(int i = 0; i < v.size(); i++) {
//         if(i % 2 == 0) {       
//             v.erase(v.begin() + i);
//             i--;                 
//         }
//     }

 
//     cout << "\nRemaining elements:\n";
//     for(int i = 0; i < v.size(); i++) {
//         cout << v[i] << " ";
//     }

  
//     cout << "\nTotal size: " << v.size();

//     return 0;
// }
