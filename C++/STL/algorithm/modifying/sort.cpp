// #include<iostream>
// #include<vector>
// #include<algorithm>

// using namespace std;

// int main(){

// vector<int> v1 = {1,2,3,4,5};
// sort(v1.begin(),v1.end());

// for(auto& value : v1){
//     cout<<value<<endl;
// }
//     return 0;
// }

#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> scores = {85, 90, 78, 92, 88};

    // Sort scores in ascending order
    sort(scores.begin(), scores.end());

    cout << "Sorted scores: ";
    for (const auto& score : scores) {
        cout << score << " ";
    }

    return 0;
}