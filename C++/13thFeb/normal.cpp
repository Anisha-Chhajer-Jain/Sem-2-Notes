#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> v = {10, 20, 30};
    v.push_back(40); 
    v.insert(v.begin() + 1, 15); 
    v.pop_back();

    for (int num : v) {
        cout << num << " ";
    }
    return 0;
}
