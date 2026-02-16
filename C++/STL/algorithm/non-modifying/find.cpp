#include<iostream>
#include<vector>
#include<algorithm>

using namespace std;

int main(){

vector<int> v = {1,2,3,4,5};
//find(starting posi,ending posi,element to find);

 auto itr =  find(v.begin(),v.end(),3);

if(itr != v.end()){
    cout<< " " << *itr <<endl;
}
    return 0;
}