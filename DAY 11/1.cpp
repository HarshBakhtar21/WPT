#include<iostream>
#include<cmath>
using namespace std;

bool isArmstrong(int num){
    int original=num;
    int sum = 0;
    int digits = 0;

int temp=num;
while(temp != 0){
    digits++;
    temp /= 10;
}

temp = num;
while(temp != 0){
    int digit = temp % 10;
    sum += pow(digit,digit);
    temp /= 10;

}

return sum == original;


}


int main(){
    int number;
    cout
}