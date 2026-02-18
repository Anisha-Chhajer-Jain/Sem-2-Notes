#include <iostream>
#include <fstream>
#include <vector>
#include <limits> // for numeric_limits

using namespace std;

int main() {
    int n;
    cout << "Enter the size of the array: ";
    cin >> n;

    if (n <= 0) {
        cout << "Array size must be positive." << endl;
        return 1;
    }

    vector<int> arr(n);
    cout << "Enter " << n << " elements:\n";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    int maxElem = numeric_limits<int>::min();
    int minElem = numeric_limits<int>::max();
    int total = 0;

    for (int i = 0; i < n; i++) {
        if (arr[i] > maxElem) maxElem = arr[i];
        if (arr[i] < minElem) minElem = arr[i];
        total += arr[i];
    }

    ofstream outFile("result.txt");
    if (!outFile) {
        cout << "Error opening file!" << endl;
        return 1;
    }

    outFile << "Max. element: " << maxElem << endl;
    outFile << "Min. element: " << minElem << endl;
    outFile << "Total sum: " << total << endl;

    outFile.close();
    cout << "Results stored in result.txt" << endl;

    return 0;
}
