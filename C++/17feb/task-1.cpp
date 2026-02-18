#include <iostream>
#include <vector>
#include <algorithm>
#include <fstream>
using namespace std;

int main() {
    // int n;
    cout << "Enter size " << endl;
    int n;
    cin >> n;

    vector<int> v(n);

    cout << "Enter " << n << " elements:\n";
    for(int i = 0; i < n; i++) {
        cin >> v[i];
    }

   
    sort(v.begin(), v.end());

    reverse(v.begin(), v.end());

 
    ofstream fout("operation.txt");

    if(!fout) {
        cout << "Error opening file!" << endl;
        return 1;
    }

    fout << "Sorted and Reversed Vector:\n";
    for(const auto &x : v) {
        fout << x << " ";
    }

    fout.close();

    cout << "Result stored in operation.txt successfully." << endl;

    return 0;
}