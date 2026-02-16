// make two variables m & n assign a value in both variable from user side which is total size of list L1 & L2.Then assign total no of
// elements in both list variable(l1 and l2), concat it,sort it and atlast print the concated and sorted final list.


#include <iostream>
#include <list>
#include <algorithm>
using namespace std;

int main() {
    int m,n,x;
    
    list <int> l1;
    list <int> l2;
    list <int> l3;
    
    cin>>m;
    cin>>n;
    
    for(int i=0;i<m;i++){
        cin>>x;
        l1.push_back(x);
    }
    for(int i=0;i<n;i++){
        cin>>x;
        l2.push_back(x);
    }
    
    for(int i:l1) l3.push_back(i);
    for(int i:l2) l3.push_back(i);
    
    l3.sort();
    
    for(int i:l3) cout<< i<<" ";
    
    return 0;
}