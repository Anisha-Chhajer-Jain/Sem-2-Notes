#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> v1 = {85, 90, 78, 92, 88};
    vector<int> v2(5);
copy(v1.begin(),v1.end(),v2.begin());

for(const auto& value : v2){
    cout<< value << endl;
}

    return 0;
}