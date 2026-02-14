

#include <iostream>
#include <set>
using namespace std;

//order maintain from low to high

int main() {
set<int>  s = {10,20,30};
s.insert(40);
s.erase(20);

for(int data : s){
    cout<<data<<endl;
}
auto it = s.find(40);

if(it!=s.end()){
    cout<<"FOUND: "<<*it <<endl;
}
else{
    cout<<"NOT FOUND: "<<*it <<endl;
}
    return 0;
}
