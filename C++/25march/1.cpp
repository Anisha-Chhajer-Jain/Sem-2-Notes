#include<iostream>

using namespace std;

class Car{
    
    public:
    
      virtual void engine(){
           cout << "The engine is there"<<endl;
       }
       
       virtual ~Car(){
           cout << "Car is destroyed" << endl;
       }
};

class Honda : public Car{
    
    public:
    
        Honda(){
            this->engine();
        }
    
       void engine()override{
           cout << "Petrol and Diesel type engine is there" << endl;
       }
       
       ~Honda(){
           cout << "The honda is destroyed"<<endl;
       }
    
};

class Tata : public Car{
    
    public:
    
    
        
        void engine()override{
            cout << "The engine type is CNG AND DIESEL" <<endl;
            cout << "The capacity of a engine is 6ltr " << endl;
        }
        
        
        ~Tata(){
            cout << "The tata object is destroyed"<<endl;
        }
    
};

int main(){
    
    Car* obj1 = new Honda();
    
    delete obj1;
    
    // Car* obj1;
    
    // Honda obj2;
    
    // obj1 = &obj2;
    
    // obj1->engine();
    
    // Tata obj3;
    
    // obj1 = &obj3;
    
    // obj1->engine();
    
    
    
    
    return 0;
}