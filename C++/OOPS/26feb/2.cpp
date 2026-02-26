#include<iostream>
#include<string>

using namespace std;

class Laptop{
    
    // Common Data members.....
    
    public:
       
        string Ram = "Ram Available";
        string Storage = "Storge Available";
        string Mother_Board = "MotherBoard is Available";
        
    // Common Function members....
      
       
       void display(){
           cout << "Parent fucntion got called and the common data members are;  " << endl;
           cout << "Ram:  " << this->Ram<<endl;
           cout << "Storage " << this->Storage << endl;
           cout << "Mother_Board: " << this->Mother_Board << endl;
       }
       
       
};


class Lenovo : public Laptop{
    
    // Distinct Data members...
     
     public:
        
        string Storage_Type;
        string Ram_version;
        
        Lenovo(string Storage_Type, string Ram_version){
            this->Storage_Type = Storage_Type;
            this->Ram_version = Ram_version;
        }
        
        void display1(){
            cout << "Children fucntion is getting called:" << endl;
            
            cout << "Storage_Type: " << this->Storage_Type<<endl;
            cout << "Ram_version: " << this->Ram_version << endl;
        }
        
        void accessParentVaraible(){
           cout << "The Storage value is" << Storage << endl;
       }
};

class LenovoSubBrand : public Lenovo{
    
    public:

        LenovoSubBrand(string Storage_Type, string Ram_version):Lenovo(Storage_Type, Ram_version){};
        
        void display2(){
            cout << "This fucntion is declared inisde LenovoSubBrand who is a children class of its Lenovo parent only" << endl;
        }
        
};


int main(){
    
    // Lenovo l1("SSD", "16GB");
    
    // l1.display();
    
    // l1.display1();
    
    // l1.accessParentVaraible();
    
    LenovoSubBrand l2("SSD", "16gb");
    
    l2.display2();
    
    l2.display1();
    
    l2.display();
    return 0;
}