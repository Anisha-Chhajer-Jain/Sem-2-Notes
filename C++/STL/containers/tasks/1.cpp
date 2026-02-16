// use stl vector and insert 5 value from the user-side,then sort in ascendoing order,reverse it and atlast print the find vector
// one by one.

#include <iostream>
#include <vector>

using namespace std;

int main() {
    vector<int> vec;
    int value;

   
    cout << "Enter 5 values:\n";
    for(int i = 0; i < 5; i++) {
        cin >> value;
        vec.push_back(value);
    }

   
    for(int i = 0; i < vec.size() - 1; i++) {
        for(int j = 0; j < vec.size() - i - 1; j++) {
            if(vec[j] > vec[j + 1]) {
                int temp = vec[j];
                vec[j] = vec[j + 1];
                vec[j + 1] = temp;
            }
        }
    }

  
    int start = 0;
    int end = vec.size() - 1;

    while(start < end) {
        int temp = vec[start];
        vec[start] = vec[end];
        vec[end] = temp;

        start++;
        end--;
    }

  
    cout << "\nFinal vector elements:\n";
    for(int i = 0; i < vec.size(); i++) {
        cout << vec[i] << endl;
    }

    return 0;
}