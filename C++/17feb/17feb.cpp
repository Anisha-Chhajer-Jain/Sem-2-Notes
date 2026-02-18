#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main()
{

    vector<int> v1 = {18, 56, 28, 29, 32};

    cout << "All elements before Heap (max-heap) conversion..." << endl;

    for (const auto &value : v1)
    {
        cout << "value are...: " << value << endl;
    }

    cout << "All elements after Heap (max-heap) conversion..." << endl;

    make_heap(v1.begin(), v1.end());

    for (const auto &value1 : v1)
    {
        cout << "value are....: " << value1 << endl;
    }

    cout << "POP operation....." << endl;

    pop_heap(v1.begin(), v1.end());

    for (const auto &value1 : v1)
    {
        cout << "value are....: " << value1 << endl;
    }

    v1.pop_back();

    cout << "POP operation done...." << endl;

    for (const auto &value1 : v1)
    {
        cout << "value are....: " << value1 << endl;
    }

    cout << "Insertion operation......" << endl;

    v1.push_back(789);

    cout << "Before balancing the heap tree.." << endl;

    for (const auto &value1 : v1)
    {
        cout << "value are....: " << value1 << endl;
    }

    push_heap(v1.begin(), v1.end());

    cout << "After balancing the heap tree..." << endl;
    for (const auto &value1 : v1)
    {
        cout << "value are....: " << value1 << endl;
    }

    cout << "Insertion operation......" << endl;

    v1.push_back(67);

    cout << "Before balancing the heap tree.." << endl;

    for (const auto &value1 : v1)
    {
        cout << "value are....: " << value1 << endl;
    }

    push_heap(v1.begin(), v1.end());

    cout << "After balancing the heap tree..." << endl;
    for (const auto &value1 : v1)
    {
        cout << "value are....: " << value1 << endl;
    }

    return 0;
}