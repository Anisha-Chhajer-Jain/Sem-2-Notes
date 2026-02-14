#include <iostream>
#include <set>
using namespace std;

int main() {
    multiset<int> ms = {10, 20, 30, 20}; 
    ms.insert(50);
    // ms.erase(20);
    // ms.count(20);
    // ms.find(30);

    for (int num : ms) {
        cout << num << " ";
    }
    return 0;
}