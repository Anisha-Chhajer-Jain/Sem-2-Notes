// #include <iostream>
// using namespace std;

// int main() {
//     for(int i = 1; i <= 5; i++) {
//         cout << i << endl;
//     }
//     return 0;
// }

#include <iostream>
using namespace std;

int main() {

    // Part 1: Even index check using continue
    for (int i = 0; i < 5; i++) {
        if (i % 2 == 0) {
            cout << "Current index is even: " << i << endl;
        } else {
            continue;
        }
    }

    cout << endl;

    // Part 2: Array declaration
    int arr[5] = {1, 2, 3, 4, 5};

    // Size of array in bytes
    cout << sizeof(arr) << endl;

    // Number of elements in array
    cout << sizeof(arr) / sizeof(arr[0]) << endl;

    cout << endl;

    // Part 3: Print array elements
    for (int i = 0; i < 5; i++) {
        cout << "Current index value of " << i << " is " << arr[i] << endl;
    }

    return 0;
}
