#include <iostream>
using namespace std;

class Book {
private:
    int book_id;
    string book_name;
    float price;

public:
    Book(int id, string name, float p) {
        book_id = id;
        book_name = name;
        price = p;
    }

    void display() {
        cout << "Book ID: " << book_id << endl;
        cout << "Book Name: " << book_name << endl;
        cout << "price: " << price << endl;
       
    }
};
int main() {
 
    Book b[3] = {
        Book(1, "Norwegian Wood", 600),
        Book(2, "Too good to be True",450),
        Book(3, "The Secret", 550)
    };

    
    for(int i = 0; i < 3; i++) {
        b[i].display();
    }

    return 0;
}

