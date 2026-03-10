
#include <iostream>
#include <string>
#include <fstream>
using namespace std;

bool checkPrice(int price)
{
    try
    {
        if (price >= 0)
            return true;
        else
            throw(price);
    }
    catch (int price)
    {
        return false;
    }
}

class Product
{
private:
    int productId;
    int productPrice;
    string productName;

public:
    Product(int price, int id, string productname)
    {
        if (checkPrice(price) && id > 0)
        {
            productId = id;
            productPrice = price;
            this->productName = productname;
        }
        else cout<<"value given is invalid"<<endl;
    }
    friend void readData(Product &p1);
    friend void writeData(Product &p1);
};

void readData(Product &p1)
{
    ifstream file("product.txt");
    string code;
    if (file.is_open())
    {

        while (getline(file, code))
        {
            cout << code << endl;
        }
        file.close();
    }
}

void writeData(Product &p1)
{
    ofstream file("product.txt");

    if (file.is_open())
    {
        file << p1.productId << endl;
        file << p1.productName << endl;
        file << p1.productPrice << endl;

        file.close();
    }
}
int main()
{
    Product p1(-999, 1, "AirBud");
    writeData(p1);
    readData(p1);
    return 0;
}