#include<iostream>
#include<vector>
using namespace std;
 
int main(){
    vector<int> v={10,20,30};
    v.push_back(67);
    //iterate
    for(int value :v){
        cout<<value<<endl;
    }
    //push
    v.push_back(67);
    for(int value :v){
        cout<<value<<endl;
    }
    //pop
    v.pop_back();
    for(int value :v){
        cout<<value<<endl;
    }
    v.insert(v.begin()+1,67);
    for(int value :v){
        cout << value << endl;
    }
    v.erase(v.begin()+2);
    for(int value :v){
        cout << value << endl;
    }
    return 0;
}