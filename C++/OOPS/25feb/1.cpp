#include <iostream>
#include <string>

using namespace std;

class Student{
    public:
    string name;
    string gender;
    int age;
    
    Student(string name1,string gender1,int age1){
        cout << "Initializing the value in the required data member belong to class" << endl;
        name = name1;
        gender = gender1;
        age = age1;
        
        // name = name;
        // gender = gender;
        // age = age;
        
        // this->name = name;
        // this->gender = gender;
        // this->age = age;
    }
    
    ~Student()
    
    void display(){
        cout << "The data which is initailized are:" << this->name << " " << this->gender << " " << this->age << endl;
    }
    
};

void createObject(){
    cout << "Function got called where I will create the object outside the int main function" << endl;
   
    Student s3("Urvashi", "female", 28);
    s3.display();
}

int main()
{
   Student s1("anisha","female",18);
   s1.display();
   Student s2("samir","male",24);
   s2.display();
   createObject();
   
   for(int i = 0 ; i< 100000000 ; i++){
       
   }
   s1.display();
   
    return 0;
}