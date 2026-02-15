

#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> v;
    int x;
    cout << "Enter 5 numbers:\n";
    for (int i = 0; i < 5; i++) {
        cin >> x;
        v.push_back(x);
    }
    sort(v.begin(), v.end());
    reverse(v.begin(), v.end());// Reverse the vector
    cout << "after sorting and reversing:\n";  // Print vector elements one by one

    for (int i = 0; i < v.size(); i++) {
        cout << v[i] << endl;
    }
    return 0;
}

