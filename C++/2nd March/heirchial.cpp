// Hierarchical Inheritance.....

#include<iostream>
#include<string>
using namespace std;

class Lenovo{
    // function members::
    public:
      void display(){
          cout << "The display fucntion which is common for every children class defined inside Lenovo parent class" << endl;
      }
};

class Legion : public Lenovo{
    // function members::
    public:
      void display1(){
          cout << "The display1 fucntion which is a fucntion for a Legion children class" << endl;
      }
};

class Loq: public Lenovo{
    // function members::
    public:
      void display2(){
          cout << "The display2 fucntion which is a fucntion for a Loq children class" << endl;
      }
};

class IdeaPad : public Lenovo{
    // function members::
    public:
      void display3(){
          cout << "The display3 fucntion which is a fucntion for a Ideapad children class" << endl;
      }
};

class Yoga : public Lenovo{
    // function members::
    public:
      void display4(){
          cout << "The display4 fucntion which is a fucntion for a Yoga children class" << endl;
      }
};


int main(){

    cout << "The object is created for Legion children class"<<endl;
    
    Legion l1;
    l1.display();
    l1.display1();
    // l1.display3();
    
    cout << "The object is created for Yoga children class"<<endl;
    
    Yoga y1;
    y1.display();
    y1.display4();

    return 0;
}








