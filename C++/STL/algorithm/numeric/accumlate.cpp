#include <iostream>
#include <vector>
#include <numeric>
using namespace std;

int main() {
    vector<int> scores = {85, 90, 78, 92, 88};

    // Calculate the sum of scores
    int total = accumulate(scores.begin(), scores.end(), 0);

    cout << "Total score: " << total << endl;

    return 0;
}