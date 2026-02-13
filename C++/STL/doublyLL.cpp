#include <iostream>
#include <list>
using namespace std;

int main() {
    list<int> l1 = {1,2,3,4,5,6};

    //iteration...

    l1.push_back(56);  // Add at end

    for (int num : l1) {
        cout << num << endl;
    }

    l1.push_front(5);  // Add at front
    for (int num : l1) {
        cout << num << endl;
    }


    return 0;
}