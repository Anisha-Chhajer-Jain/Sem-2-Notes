#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> scores = {85, 90, 78, 92, 88};

    // Reverse the order of scores
    reverse(scores.begin(), scores.end());

    cout << "Reversed scores: ";
    for (const auto& score : scores) {
        cout << score << " ";
    }

    return 0;
}