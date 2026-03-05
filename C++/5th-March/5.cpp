
// #include<iostream>
// #include<string>

// using namespace std;

// class CreateObj{
  
//   public:
  
//     //  Data member.... but with static keyword
    
//       static int count;
//       static float num;
//       static string name;
      
//     // constructor....
    
//       CreateObj(){
//           ++count;
//           cout << "The count is incremented to trace the number of objects.." << endl;
//       }
      
//     // Function members it is non-static...
    
//       void display(){
//           cout << "Total numbers of object created for this class is ->" << CreateObj::count << endl;
//           cout << "The static name of this class is:" << CreateObj::name << endl;
//       }
      
//     // Function member but it is static...
    
//       static void display1(){
//           cout <<"The display1 fucntion is a static fucntion belongs to a class not to an object" << endl;
//       }
      
//     // Destrucotr to trace those objects which are going to destroy....
//       ~CreateObj(){
//           --count;
//           cout << "The current object is about to get destroyed through c++ compiler" << endl;
//       }    
// };

// // It is use to intialize the staic data members value....

// int CreateObj :: count = 0;
// float CreateObj :: num = 56.7;
// string CreateObj :: name = "Samir";

// void create(){
//     cout << "Total 5 object will be created.." << endl;
//     CreateObj obj4;
//     obj4.display();
    
//     CreateObj obj5;
//     obj5.display();
    
//     CreateObj obj6;
//     obj6.display();
    
//     CreateObj::display1();
    
//     CreateObj obj7;
//     obj7.display();
    
//     CreateObj obj8;
//     obj8.display();

//     cout <<"All object which is created is about to get destroyed becauise of its life scope" << endl;
// }

// int main(){
    
//     cout << "The object will start creating from this point" << endl;
    
//     CreateObj obj1;
//     obj1.display();
    
//     cout << "Another object is created..." << endl;
//     CreateObj obj2;
//     obj2.display();
    
//     cout << "Another object is created..." << endl;
//     CreateObj obj3;
//     obj3.display();

//     cout << "Function is called to create extra objects.." << endl;
//     create();
    
//     obj2.display();
//     CreateObj::display1();

//     return 0;
// }
