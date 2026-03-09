
#include <iostream>
using namespace std;

class Shape {
protected:
    float length, width;

public:
    void setValues(float l, float w) {
        length = l;
        width = w;
    }
};

class Rectangle : public Shape {
public:
    float area() {
        return length * width;
    }
};

class Triangle : public Shape {
public:
  float area(){
      return (length * width)/2;
  }
};

int main() {
    Rectangle r;
    Triangle t;

    r.setValues(10, 5);
    cout << "Area of Rectangle: " << r.area() << endl;

    t.setValues(10, 5);
    cout << "Area of Triangle: " << t.area() << endl;

    return 0;
}


