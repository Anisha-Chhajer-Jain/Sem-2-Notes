#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> scores = {85, 90, 78, 92, 88};
    vector<int> doubledScores(scores.size());

    // Apply a function to double each score
    transform(scores.begin(), scores.end(), doubledScores.begin(), [](int score) { return score * 2; });

    cout << "Doubled scores: ";
    for (const auto& score : doubledScores) {
        cout << score << " ";
    }

    return 0;
}