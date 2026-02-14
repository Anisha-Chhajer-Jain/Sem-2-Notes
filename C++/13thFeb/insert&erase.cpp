

#include <iostream>
#include <set>

using namespace std;

int main()
{

    set<int> s1 = {45, 6, 78, 3, 0, 65};

    s1.insert(-76);
    s1.insert(-54);

    for (int value : s1)
    {
        cout << value << endl;
    }
    s1.erase(-54);
    return 0;
}
