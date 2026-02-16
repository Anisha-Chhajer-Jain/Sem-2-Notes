#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> scores = {85, 90, 78, 92, 88};

    // Rotate the vector so that the second element comes first
    rotate(scores.begin(), scores.begin() + 1, scores.end());

    cout << "Rotated scores: ";
    for (const auto& score : scores) {
        cout << score << " ";
    }

    return 0;
}