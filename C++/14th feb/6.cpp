


#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> v(10);

    cout << "jaldi enter kar 10 elements:\n";
    for (int i = 0; i < 10; i++) {
        cin >> v[i];
    }
    
    for (int i = v.size() - 1; i >= 0; i--) {
        if (i % 2 == 0) {
            v.erase(v.begin() + i);
        }
    }
    
    
    cout << "Remaining elements:\n";
    for (int num : v) {
        cout << num << " ";
    }
    cout << "\nafter deletion: " << v.size();

    return 0;
}

