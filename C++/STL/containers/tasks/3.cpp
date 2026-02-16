// insert 3 strings in deque and using {at} method give the value

#include <iostream>
#include <deque>
#include <string>

using namespace std;

int main() {
    deque<string> dq;
    string value;

    cout << "Enter 3 strings:\n";
    
    for(int i = 0; i < 3; i++) {
        cin >> value;   
        dq.push_back(value);
    }

    cout << "THE OUTPUT IS:";
    for(int i = 0; i < 3; i++) {
        cout << dq.at(i) << endl;
    }

    return 0;
}
