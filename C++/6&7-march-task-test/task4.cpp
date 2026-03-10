

#include <iostream>
using namespace std;

class Car {
private:
    string car_name;
    int price;

public:
    static int totalCars;   
    Car(string name, int p) {
        car_name = name;
        price = p;
        totalCars++;  
    }

    void display() {
        cout << "Car Name: " << car_name << endl;
        cout << "Price: " << price << endl;
        cout << endl;
    }

    static void showTotalCars() {
        cout << "Total Cars Created: " << totalCars << endl;
    }
};

int Car::totalCars = 0;

int main() {
    Car c1("Toyota", 20000);
    Car c2("BMW", 50000);
    Car c3("Tesla", 60000);

    c1.display();
    c2.display();
    c3.display();

    Car::showTotalCars();   

    return 0;
}