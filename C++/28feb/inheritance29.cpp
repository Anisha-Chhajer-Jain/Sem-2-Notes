#include <iostream>
#include<map>
#include<fstream>

using namespace std;

map<string, int> m1 = {
    {"Add", 0},
    {"Sub", 0},
    {"Mul", 0},
    {"Div", 0}
};


void fileOperation(int a, int b, double result, string oper){
    cout << "The write opration is initiated.." << endl;
    
    ofstream file;
    file.open("Practice.txt", ios::app);
    
    if(file.is_open()){
        file << "The actual operator is->  " << oper << endl;
        file << "The value of a: " << a << " and the value of b is: " << b << endl;
        file << "The result is: " << result << endl;
    }
    file.close();
}

class Add{
    
    //Function members...
    
    public:
    
    
      void add(int a, int b){
          cout << "The addition of two number is:  " << a+b << endl;
          cout << "The fileOperation got called pls wait for some moments to append the information" << endl;
          fileOperation(a, b, a+b, "+");
          cout << "The fileOperation is done without any error"<<endl;
          cout << "The frequency is been traced..." << endl;
          m1["Add"]++;
      }
    
};

class Sub{
    //Function members...
    
    public:
    
      void sub(int a, int b){
          cout << "The subtraction of two number is:  " << a-b << endl;
          cout << "The fileOperation got called pls wait for some moments to append the information" << endl;
          fileOperation(a, b, a-b, "-");
          cout << "The fileOperation is done without any error"<<endl;
          cout << "The frequency is been traced..." << endl;
          m1["Sub"]++;
      }

};

class Mul{
    //Function members...
    
    public:
    
      void mul(int a, int b){
          cout << "The multiplication of two number is:  " << a*b << endl;
          cout << "The fileOperation got called pls wait for some moments to append the information" << endl;
          fileOperation(a, b, a*b, "*");
          cout << "The fileOperation is done without any error"<<endl;
          cout << "The frequency is been traced..." << endl;
          m1["Mul"]++;

      }
   
};

class Div{
    //Function members...
    
    public:
    
      void divison(int a, int b){
          if(b != 0){
                cout << "The addition of two number is:  " << a/b << endl;
                cout << "The fileOperation got called pls wait for some moments to append the information" << endl;
                fileOperation(a, b, a/b, "/");
                cout << "The fileOperation is done without any error"<<endl;
               cout << "The frequency is been traced..." << endl;
               m1["div"]++;

          }
          else{
              cout << "The second number must be more than 0" << endl;
          }
      }
   
};

class Cal : public Add, public Sub, public Mul, public Div{
    
    //Funciton members....
    
    void display(){
        cout << "The display funvtion got called " << endl;
    }
    
    
};

int main()
{
    cout<<"The actual execution begin..." << endl;
    
    Cal c1;
    
    c1.add(50, 20);

    return 0;
}