#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> n;
    int x;
    cout << "Enter 5 numbers:\n";
    for (int i = 0; i < 5; i++) {
        cin >> x;
        n.push_back(x);
    }
    sort(n.begin(), n.end());
    reverse(n.begin(), n.end());// Reverse the vector
    cout << "Vector elements after sorting and reversing:\n";  // Print vector elements one by one

    for (int i = 0; i < n.size(); i++) {
        cout << n[i] << endl;
    }
    return 0;
}
